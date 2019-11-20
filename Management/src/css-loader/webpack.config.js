const path = require('path');
const HtmlWebpackPlugin=require("html-webpack-plugin")

module.exports = {
  entry: './index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      // {
      //   test: /\.css$/i,
      //   use: ['style-loader', 'css-loader',]
      // },
      /*使用 to-string-loader */
      // {
      //   test: /\.css$/i,
      //   use: ['to-string-loader', 'css-loader'],
      // },
      /* url:false */
      // {
      //   test: /\.css$/i,
      //   use: ["style-loader",{
      //     loader: 'css-loader',
      //     options: {
      //       url:false
      //     }
      //   }],
      // },
      /* import:false */
      {
        test: /\.css$/i,
        use: ["style-loader",{
          loader: 'css-loader',
          options: {
            import:true,
          }
        }],
      },
      /* modules:true */
      // {
      //   test: /\.css$/i,
      //   // loader: "style-loader!css-loader" //初始
      //   // use:["style-loader","css-loader"],
      //   use: ["style-loader",{
      //     loader: 'css-loader',
      //     options: {
      //       modules:true,
      //     }
      //   }],
      // },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              outputPath: 'image/',  // 指定图片输入的文件夹
              publicPath: '../dist/image/',  // 指定获取图片的路径
              limit: 500,
              name: '[name].[hash:8].[ext]'  // 输入的图片名
            }
          }
        ]
      }
    ]
  },
  plugins:[
    new HtmlWebpackPlugin({
      title: '标题标题',
      template: './index.html', // 源模板文件
      filename: './index.html', // 输出文件【注意：这里的根路径是module.exports.output.path】
      inject: true,
      minify: {
          removeComments: true,
          collapseWhitespace: true
      },
      chunks: ["main"]
  })
  ]
};