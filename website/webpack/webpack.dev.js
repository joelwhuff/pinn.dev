import { resolve } from 'path';
import { fileURLToPath } from 'url';

import HtmlWebpackPlugin from 'html-webpack-plugin';

export default {
    mode: 'development',
    entry: './src/js/index.js',
    output: {
        path: resolve(fileURLToPath(import.meta.url), 'dist'),
        filename: 'main.js',
        assetModuleFilename: '[name][ext]',
    },
    module: {
        rules: [
            { test: /\.less$/i, use: ['style-loader', 'css-loader', 'less-loader'] },
            {
                test: /\.(svg|png|jpg|jpeg|gif|ico)$/i,
                type: 'asset/resource',
                generator: { outputPath: 'assets/images/', publicPath: 'assets/images/' },
            },
            {
                test: /\.(ttf|woff|woff2)$/i,
                type: 'asset/resource',
                generator: { outputPath: 'assets/fonts/', publicPath: 'assets/fonts/' },
            },
            {
                test: /\.(mp3|wav|weba)$/i,
                type: 'asset/resource',
                generator: { outputPath: 'assets/audio/', publicPath: 'assets/audio/' },
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/template.html',
        }),
    ],
};
