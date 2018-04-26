const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
// const OpenBrowserPlugin = require('open-browser-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
// const manifest = require('./dll/vendor-manifest.json');
const UglifyJsparallelPlugin = require('webpack-uglify-parallel');
const HappyPack = require('happypack');//多线程loader 加快编译速度

const webpackConfigBase = {
    entry: {
        client: path.join(__dirname, '../app/index.js'),
        vendor: [
            'react', 'react-router', 'react-dom',
        ]
    },
    output: {
        filename: '[name].[chunkhash].js',
        path: path.join(__dirname, 'dist'),
        chunkFilename: '[name].js',
    },
    resolve: {
        extensions: ['.js', '.json'],
        alias: {
            components: path.join(__dirname, '/../app/components'),
            pages: path.join(__dirname, '/../app/pages'),
            service: path.join(__dirname, '/../app/service'),
            utils: path.join(__dirname, '/../app/utils'),
            style: path.join(__dirname, '/../app/style'),
            images: path.join(__dirname, '/../app/assets/images'),
        },
    },
    module: {
        rules: [
            {
                test: /\.js[x]?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    cacheDirectory: true,
                    presets: ['react', 'es2015',"stage-0"]
                }
            },
            {
                test: /\.less$/,
                use:  ExtractTextPlugin.extract({ fallback: 'style-loader', use: ['css-loader','less-loader'] }),
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader' }),
            },
            //hash
            {
                test: /\.(png|jpg|jpeg|gif)$/,
                loader: 'url-loader?limit=8192 &name=images/[hash:8].[name].[ext]'
            },
            {
                test: /\.(woff|eot|ttf|svg|gif)$/,
                loader: 'file-loader?name=iconfont/[path][name].[ext]',
            },
            {
                test: /\.json$/,
                loader: 'json-loader'
            },
        ],
    },
    plugins: [
        // 提取css
        new ExtractTextPlugin('index.[chunkhash].css'),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, '../index.html'),
            filename:'index.html'
        }),
        //先抽离第三方库（node_modules下的都视为第三方库）
        new webpack.optimize.CommonsChunkPlugin({
            name: "vendor", // 必须与 entry 定义的第三方库名称一致
            filename: "vendor.[chunkhash].js", // 命名第三方库的打包文件名称
            minChunks: function (module) {
                // 这里提取所有 node_modules
                return (
                    module.resource &&
                    /\.js$/.test(module.resource) &&
                    module.resource.indexOf(
                        path.join(__dirname, '../node_modules')
                    ) === 0
                );
            }
        }),
        //把vendor和业务代码进一步抽离公共模块
        new webpack.optimize.CommonsChunkPlugin({
            name: 'common',
            filename:"common.[chunkhash].js",
            chunks:['vendor','main'],
            minChunks: 2
        }),

        //防止多处出现import的情况
        new webpack.ProvidePlugin({
            jQuery: "jquery",
            $: "jquery"
        }),
        new HappyPack({
            loaders: [ 'babel-loader?presets[]=es2015']
        }),

        new webpack.LoaderOptionsPlugin({
            minimize: true,
            debug: false,
        })

    ],
    devtool: 'source-map',

}

module.exports = webpackConfigBase
