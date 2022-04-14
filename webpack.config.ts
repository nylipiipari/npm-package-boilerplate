import path from 'path';
import webpack from 'webpack';

const PATHS = {
    entryPoint: path.resolve(__dirname, 'src/index.ts'),
    output: path.resolve(__dirname, 'dist'),
};

const config: webpack.Configuration = {
    mode: 'development',
    entry: {
        'bundle': PATHS.entryPoint,
    },
    output: {
        path: PATHS.output,
        filename: "[name].js",
    },
    resolve: {
        extensions: ['.ts', '.js'],
    },
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.ts$/i,
                exclude: /node_modules/,
                use: 'ts-loader',
            },
        ],
    },
};

export default config;