import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/', // Ensure correct base path
  server: {
    historyApiFallback: true // Allows React Router to handle routes
  }
});
