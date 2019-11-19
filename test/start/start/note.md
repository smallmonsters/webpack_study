此章用到了两个配置项entry和output，接下来具体看看他们有些什么功能。

### entry
- string
```JavaScript
module.exports = {
  entry: './home.js',
};
```
- Array
```JavaScript
module.exports = {
  // 入口为多个js文件
  entry: ['./home.js','./home1.js],
};
```
- Object
```JavaScript
module.exports = {
  // 多页应用
 entry: {
    home: './home.js',
    about: './about.js',
    contact: './contact.js'
  }
};
```
- Function
要以以上数据形式返回
>entry为string或Array时,chuck值main，为object时，chuck为key值

除了entry和output外，还有一个context与项目出入口有关,能指定用于从配置中解析入口起点和loader

```JavaScript
module.exports = {
  //此时项目入口文件为与start同级目录的Management/src/index.js
  context: path.resolve(__dirname, '../Management'),
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  }
};
```

### output
相比entry，output的配置项就比较多了
output.auxiliaryComment 

### 参考
webpack起步：https://webpack.docschina.org/guides/getting-started/
入口和上下文：https://webpack.docschina.org/configuration/entry-context/