# `@tongtian/prettier-preset`

## 简介

`Prettier` 推荐配置

## 安装

### npm 版本 7 及以上

```sh
npm install --save-dev @tongtian/prettier-preset
```

### npm 版本 6 及以下

```sh
npm install --save-dev @tongtian/prettier-preset prettier
```

### npm 版本 5.0+也可以按下面的方式安装

```sh
npx install-peerdeps --dev @tongtian/prettier-preset
```

## 用法

```js
// .prettierrc.js
const preset = require('@tongtian/prettier-preset');

module.exports = preset;
```

## 最佳实践

如果当前 ES 版本支持尾逗号或使用了 babel，建议将`trailingComma`配置为`all`

```js
// .prettierrc.js
const preset = require('@tongtian/prettier-preset');

module.exports = {
  ...preset,
  trailingComma: 'all',
};
```
