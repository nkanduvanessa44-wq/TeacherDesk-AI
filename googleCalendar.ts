import { CalendarEvent } from '../types';

/**
 * Lists forthcoming events from the user's Primary Google Calendar.
 */
export async function listGoogleCalendarEvents(accessToken: string): Promise<any[]> {
  const now = new Date().toISOString();
  const url = `https://www.googleapis.com/calendar/v3/calendars/primary/events?timeMin=${now}&maxResults=15&orderBy=startTime&singleEvents=true`;
  
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Accept': 'application/json',
    },
  });

  if (!response.ok) {
    const errText = await response.text();
    throw new Error(`Failed to load Google Calendar events: ${response.status} - ${errText}`);
  }

  const data = await response.json();
  return data.items || [];
}

/**
 * Creates individual events on the Primary Google Calendar.
 */
export async function insertGoogleCalendarEvent(
  accessToken: string,
  event: Omit<CalendarEvent, 'id'>
): Promise<any> {
  const url = 'https://www.googleapis.com/calendar/v3/calendars/primary/events';
  
  // Format Date & Time for Google Calendar API
  const startDateTime = new Date(`${event.date}T${event.time || "08:00"}:00`);
  const endDateTime = new Date(startDateTime.getTime() + 45 * 60 * 1000); // default 45 mins

  const resource = {
    summary: event.title,
    description: `Created via TeacherDesk AI Scheduler.\nGenre Category: ${event.type}\nStatus: Syllabi-Synced`,
    start: {
      dateTime: startDateTime.toISOString(),
      timeZone: 'Africa/Lusaka',
    },
    end: {
      dateTime: endDateTime.toISOString(),
      timeZone: 'Africa/Lusaka',
    },
    reminders: {
      useDefault: true,
    }
  };

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(resource),
  });

  if (!response.ok) {
    const errText = await response.text();
    throw new Error(`Failed to create Google Calendar event: ${response.status} - ${errText}`);
  }

  return await response.json();
}
