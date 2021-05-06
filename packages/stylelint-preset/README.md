# `@tongtian/stylelint-preset`

## 简介

整理 stylelint 的通用配置。

## 依赖

![](https://cdn.nlark.com/yuque/0/2021/jpeg/1065536/1620302465081-147464c6-2b5d-4b24-b25c-d7e99ffe1b53.jpeg)

## 安装

### npm 版本 7 及以上

```sh
npm install --save-dev @tongtian/stylelint-preset
```

### npm 版本 6 及以下

npm install --save-dev @tongtian/stylelint-preset stylelint stylelint-config-prettier stylelint-config-recess-order stylelint-config-standard stylelint-declaration-block-no-ignored-properties stylelint-declaration-use-variable stylelint-prettier stylelint-scss

## 用法

```
module.exports = {
  extends: ['@tongtian/stylelint-preset'],
};
```
