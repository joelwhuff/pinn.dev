import { resolve } from 'path';
import { fileURLToPath } from 'url';

import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import CssMinimizerPlugin from 'css-minimizer-webpack-plugin';
import TerserPlugin from 'terser-webpack-plugin';

import HTML_MINIFIER_OPTIONS from './html-minifier-options.js';
import CLEAN_CSS_OPTIONS from './clean-css-options.js';

export default {
    mode: 'production',
    entry: './src/js/index.js',
    output: {
        path: resolve(fileURLToPath(import.meta.url), '../../dist'),
        filename: '[contenthash].js',
        assetModuleFilename: '[hash][ext]',
        clean: true,
    },
    module: {
        rules: [
            { test: /\.less$/i, use: [MiniCssExtractPlugin.loader, 'css-loader', 'less-loader'] },
            {
                test: /\.(svg|png|jpeg|gif|ico)$/i,
                type: 'asset/resource',
                generator: { outputPath: 'assets/images/', publicPath: 'assets/images/' },
            },
            {
                test: /\.(ttf|woff|woff2)$/i,
                type: 'asset/resource',
                generator: { outputPath: 'assets/fonts/', publicPath: 'assets/fonts/', filename: '[name][ext]' },
            },
            {
                test: /\.(mp3|wav)$/i,
                type: 'asset/resource',
                generator: { outputPath: 'assets/audio/', publicPath: 'assets/audio/' },
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/template.html',
            minify: HTML_MINIFIER_OPTIONS,
        }),
        new MiniCssExtractPlugin({ filename: '[contenthash].css' }),
    ],
    optimization: {
        minimizer: [
            new TerserPlugin(),
            new CssMinimizerPlugin({
                minify: CssMinimizerPlugin.cleanCssMinify,
                minimizerOptions: CLEAN_CSS_OPTIONS,
            }),
        ],
    },
};
