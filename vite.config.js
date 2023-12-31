import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import laravel from 'laravel-vite-plugin';
import vueJsx from '@vitejs/plugin-vue-jsx';

export default defineConfig({
    server: {
        hmr: { host: '0.0.0.0' },
        host: '0.0.0.0',
        port: 3000,
    },
    plugins: [
        laravel({
            input: ['resources/sass/app.scss', 'resources/ts/app.ts'], // TypeScriptファイルへの変更
            refresh: true,
        }),
        vue(), // Vueプラグイン
        vueJsx(), // Vue 3 JSXサポート
    ],
    resolve: {
        alias: {
            '@': '/resources/ts', // エイリアス設定
        },
    },
    build: {
        outDir: 'public/build', // ビルド出力ディレクトリ
        emptyOutDir: true, // ビルド前に出力ディレクトリを空にする
        rollupOptions: {
            // 必要に応じてRollupの設定を追加
        },
    },
});
