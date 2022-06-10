const path = require("path");

module.exports = {
    devtool: "source-map",
    mode: "production",

    entry: path.join(__dirname, "src", "index.tsx"),

    output: {
        path: path.join(__dirname, "dist"),
        filename: "index.bundle.js",
        assetModuleFilename: path.join("assets", "[name][ext]")
    },
    devServer: {
        port: 8080,
        liveReload: true
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx|js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif|pdf)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(css)$/i,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
              },
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
      },

};