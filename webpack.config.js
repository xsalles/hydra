
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = ( argv) => {
    const isProduction = argv.mode === 'production'

    return {
        mode: isProduction ? 'production' : 'development',
        optimization :{
          usedExports: true,
        },
        entry: './src/index.js',
        output: {
            path: path.resolve(__dirname, 'dist'),
        },
        devServer: {
            open: true,
            host: 'localhost',
        },
        resolve : {
          extensions: ['.js', '.jsx', '.json']
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: 'index.html',
            }),
        ],
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/i,
                    loader: 'babel-loader',
                },
                {
                    test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif|webp)$/i,
                    type: 'asset',
                },
        
                // Add your rules for custom modules here
                // Learn more about loaders from https://webpack.js.org/loaders/
            ],
        },
    }
}