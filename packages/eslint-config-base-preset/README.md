# `@tongtian/eslint-config-base-preset`

## 简介

整理 eslint 的 typescript 基础配置，不支持 React。如果需要支持检查 React, 请使用 [@tongtian/eslint-config-preset](https://www.npmjs.com/package/@tongtian/eslint-config-preset)

## 依赖

![](https://cdn.nlark.com/yuque/0/2021/jpeg/1065536/1620303964646-eb4c8151-1448-405e-af61-db1e37d226d4.jpeg)

## 安装

### npm 版本 7 及以上

```sh
npm install --save-dev @tongtian/eslint-config-base-preset
```

### npm 版本 6 及以下

npm install --save-dev @tongtian/eslint-config-base-preset @typescript-eslint/eslint-plugin eslint eslint-config-airbnb-typescript eslint-config-prettier eslint-plugin-import eslint-plugin-jest eslint-plugin-prettier @typescript-eslint/parser jest

## 用法

```
module.exports = {
  extends: ['@tongtian/eslint-config-base-preset'],
};
```
