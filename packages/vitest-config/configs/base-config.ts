import {defineConfig} from 'vitest/config';

export const baseConfig = defineConfig({
    test: {
        environment: 'jsdom',
    }
});