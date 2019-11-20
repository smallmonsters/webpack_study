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
  * url:是否处理图片路径。在css中url引入的图片打包后，路径是否改变
    - true(默认)
    ```
    //style.css
    .hello {
      color: #039410;
      background: url("../../../../img/start/1.png");
    }
    ```
    >打包后删除start/1.png,页面依然有背景；删除dist/1.png页面找不到图片了
     - false
    ```
    //style.css
    .hello {
      color: #039410;
      background: url("../../../../img/start/1.png");
    }
    ```
    >打包后删除start/1.png,页面找不到图片了
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
  * import：暂时不知道什么意思
    ```css
    //style.css
    @import './style1.css'
    .hello {
      color: #039410;
      background: url("../../../../img/start/1.png");
    }
    //index.js
    import css from "./css/style.css"
    console.log(css)
    ```
    - true(默认)
    - false
    - function
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