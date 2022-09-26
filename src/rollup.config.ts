import tsPlugin from '@rollup/plugin-typescript';

export default {
    input: 'src/main.ts',
    output: {
        file: 'bundle.js'
    },
    plugins: [
        tsPlugin({ module: "ESNext" }),
    ],
};