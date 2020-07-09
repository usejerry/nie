/*
 *  正式环境使用的配置
 */

const paramConfig = require('./webpack.params');
const webpack = require(paramConfig.require_path+'webpack');
const merge = require(paramConfig.require_path+'webpack-merge');
const baseConfig = require('./webpack.base');

const path = require('path');
const os = require("os");

const HappyPack = require(paramConfig.require_path+"happypack");
const MiniCssExtractPlugin = require(paramConfig.require_path+"mini-css-extract-plugin");

const happyThreadPool = HappyPack.ThreadPool({ size: os.cpus().length });


// webpack-merge 提供的 smart 方法，可以帮助我们更加轻松地处理 loader 配置的合并
const config = merge.smart(baseConfig, {
	output: {

		path: path.resolve(__dirname, '../dist'),
		filename: 'js/[name]_[contenthash:8].js',
		publicPath: paramConfig.cdn_path_dist
	},
	optimization: {
    	minimize: false,
		// runtimeChunk : true,
		// splitChunks: {
  //           cacheGroups: {
  //               commons: {// 页面之间的公用代码
  //                   chunks: 'initial',
  //                   minChunks: 2,
  //                   maxInitialRequests: 5, // The default limit is too small to showcase the effect
  //                   minSize: 0 // This is example is too small to create commons chunks
  //               }
  //           }
  //       }
    },
	plugins : [
		new MiniCssExtractPlugin({
	      filename: "css/[name]_[contenthash:8].css",
	      publicPath : "css"
	    }),
	    new webpack.DefinePlugin({
			__DEBUG: JSON.stringify(true),
			__CDNPATH : JSON.stringify(paramConfig.cdn_path_dist)
		}),
		new HappyPack({
	    	id : "less",
	    	threadPool: happyThreadPool,
	    	loaders : [
				{
					loader: 'css-loader',
					options: {
						minimize: false
					}
				},
				'sprites-loader',
				'less-loader'
			]
	    })
	],
	module: {
		rules: [
			{
				test: /\.css$/,
				include: [
					path.resolve(__dirname, '../src'),
				],
				use: [
					MiniCssExtractPlugin.loader,
					// 'style-loader', //会将 css-loader 解析的结果转变成 JS 代码，运行时动态插入 style 标签来让 CSS 代码生效
					{
						loader: 'css-loader',
						options: {
							minimize: false
						}
					}
				]

			},

			//CSS 预处理器
			{
				test: /\.less$/,
				// 因为这个插件需要干涉模块转换的内容，所以需要使用它对应的 loader
				use: [MiniCssExtractPlugin.loader,'happypack/loader?id=less']
			},
			{
				test : /\.html$/,
				use : [
            		{
						loader : 'html-include-loader',
						options: {
			                host: paramConfig.include_host,
			                encode : paramConfig.encode
			            }
					}
				]
			}
		]
	}


})

module.exports = config;