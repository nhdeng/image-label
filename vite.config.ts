import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import libCss from 'vite-plugin-libcss';
import dts from 'vite-plugin-dts'
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), libCss(), dts({
    beforeWriteFile: (filePath, content) => ({
      filePath: filePath.replace(/src/, ''),
      content
    })
  })],
  build: {
    lib: {
      entry: resolve(__dirname, "packages/image-label.tsx"),
      name: "ImageLabel",
      fileName: (format) => `image-label.${format}.js`,
    },
    rollupOptions: {
      // 那些你不想打包进库的依赖
      external: ["react", "react-dom"],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          react: "React",
          "react-dom": "react-dom",
        },
      },
    },
  }
})
