### style-loader
- Option
    * injectType(String)
    指定如何将样式注入到DOM中。
        - styleTag(默认)
        使用多个style标签自动将样式注入到DOM中
        - singletonStyleTag
        使用一个style自动将样式注入到DOM中
        - lazyStyleTag
         使用多个style标签异步加载css

        ```JavaScript
        // webpack.config.js
         {
            test: /\.css$/i,
            // 一定要加上
            exclude: /\.lazy\.css$/i,
            use: ['style-loader', 'css-loader'],
        },
        {
            test: /\.lazy\.css$/i,
            use: [
            { loader: 'style-loader', options: { injectType: 'lazyStyleTag' } },
            'css-loader',
            ],
        },
        //js
        import styles from './css/styles.lazy.css';
        //2s后才会加载css
        setTimeout(() => {
         styles.use()
        }, 2000);
        ```
        > 在injectType不等于lazyStyleTag一定要exclude
        - lazySingletonStyleTag
       使用一个style异步加载css
        - linkTag
       使用多个link标签将样式注入到DOM中
       >注意这种方式是通过js动态插入link，如果想静态插入可以使用 MiniCssExtractPlugin。
       ```JavaScript
       {
        test: /\.link\.css$/i,
        use: [
          { loader: 'style-loader', options: { injectType: 'linkTag' } },
          { loader: 'file-loader' },
        ],
      },
       ```
    * attributes
    指定style或link标签的属性和值
    ```
    {
        test: /\.css$/i,
        use: [
          { loader: 'style-loader', options: { attributes: { id: 'id' } } },
          { loader: 'css-loader' },
        ],
      },
    ```
    insert
    指定style或link标签插入的位置，默认插入在head后
[完整demo]()