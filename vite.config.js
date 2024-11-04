import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: "/Responsive-Fruit-Website-on-React-Tailwind-CSS-Framer-Motion/",
  plugins: [react()],
})