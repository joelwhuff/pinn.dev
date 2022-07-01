// https://github.com/terser/html-minifier-terser#options-quick-reference

import CLEAN_CSS_OPTIONS from './clean-css-options.js';

const HTML_MINIFIER_OPTIONS = {
    collapseBooleanAttributes: true,
    collapseInlineTagWhitespace: true,
    collapseWhitespace: true,
    minifyCSS: CLEAN_CSS_OPTIONS,
    minifyJS: true,
    removeAttributeQuotes: true,
    removeComments: true,
    removeEmptyAttributes: true,
    removeRedundantAttributes: true,
    removeScriptTypeAttributes: true,
    removeStyleLinkTypeAttributes: true,
    sortAttributes: true,
    sortClassName: true,
};

export default HTML_MINIFIER_OPTIONS;
