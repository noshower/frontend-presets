const onlyRemoveTypeImportsAble = () => {
  const { version } = require('typescript');
  return Number(version.match(/(\d+.\d+)/)[0]) >= 3.8;
};

module.exports = (api, opts) => {
  const { useTypeScript = true, runtime = 'classic' } = opts;

  if (typeof useTypeScript !== 'boolean') {
    throw new Error('useTypeScript 的有效值是布尔值');
  }

  const isTestEnv = api.env('test');

  return {
    presets: [
      [
        require('@babel/preset-env'),
        {
          useBuiltIns: 'usage',
          corejs: {
            version: require('core-js/package.json').version,
            proposals: true,
          },
          exclude: ['transform-typeof-symbol'],
          modules: isTestEnv ? 'auto' : false, // 保留ES模块
          bugfixes: true, // Babel8默认支持
          loose: true, // 允许这个preset内的所有插件使用"宽松"的编译方式
        },
      ],
      [
        require('@babel/preset-react'),
        {
          runtime,
          development: api.env('development'),
          ...(runtime === 'classic' ? { useBuiltIns: true } : {}),
        },
      ],
      useTypeScript && [
        require('@babel/preset-typescript'),
        {
          allowDeclareFields: true,
          onlyRemoveTypeImports: onlyRemoveTypeImportsAble(),
        },
      ],
    ].filter(Boolean),
    plugins: [
      // babel 7.14.0开始，@babel/preset-env 已经内置了@babel/plugin-proposal-class-properties 和 @babel/plugin-proposal-private-methods
      [require('@babel/plugin-proposal-decorators'), { legacy: true }],
      [
        require('@babel/plugin-transform-runtime'),
        {
          corejs: { version: 3, proposals: true },
          version: require('@babel/runtime/package.json').version,
          useESModules: true, // useESModules选项将在Babel8过期，https://babeljs.io/blog/2021/02/22/7.13.0
          helpers: true,
          regenerator: true,
        },
      ],
    ],
  };
};
