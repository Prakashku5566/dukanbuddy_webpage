// // vite.config.js
// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";

// export default defineConfig({
//   plugins: [react()],
//   server: {
//     port: 3000, // You can change the port here
//   },
//   resolve: {
//     alias: {
//       "@": "/src", // Simplified import paths
//     },
//   },
// });

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000, // You can change the port here
  },
  resolve: {
    alias: {
      "@": "/src", // Simplified import paths
    },
  },
  build: {
    rollupOptions: {
      output: {
        // Ensure all assets have a proper structure for subroutes
        entryFileNames: "assets/[name].[hash].js",
        chunkFileNames: "assets/[name].[hash].js",
        assetFileNames: "assets/[name].[hash].[ext]",
      },
    },
  },
  base: "/",
});
