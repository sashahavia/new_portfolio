const config = require('config');

const mountPoint = config.get('mountPoint');
const contextPath = resolve(__dirname, '..', '..', 'src', 'client');
const outputPath = resolve(__dirname, '..', '..', `www`);

module.exports = { 
    context: contextPath,
    entry: ['babel-polyfill', './main.js'],
        output: {
            path: outputPath,
            publicPath: `${mountPoint}/`,
            filename: 'bundle.js'
        },
        optimization: {
            minimize: false,
            splitChunks: {
                chunks: 'all',
                maxInitialRequests: Infinity,
                automaticNameDelimiter: '~',
                name: true,
                cacheGroups: {
                    vendors: {
                        test: /[\\/]node_modules[\\/]/,
                        chunks: 'all'
                    }
                }
            }
        },
        resolve: {
            modules: [process.env.NODE_PATH || join(__dirname, '..', '..', 'node_modules')],
        }
};