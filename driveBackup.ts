import { localDb } from '../localDb';

export interface BackupData {
  version: string;
  backupTime: string;
  profile: any;
  settings: any;
  lessons: any[];
  schemes: any[];
  students: any[];
  assessments: any[];
  marks: any[];
  resources: any[];
  diagrams: any[];
  calendar: any[];
}

/**
 * Packs all localDb items into a single backup payload.
 */
export function gatherBackupData(): BackupData {
  return {
    version: "1.0.0",
    backupTime: new Date().toISOString(),
    profile: localDb.getProfile(),
    settings: localDb.getSettings(),
    lessons: localDb.getLessons(),
    schemes: localDb.getSchemes(),
    students: localDb.getStudents(),
    assessments: localDb.getAssessments(),
    marks: localDb.getMarks(),
    resources: localDb.getResources(),
    diagrams: localDb.getDiagrams(),
    calendar: localDb.getCalendar(),
  };
}

/**
 * Unpacks backup data into the local database.
 */
export function restoreBackupData(data: BackupData) {
  if (data.profile) localDb.saveProfile(data.profile);
  if (data.settings) localDb.saveSettings(data.settings);
  if (data.lessons) localDb.saveLessons(data.lessons);
  if (data.schemes) localDb.saveSchemes(data.schemes);
  if (data.students) localDb.saveStudents(data.students);
  if (data.assessments) localDb.saveAssessments(data.assessments);
  if (data.marks) localDb.saveMarks(data.marks);
  if (data.resources) localDb.saveResources(data.resources);
  if (data.diagrams) localDb.saveDiagrams(data.diagrams);
  if (data.calendar) localDb.saveCalendar(data.calendar);
}

/**
 * Searches for 'TeacherDesk_Backup.json' in the authenticated user's Google Drive.
 * Returns file ID if found, otherwhise null.
 */
export async function findBackupFile(accessToken: string): Promise<{ id: string; name: string; modifiedTime: string } | null> {
  const url = `https://www.googleapis.com/drive/v3/files?q=name='TeacherDesk_Backup.json' and trashed=false&fields=files(id,name,modifiedTime)&pageSize=1`;
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Accept': 'application/json',
    },
  });

  if (!response.ok) {
    const errText = await response.text();
    throw new Error(`Failed to list Drive files: ${response.status} - ${errText}`);
  }

  const data = await response.json();
  if (data.files && data.files.length > 0) {
    return {
      id: data.files[0].id,
      name: data.files[0].name,
      modifiedTime: data.files[0].modifiedTime || new Date().toISOString(),
    };
  }
  return null;
}

/**
 * Downloads backup JSON payload from Google Drive.
 */
export async function downloadBackup(accessToken: string, fileId: string): Promise<BackupData> {
  const url = `https://www.googleapis.com/drive/v3/files/${fileId}?alt=media`;
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  if (!response.ok) {
    throw new Error(`Failed to download backup metadata: ${response.statusText}`);
  }

  return await response.json();
}

/**
 * Backs up the local teacher data to Google Drive.
 * If file already exists, it updates it. Else, it creates it.
 */
export async function uploadBackup(accessToken: string): Promise<{ fileId: string; updatedTime: string }> {
  const backupPayload = gatherBackupData();
  const serialized = JSON.stringify(backupPayload, null, 2);

  // 1. Search for existing file
  const existing = await findBackupFile(accessToken);
  let fileId = existing?.id;

  if (fileId) {
    // 2. File exists: update its media content
    const uploadUrl = `https://www.googleapis.com/upload/drive/v3/files/${fileId}?uploadType=media`;
    const response = await fetch(uploadUrl, {
      method: 'PATCH',
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
      body: serialized,
    });

    if (!response.ok) {
      const errText = await response.text();
      throw new Error(`Failed to update existing backup: ${response.statusText} - ${errText}`);
    }

    return { fileId, updatedTime: new Date().toISOString() };
  } else {
    // 3. File doesn't exist: create file metadata first
    const createUrl = `https://www.googleapis.com/drive/v3/files`;
    const createResponse = await fetch(createUrl, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: "TeacherDesk_Backup.json",
        mimeType: "application/json",
      }),
    });

    if (!createResponse.ok) {
      const errText = await createResponse.text();
      throw new Error(`Failed to create backup metadata in your Drive: ${createResponse.statusText} - ${errText}`);
    }

    const fileMeta = await createResponse.json();
    fileId = fileMeta.id;

    // 4. Upload content to the newly created file ID
    const uploadUrl = `https://www.googleapis.com/upload/drive/v3/files/${fileId}?uploadType=media`;
    const response = await fetch(uploadUrl, {
      method: 'PATCH',
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
      body: serialized,
    });

    if (!response.ok) {
      const errText = await response.text();
      throw new Error(`Failed to write backup body payload: ${response.statusText} - ${errText}`);
    }

    return { fileId: fileId!, updatedTime: new Date().toISOString() };
  }
}
