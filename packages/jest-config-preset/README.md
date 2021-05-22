# `@tongtian/jest-config-preset`

## 简介

jest 的基础、可共享配置。

## 安装

```
npm i --save-dev @tongtian/jest-config-preset
```

## 用法

```
//jest.config.js
module.exports = {
  preset: '@tongtian/jest-config-preset',
};
```

## 约定

- 业务代码在根目录的 src 文件下
- 测试代码在根目录的 test 文件夹下。

## 常见问题

### 1.配置 jest 时，你觉得配置没问题，但是测试就是失败。

可能是缓存的问题。运行测试可以加上 [--no-cache](https://jestjs.io/docs/cli#--cache) 。配置好 jest 后，记得将 --no-cache 去掉，因为这会影响测试性能。如果想要删除缓存，可以参考[--clearCache](https://jestjs.io/docs/cli#--clearcache)。

### 2.SyntaxError: Cannot use import statement outside a module

    Jest encountered an unexpected token
    This usually means that you are trying to import a file which Jest cannot parse, e.g. it's not plain JavaScript.

    By default, if Jest sees a Babel config, it will use that to transform your files, ignoring "node_modules".

    Here's what you can do:
     • If you are trying to use ECMAScript Modules, see https://jestjs.io/docs/en/ecmascript-modules for how to enable it.
     • To have some of your "node_modules" files transformed, you can specify a custom "transformIgnorePatterns" in your config.
     • If you need a custom transformation specify a "transform" option in your config.
     • If you simply want to mock your non-JS modules (e.g. binary assets) you can stub them out with the "moduleNameMapper" config option.

碰到此类错误，可以按照以下两步解决：

- 将 @babel/preset-env 的 modules 选项删除或设置为 'auto'。
- 测试时，将 babel 的 targets 设置为 {node:'current'}。注意，babel 7.13.0 开始，targets 作为了 babel 的顶级配置选项，低于 7.13.0 版本，targets 是 @babel/preset-env 的配置选项。

```js
const isTestEnv = process.env.NODE_ENV === 'test';
module.exports = {
  targets: isTestEnv
    ? { node: 'current' }
    : {
        browsers: ['last 2 versions', '> 1%', 'ie >= 9'],
      },
  ...其他配置,
};
```

### 3.如何让 jest 使用单独的 babel 配置

```js
// jest.transform.js
module.exports = require('babel-jest').createTransformer({
  presets: [...],
  plugins: [...]
});
```

```js
const jestPreset = require('@tongtian/jest-config-preset');
// 修改jest 的 transform 选项
module.exports = {
  preset: '@tongtian/jest-config-preset',
  transform: {
    ...jestPreset.transform,
    '^.+\\.(js|jsx|ts|tsx)$': '<rootDir>/jest.transform.js',
  },
};
```
