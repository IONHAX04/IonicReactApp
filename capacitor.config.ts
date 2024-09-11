import type { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "com.zadroit.takeit",
  appName: "Take It Have It",
  webDir: "dist",
  bundledWebRuntime: false,
  plugins: {
    Share: {
      enabled: true,
    },
  },
};

export default config;
