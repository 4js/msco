### 技术栈

 react + react-router + webpack + antd + less + axios

### 项目运行

```
git clone git@github.com:4js/msco.git

cd msco （进入当前的项目）

npm install  (安装依赖包)

npm start (运行本地开发环境)

npm run build:prod (编译线上---prod)

npm run build:test (编译测试---test)

npm run build:dev (编译开发---dev)

```


### 目录结构

```
├─.babelrc                            // babel的配置
├─.config.json                        // 如果使用了ip代理，那么配置文件在这里
├─.eslintcache                        // eslint的缓存
├─.eslintignore                       // eslint设置忽略的文件
├─.eslintrc.json                      // eslint的配置文件
├─.gitignore                          // git忽略上传的文件
├─package.json                        // npm命令包
├─readme.md                           // 项目介绍
├─docs                                // 文档
├─build
|  ├─webpack.base.config.js            // 基础编译配置文件
|  ├─webpack.dev.config.js            // 开发环境配置文件
|  ├─webpack.prod.config.js            // 线上环境编译配置文件
|  ├─webpack.pdev.config.js            // 开发环境编译配置文件
|  ├─webpack.test.config.js            // 测试环境编译配置文件
├─app                                 // 页面主文件
|  ├─index.js
|  ├─utils                            // 公用的文件
|  ├─style                            // 样式库
|  |   └theme.less                    // 存放变量的less
|  ├─pages                            // 项目绝大部分业务文件
|  ├─assets                           // 图片文件夹
|  ├─components                       // 公用的组件库 
```

### 文档

### 参考链接

+ es6:[教程](http://es6.ruanyifeng.com/)
+ react:[教程](https://reactjs.org/)
+ react-router:[教程](https://reacttraining.com/react-router/web/guides/philosophy)
+ redux教程:[教程一](http://www.ruanyifeng.com/blog/2016/09/redux_tutorial_part_one_basic_usages.html)、[教程二](http://www.ruanyifeng.com/blog/2016/09/redux_tutorial_part_two_async_operations.html)、[教程三](http://www.ruanyifeng.com/blog/2016/09/redux_tutorial_part_three_react-redux.html)

### 联系作者

    * 962116239@qq.com