import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,         // permite conexões externas
    port: 5173,
    allowedHosts: [
      "b7286398d0c0.ngrok-free.app", // 👈 host gerado pelo ngrok
    ]
  }
});
