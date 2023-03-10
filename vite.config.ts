import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// @ts-ignore
import path from 'path';

const pathResolve = (pathStr:String) => {
  // @ts-ignore
  return path.resolve(__dirname, pathStr);
}

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [vue()],
  server: {
    host: '0.0.0.0', // 本地启动的地址
    port: 3000, // 服务端口号
    proxy: { // 代理配置
      '/api/': {
        target: 'http:xxx.xxx.xx.x',
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    },
  },
  resolve: {
    alias: {
      '@': pathResolve('./src'),
    }
  },
  build: {
    sourcemap: false,
    minify: 'esbuild', // 构建时的压缩方式
    rollupOptions: {
      output: {
        chunkFileNames: 'js/[name]-[hash].js',
        entryFileNames: 'js/[name]-[hash].js',
        assetFileNames: '[ext]/[name]-[hash].[ext]',
      }
    }
  }
})
