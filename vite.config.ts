import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// ✅ FINAL FIX FOR VERCEL DEPLOYMENT
export default defineConfig(({ mode }) => ({
  // These two lines fix the Vercel build issue 👇
  root: ".",     // Treat current folder as the project root
  base: "./",    // Use relative paths for build output

  build: {
    outDir: "dist", // Where the built files go (Vercel uses this)
  },

  server: {
    host: "::",
    port: 8080,
  },

  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
