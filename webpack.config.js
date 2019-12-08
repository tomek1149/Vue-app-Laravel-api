const VueLoaderOptionsPlugin = require('vue-loader-options-plugin');
module.exports = {
    // ... other config
    module: {
        rules: [

            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        query: {
                            babelrc: false,
                            presets: [
                                'babel-preset-env'
                            ],
                            plugins: [
                                'babel-plugin-transform-decorators-legacy'
                            ]
                        }
                    }
                ]
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {
                        js: 'babel-loader', // additional loaders here
                    }
                }
            }
            // ... other rule
        ]
    },
    plugins: [
        new VueLoaderOptionsPlugin({
            babel: { // options for babel-loader
                presets: ['babel-preset-env'],
                plugins: ['babel-plugin-transform-decorators-legacy']
            }
        }),
    ]
}