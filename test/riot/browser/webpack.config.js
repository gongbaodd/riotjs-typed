var path = require("path");
module.exports = {
    entry: "./src/index.ts",
    output: {
        path: path.resolve(__dirname, "./dist"),
        filename: "index.js"
    },
    module: {
        rules: [
            {
                test: /\.ts/,
                loader: "ts-loader"
            }
        ]
    },
    resolve: {
        extensions: [".ts"]
    }
};
