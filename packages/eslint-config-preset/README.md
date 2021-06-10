# `@tongtian/eslint-config-preset`

## 简介

整理 eslint 的通用配置, 支持 Typescript 、React

## 依赖

![](https://cdn.nlark.com/yuque/0/2021/jpeg/1065536/1620304201251-a3006d77-3174-4af6-a92c-5d186f93b5a1.jpeg)

## 安装

### npm 版本 7 及以上

```sh
npm install --save-dev @tongtian/eslint-config-preset
```

### npm 版本 6 及以下

npm install --save-dev @tongtian/eslint-config-preset @typescript-eslint/eslint-plugin eslint eslint-config-airbnb-typescript eslint-config-prettier eslint-plugin-import eslint-plugin-jest eslint-plugin-jsx-a11y eslint-plugin-prettier eslint-plugin-react eslint-plugin-react-hooks @typescript-eslint/parser jest

### npm 版本 5.0+也可以按下面的方式安装

```sh
npx install-peerdeps --dev @tongtian/eslint-config-preset
```

### 用法

```
module.exports = {
  extends: ['@tongtian/preset'],
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: './tsconfig.json',
  }
};
```

## 常见问题

请看这个[链接](https://www.npmjs.com/package/eslint-config-airbnb-typescript)
