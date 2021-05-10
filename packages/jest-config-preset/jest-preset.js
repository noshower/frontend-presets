module.exports = {
  collectCoverage: false, // 默认值，设置为true时，Jest 会收集测试覆盖率信息，但可能会显著降低测试速度
  collectCoverageFrom: ['<rootDir>/src/**/*.{ts,tsx,js,jsx}', '!<rootDir>/src/**/*.d.ts'], // src文件夹下的所有.js,.jsx,.ts,.tsx 文件都会被用于收集测试覆盖率, .d.ts 文件不进行覆盖率收集。
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'], // 默认值，指定模块文件的扩展名数组
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/node_modules/jest-config-preset/fileMock.js',
  },
  resetMocks: true, // 每次测试前自动重置 mock 状态
  roots: ['<rootDir>'], // 默认值， jest 会在该配置中的路径下查找文件
  testEnvironment: 'jsdom', // 默认值， 指定测试的环境，jsdom 是类浏览器环境
  testMatch: ['<rootDir>/__tests__/**/*.{spec,test}.{ts,tsx,js,jsx}'], // 该配置表示，jest 应该在 __tests__ 目录下查找项目的测试文件。 注意：不要同时配置 testMatch 和 testRegex
  testRunner: '<rootDir>/node_modules/jest-circus/runner.js', // 指定 test runner
  timers: 'modern', // 指定使用 @sinonjs/fake-timers 这个库的 fake timers 实现
  transform: { '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest' }, // 指定哪些代码需要被编译
  transformIgnorePatterns: ['/node_modules/'], // 不编译 node_modules 下的文件
  verbose: true,
  watchPlugins: ['jest-watch-typeahead/filename', 'jest-watch-typeahead/testname'],
};
