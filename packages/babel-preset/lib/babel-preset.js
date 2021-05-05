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
          targets: {
            node: 'current',
          },
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
          modules: false,
          bugfixes: true,
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
      [require('@babel/plugin-proposal-class-properties'), { loose: true }],
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
