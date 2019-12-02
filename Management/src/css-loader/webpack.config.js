const path = require('path');

module.exports = {
  // entry: './index.js',
  entry: './modules.js',
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
      // {
      //   test: /\.css$/i,
      //   use: ["style-loader",{
      //     loader: 'css-loader',
      //     options: {
      //       import:true,
      //       url:false,
      //     }
      //   }],
      // },
      /* modules */
      {
        test: /\.css$/i,
        use: ["style-loader",{
          loader: 'css-loader',
          options: {
            modules: {
              // mode: 'global',
              hashPrefix: 'hash',
              localIdentName: '[path]',
              context: path.resolve(__dirname, '../../../start/src/output_chuckName/src'),
            },
          }
        }],
      },
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
};