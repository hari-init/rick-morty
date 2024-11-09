import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { VitePWA } from "vite-plugin-pwa";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    VitePWA({
      registerType: "autoUpdate",
      devOptions: {
        enabled: true,
      },
      manifest: {
        name: "Your App Name",
        short_name: "App",
        icons: [
          {
            src: "/icons/android-launchericon-48-48.png",
            sizes: "48x48",
            type: "image/png",
            purpose: "any",
          },
          {
            src: "/icons/android-launchericon-72-72.png",
            sizes: "72x72",
            type: "image/png",
          },
          {
            src: "/icons/android-launchericon-96-96.png",
            sizes: "96x96",
            type: "image/png",
          },
          {
            src: "/icons/android-launchericon-144-144.png",
            sizes: "144x144",
            type: "image/png",
          },
          {
            src: "/icons/android-launchericon-192-192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/icons/android-launchericon-512-512.png",
            sizes: "512x512",
            type: "image/png",
          },
          // Add more icons as needed for other platforms or sizes
        ],
        screenshots: [
          {
            src: "/screenshots/screenshot1.png",
            sizes: "1280x720",
            type: "image/png",
            form_factor: "wide",
          },
          {
            src: "/screenshots/screenshot2.png",
            sizes: "720x1280",
            type: "image/png",
            form_factor: "narrow",
          },
          // Add more screenshots if desired
        ],
      },
    }),
  ],
});
