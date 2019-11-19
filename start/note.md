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

除了entry和output外，还有一个context与项目出入口有关,能指定用于从配置中解析入口起点和loader,默认值为执行webpack命令时的目录

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

- output.chunkFilename
此选项决定了非入口(non-entry) chunk 文件的名称，如异步加载。
```JavaScript
  button.onclick = e => import(/* webpackChunkName: "async" */ './async').then(module => {
      var async = module.default;
    });
    async()
  return element;
}
```
上面是一个异步加载，点击button才会去加载async.js。当我们没有配置chunkFilename

打包

![image](https://github.com/smallmonsters/webpack_study/blob/master/img/start/1.png)

点击按钮 network

![image](https://github.com/smallmonsters/webpack_study/blob/master/img/start/2.png)

修改webpack配置
```JavaScript
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    chunkFilename :"[name].js",
  }
};
```

打包

![image](https://github.com/smallmonsters/webpack_study/blob/master/img/start/3.png)

>注意写了/* webpackChunkName: "async" */是指定打包出来的异步文件的名称,只有指定值chunkFilename才生效

点击按钮 network

![image](https://github.com/smallmonsters/webpack_study/blob/master/img/start/4.png)

完整[demo](https://github.com/smallmonsters/webpack_study/tree/master/start/src/output_chuckName)

- 

<!-- 
output.auxiliaryComment、output.library、output.libraryExport、output.libraryTarget 、output.jsonpFunction  -->


### 参考

webpack起步：https://webpack.docschina.org/guides/getting-started/

入口和上下文：https://webpack.docschina.org/configuration/entry-context/

懒加载：https://webpack.docschina.org/guides/lazy-loading/
