### [css-loader](https://www.npmjs.com/package/css-loader)

##### 使用
```JavaScript
// webpack.config.js
 module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ]
  }

// index.js
import css from "./css/style.css"
or
import("./css/style.css")

```
- Option
  * url:是否处理图片路径。
  在style.css引入1.png当背景，当我们打包后目录结构变为dist，使用背景图片的路径是css-loader的处理过的能正常显示。当url为false，css-loader将不会处理图片路径。
    - true(默认)
    - false
    - function
    自定义是否处理某些文件
    ```JavaScript
     url: (url, resourcePath) => {
        // resourcePath - path to css file
        // Don't handle `img.png` urls
        if (url.includes('img.png')) {
          return false;
        }
        return true;
      },
    ```
  * import：是否处理@import引入的文件支援
  与url同理，只是将url换成了@import(path)
    - true(默认)
    - false
    - function
    自定义是否处理某些文件
    ```JavaScript
    import: (parsedImport, resourcePath) => {
      // parsedImport.url - url of `@import`
      // parsedImport.media - media query of `@import`
      // resourcePath - path to css file
      // Don't handle `style.css` import
      if (parsedImport.url.includes('style.css')) {
        return false;
      }
      return true;
    },
    ```
  * modules：Boolean|String|Object ([css Modules](https://github.com/smallmonsters/Blog/blob/master/201911/19.md)相关知识)
    - false（默认）
    关闭css Modules功能
    - true
    开启css Modules功能
    - global
    声明的class默认为global的
    - Object
      - mode 
        * local(默认) 
        声明的class默认为local的
        * global 
        声明的class默认为global的
      - localIdentName
      配置生成的ident
      ```JavaScript
      {
        test: /\.css$/i,
        loader: 'css-loader',
        options: {
          modules: {
            localIdentName: '[path][name]__[local]--[hash:base64:5]',
          },
        },
      },
      ```
      
      - context
      允许重新定义本地标识名称的基本加载程序上下文,貌似修改了值，上面的[path]就变了
      ```JavaScript
      {
        test: /\.css$/i,
        loader: 'css-loader',
        options: {
          modules: {
            context: path.resolve(__dirname, 'context'),
          },
        },
      },
      ```



