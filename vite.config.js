import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import compression from 'vite-plugin-compression';

export default defineConfig({
  plugins: [
    react(),
    compression({
      // Optional options for Gzip
      verbose: true, // Log output
      disable: false, // Disable compression in development
      threshold: 10240, // Only files bigger than this size will be gzipped (in bytes)
      algorithm: 'gzip', // Compression algorithm
      ext: '.gz', // File extension for the compressed files
      deleteOriginFile: false, // Delete original files
    }),
  ],
  build: {
    // Other build options if needed
    outDir: 'dist', // Output directory
  },
  assetsInclude: ['**/*.glb']
});
