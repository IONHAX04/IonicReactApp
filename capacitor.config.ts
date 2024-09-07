import type { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "com.zadroit.takeit",
  appName: "Take It Have It",
  webDir: "dist",
  plugins: {
    SplashScreen: {
      launchShowDuration: 2000, 
      launchAutoHide: true,   
      backgroundColor: '#ffffff', 
      androidScaleType: 'CENTER_CROP',
      showSpinner: true,
      spinnerStyle: 'small',
      iosSpinnerStyle: 'small',
      spinnerColor: '#999999',
    },
  },
};

export default config;
