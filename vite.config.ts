import path from 'path'
import tsconfigPaths from 'vite-tsconfig-paths';
import { defineConfig } from 'vite'
import { reactRouter } from '@react-router/dev/vite'


export default defineConfig({
  plugins: [
    reactRouter(),
    tsconfigPaths()
  ],
  server: {
    port: 3000
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
})
