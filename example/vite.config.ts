import { defineConfig } from 'vite'

// Slidev does not scan the package's components for their dependencies, so
// socket.io-client must be pre-bundled by name; without this the slides render blank.
export default defineConfig({
  optimizeDeps: { include: ['socket.io-client'] },
})
