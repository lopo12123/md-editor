import { rmSync } from 'fs'
import path from 'path'
import { defineConfig } from 'vite'
import vuePlugin from "@vitejs/plugin-vue";
import vueJsxPlugin from "@vitejs/plugin-vue-jsx";
import electron from 'vite-plugin-electron'

rmSync('dist', { recursive: true, force: true }) // v14.14.0

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vuePlugin(),
        vueJsxPlugin(),
        electron({
            main: {
                entry: 'electron/main/index.ts',
                vite: {
                    build: {
                        // For Debug
                        sourcemap: true,
                        outDir: 'dist/electron/main',
                    }
                },
            },
            preload: {
                input: {
                    // You can configure multiple preload here
                    index: path.join(__dirname, 'electron/preload/index.ts'),
                },
                vite: {
                    build: {
                        // For Debug
                        sourcemap: 'inline',
                        outDir: 'dist/electron/preload',
                    },
                },
            },
            // Enables use of Node.js API in the Renderer-process
            // https://github.com/electron-vite/vite-plugin-electron/tree/main/packages/electron-renderer#electron-renderervite-serve
            renderer: {},
        }),
    ],
    resolve: {
        alias: {
            '@': path.resolve('src')
        }
    },
    server: {
        port: 8099
    },
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: `@import "@/styles/var.scss"; @import "@/styles/mixin.scss";`
            }
        }
    }
})
