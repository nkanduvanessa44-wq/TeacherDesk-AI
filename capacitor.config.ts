import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.cybershield.teacherdesk',
  appName: 'TeacherDesk AI Zambia',
  webDir: 'dist',
  bundledWebRuntime: false,
  android: {
    allowMixedContent: false
  },
  server: {
    androidScheme: 'https'
  }
};

export default config;
