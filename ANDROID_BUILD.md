# TeacherDesk AI Android build

This project is a React/Vite web application packaged with Capacitor.

## Important
The Android APK bundles the frontend and local data layer. AI generation, OCR, diagram generation, and other `/api/*` functions still require the existing Express backend (`server.ts`) to be deployed and reachable by the APK.

Set the GitHub Actions repository variable `VITE_API_BASE_URL` to the HTTPS URL of that backend before building the APK. The current source uses relative `/api/*` requests, so a follow-up API-base pass is required if the APK must call a backend on a different origin.

## GitHub build
1. Push this project to GitHub.
2. Open **Settings → Secrets and variables → Actions → Variables**.
3. Add `VITE_API_BASE_URL` with the HTTPS backend URL.
4. Open **Actions → Build TeacherDesk Android APK → Run workflow**.
5. Download the `TeacherDesk-AI-debug-apk` artifact.

For Play Store release, generate a signed AAB rather than distributing the debug APK.
