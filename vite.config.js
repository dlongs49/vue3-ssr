import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
    plugins: [vue({
        template: {
            ssr: true
        }
    })],
    server: {
        port: 6201,
        host: "0.0.0.0",
        base: './'
    },
    build: {
        manifest: true,
    }
})