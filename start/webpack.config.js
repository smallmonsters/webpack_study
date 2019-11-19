const path = require('path');

module.exports = {
  // context: path.resolve(__dirname, '../Management'),
  // entry: ['./src/index.js','./src/alter.js'],
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  }
};