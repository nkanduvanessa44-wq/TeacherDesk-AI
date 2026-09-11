/**
 * Resolves API calls for both the browser build and the Capacitor Android app.
 * In the Android APK, set VITE_API_BASE_URL to the HTTPS URL of the TeacherDesk
 * Express backend. In the browser, an empty value keeps same-origin /api calls.
 */
export const API_BASE_URL = (import.meta.env.VITE_API_BASE_URL || '').replace(/\/$/, '');

export const apiUrl = (path: string): string => {
  if (!API_BASE_URL || !path.startsWith('/api/')) return path;
  return `${API_BASE_URL}${path}`;
};
