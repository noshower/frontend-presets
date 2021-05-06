# `@tongtian/babel-preset`

## 简介

这个 package 是专为 react 应用设计的 babel 预设。

## 依赖

![](https://cdn.nlark.com/yuque/0/2021/jpeg/1065536/1620293622944-3cb7b531-7dd5-4f2d-a0bb-161c4c0af204.jpeg)

## 安装

### npm 版本 7 及以上

```sh
npm install --save-dev @tongtian/babel-preset
```

### npm 版本 6 及以下

```sh
npm install --save-dev @tongtian/babel-preset @babel/core  @babel/plugin-proposal-decorators @babel/plugin-transform-runtime @babel/preset-env @babel/preset-react @babel/preset-typescript @babel/runtime @babel/runtime-corejs3 core-js
```

### npm 版本 5.0+也可以按下面的方式安装

```sh
npx install-peerdeps --dev @tongtian/babel-preset
```

## 用法

### 配置选项

| 选项          | 含义                                                                                               | 默认值                                                   |
| ------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------- |
| targets       | 代码运行需要支持的环境 ,推荐使用 **.browserslistrc** 文件指定目标环境                              | 默认支持所有浏览器，即会将 ES6 及以上代码转换为 ES5 代码 |
| useTypeScript | 是否使用 TypeScript                                                                                | true                                                     |
| runtime       | 编译 JSX 使用哪个运行时, React17 推荐使用 automatic (babel7.9.0 开始支持), 旧版 react 使用 classic | classic                                                  |

### 默认使用

```json
// .babelrc
{
  "presets": ["@tongtian/babel-preset"]
}
```

### 不使用 Typescript

```json
// .babelrc
{
  "presets": [["@tongtian/babel-preset", { "useTypeScript": false }]]
}
```

## 最佳实践

### 使用.browserslistrc 文件指定目标环境

```bash
# Browsers that we support

defaults
not IE 11
```

### 为不同运行环境，指定环境变量

开发环境：

```sh
process.env.BABEL_ENV = "development";
process.env.NODE_ENV = "development";
```

生产环境：

```sh
process.env.BABEL_ENV = "production";
process.env.NODE_ENV = "production";
```

有助于减少线上包的大小。

# 特点

- 支持按需引入 polyfill
- 不污染全局环境
- 支持 React
- 默认支持 TypeScript
- 支持动态导入
- 支持装饰器
- 支持大部分 Javascript 标准

# 支持的语言特性

支持最新的 JavaScript 标准。除了 ES6 语法功能外，它还支持：

- ES2021（例如：Promise.any）
- ES2020（例如：Promise.allSettled、可选链操作符）
- ES2019（例如：Array.prototype.flat）
- ES2018（例如：Rest 参数和扩展运算符）
- ES2017（例如：Object.entries）
- ES2016（例如：Array.prototype.includes）
- ES2015

# 注意

不支持 Proxy, 不支持 BigInt
