
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Add this line
const ghPages = require('vite-plugin-gh-pages');

export default defineConfig({
  plugins: [react()],
  base: "portfolio", 
})
