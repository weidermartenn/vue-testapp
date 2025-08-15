import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],  
  server: {
    allowedHosts: ['c2ec7da9d51d.ngrok-free.app']
  }  
})
