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

| 选项          | 含义                                                                                               | 默认值  |
| ------------- | -------------------------------------------------------------------------------------------------- | ------- |
| useTypeScript | 是否使用 TypeScript                                                                                | true    |
| runtime       | 编译 JSX 使用哪个运行时, React17 推荐使用 automatic (babel7.9.0 开始支持), 旧版 react 使用 classic | classic |

### 直接使用

babel 7.13.0 开始，可以直接在配置顶层设置 targets

```json
// .babelrc
{
  "targets": "> 0.25%, not dead",
  "presets": ["@tongtian/babel-preset"]
}
```

### 不使用 Typescript

```json
// .babelrc
{
  "targets": "> 0.25%, not dead",
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

使用 React 时，有助于减少线上包的大小。

### 为测试设置 targets

```
{
  "targets": {
   "node": "current",
  },
  "presets": ["@tongtian/babel-preset"]
}
```

当 node 版本保持较新时，有助于提高测试效率。因为减少了测试过程中，代码的转换。

## 特点

- 支持按需引入 polyfill
- 不污染全局环境
- 支持 React
- 默认支持 TypeScript
- 支持动态导入
- 支持装饰器
- 支持大部分 Javascript 标准

## 支持的语言特性

支持最新的 JavaScript 标准。除了 ES6 语法功能外，它还支持：

- ES2021（例如：Promise.any）
- ES2020（例如：Promise.allSettled、可选链操作符）
- ES2019（例如：Array.prototype.flat）
- ES2018（例如：Rest 参数和扩展运算符）
- ES2017（例如：Object.entries）
- ES2016（例如：Array.prototype.includes）
- ES2015
- 支持 Class 的私有字段、私有方法、静态字段

## 注意

不支持 Proxy, 不支持 BigInt
