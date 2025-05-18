import { defineConfig } from 'vite';

export default defineConfig({
    base: './', // Refer to assets with a relative path
    build: {
        outDir: 'docs',
        emptyOutDir: true,
    },
});
