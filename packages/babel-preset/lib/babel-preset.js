const onlyRemoveTypeImportsAble = () => {
  const { version } = require('typescript');
  return Number(version.match(/(\d+.\d+)/)[0]) >= 3.8;
};

module.exports = (api, opts) => {
  const { useTypeScript = true, targets, runtime = 'classic' } = opts;

  if (typeof useTypeScript !== 'boolean') {
    throw new Error('useTypeScript 的有效值是布尔值');
  }

  const isTestEnv = api.env('test');

  return {
    presets: [
      isTestEnv && [
        require('@babel/preset-env'),
        {
          useBuiltIns: 'usage',
          targets: {
            node: 'current',
          },
          corejs: {
            version: require('core-js/package.json').version,
            proposals: true,
          },
          modules: 'auto', // 测试环境使用默认配置"auto"
          exclude: ['transform-typeof-symbol'],
          bugfixes: true, // Babel8默认支持
          loose: true,
        },
      ],
      !isTestEnv && [
        require('@babel/preset-env'),
        {
          useBuiltIns: 'usage',
          targets,
          corejs: {
            version: require('core-js/package.json').version,
            proposals: true,
          },
          exclude: ['transform-typeof-symbol'],
          modules: false, // 保留ES模块
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
      [require('@babel/plugin-proposal-decorators'), { legacy: true }],
      [
        require('@babel/plugin-transform-runtime'),
        {
          corejs: { version: 3, proposals: true },
          version: require('@babel/runtime/package.json').version,
          useESModules: true,
          helpers: true,
          regenerator: true,
        },
      ],
    ],
  };
};
