import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()], server: {
    hmr: {
      overlay: true,  // Esto garantiza que los errores se sigan mostrando en el overlay
    },
  },
})