/* eslint-disable no-undef */
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path' // 1. Import the 'path' module

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // 2. Add the resolve block to configure the path alias
  resolve: {
    alias: {
      // Maps the '@/' alias to the absolute path of the 'src' directory
      "@": path.resolve(__dirname, "./src"), 
    },
  },
})