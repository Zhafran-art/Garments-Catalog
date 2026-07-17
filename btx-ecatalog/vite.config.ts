import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Split rarely-changing third-party code into stable vendor chunks so the
    // browser can cache them across app deploys, and so no single library can
    // bloat the main bundle. Route/modal chunks are created automatically from
    // their dynamic imports (see React.lazy usage).
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (!id.includes('node_modules')) return
          if (id.includes('framer-motion')) return 'framer-motion'
          if (id.includes('lucide-react')) return 'icons'
          if (id.includes('react-router')) return 'router'
          if (
            id.includes('/react/') ||
            id.includes('/react-dom/') ||
            id.includes('/scheduler/')
          ) {
            return 'react'
          }
        },
      },
    },
  },
})
