const path = require('path');

module.exports = {
  entry: './index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      /**
       * injectType: styleTag
      */
      // {
      //   test: /\.css$/i,
      //   use: ['style-loader', 'css-loader'],
      // },
      /**injectType: singletonStyleTag */
      // {
      //   test: /\.css$/,
      //   use: [
      //     {
      //       loader:'style-loader',
      //       options:{
      //         injectType:"singletonStyleTag"
      //       }
      //     },
      //     'css-loader'
      //   ]
      // },
      /**injectType: singletonStyleTag */
      // {
      //   test: /\.css$/i,
      //   exclude: /\.lazy\.css$/i,
      //   use: ['style-loader', 'css-loader'],
      // },
      // {
      //   test: /\.lazy\.css$/i,
      //   use: [
      //     { loader: 'style-loader', options: { injectType: 'lazyStyleTag' } },
      //     'css-loader',
      //   ],
      // },
      /**injectType: linkTag */
      // {
      //   test: /\.css$/,
      //   use: [
      //     {
      //       loader: 'style-loader',
      //       options: {
      //         injectType: "linkTag"
      //       }
      //     },
      //     'file-loader'
      //   ]
      // },
      /** Attributes */
      {
        test: /\.css$/i,
        use: [
          { loader: 'style-loader', options: { attributes: { id: 'id' } } },
          { loader: 'css-loader' },
        ],
      },
    ]
  }
};