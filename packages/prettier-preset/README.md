# `@tongtian/prettier-preset`

# 简介

`Prettier` 推荐配置

# 安装

## npm 版本 7 及以上

```sh
npm install --save-dev @tongtian/prettier-preset
```

## npm 版本 6 及以下

```sh
npx install --save-dev @tongtian/prettier-preset prettier
```

# 用法

```js
// .prettierrc.js
const config = require('@tongtian/prettier-preset');

module.exports = config;
```

# 最佳实践

如果当前 ES 版本支持尾逗号或使用了 babel，建议将`trailingComma`配置为`all`

```js
// .prettierrc.js
const config = require('@tongtian/prettier-preset');

module.exports = {
  ...config,
  trailingComma: 'all',
};
```
