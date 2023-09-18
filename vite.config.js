///<reference types="vitest"/>
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    watch:true,
    environment : "jsdom",
    setupFiles: ["./setup.js"],
    css:true,
    globals:true,
  },
});
