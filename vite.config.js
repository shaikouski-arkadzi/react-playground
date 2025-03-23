import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import path from "path";
import stylelint from "vite-plugin-stylelint";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgr(),
    stylelint({
      include: ["src/**/*.{css,scss,less}"],
      cache: false, // Отключает кеширование
      throwOnWarning: false, // Не блокирует сборку при предупреждениях
      throwOnError: false, // Блокирует сборку при ошибках
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"), // Алиас для src
      features: path.resolve(__dirname, "src/features"), // Алиас для компонентов
    },
  },
});
