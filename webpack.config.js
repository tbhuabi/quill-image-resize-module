var path = require('path');

module.exports = {
    entry: "./index.js",
    output: {
        path: __dirname,
        library: 'ImageResize',
        libraryTarget: 'umd',
        filename: "index.build.js"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                include: path.join(__dirname, 'src'),
                exclude: /(node_modules|bower_components)/,
                use: [{
                    loader: 'babel-loader',
                    options: {
                        "presets": [["es2015", { "modules": false }]],
                        "plugins": ["babel-plugin-transform-class-properties"]
                    }
                }]
            },
            {
                test: /\.svg$/,
                use: [{
                    loader: 'raw-loader'
                }]
            }
        ]
    }
};
