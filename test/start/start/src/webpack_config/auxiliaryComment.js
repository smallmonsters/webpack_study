const path = require('path');

module.exports = {
  // context: path.resolve(__dirname, '../Management'),
  // entry: ['./src/index.js','./src/alter.js'],
  entry: '../index.js',
  output: {
    filename: 'main[hash:5].js',
    path: path.resolve(__dirname, '../dist')
  }
};