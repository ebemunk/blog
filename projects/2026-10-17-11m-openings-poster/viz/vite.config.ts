import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

const contentBuild = "../../../content/2026-10-17-11m-openings-poster/build";

export default defineConfig(({ command }) => {
  if (command === "serve") {
    return { plugins: [react()] };
  }

  return {
    plugins: [react()],
    define: {
      "process.env.NODE_ENV": '"production"',
    },
    build: {
      outDir: contentBuild,
      emptyOutDir: true,
      lib: {
        entry: "src/embed.tsx",
        formats: ["es"],
        fileName: () => "index.js",
      },
      cssCodeSplit: false,
      rollupOptions: {
        output: {
          assetFileNames: "index[extname]",
        },
      },
    },
  };
});
