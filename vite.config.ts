import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: '/', // 使用自定义域名时使用根路径
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    // 确保生成正确的文件名
    rollupOptions: {
      output: {
        // 避免文件名中包含特殊字符
        entryFileNames: 'assets/[name]-[hash].js',
        chunkFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]'
      }
    }
  }
})

