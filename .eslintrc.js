const path = require('path');
const OFF = 0;
const WARNING = 1;
const ERROR = 2;

module.exports = {
  env: {
    browser: true,
    es6: true
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    'project': './tsconfig.json'
  },
  extends: [
    'airbnb-typescript',
    'plugin:@typescript-eslint/recommended',
    'prettier'
  ],
  plugins: ['@typescript-eslint', 'react-hooks'],
  settings: {
    'import/resolver': {
      "webpack": {
        "config": "./webpack.custom.js"
      }
    },
  },
  rules: {
    quotes: [ERROR, 'single'], // 引号类型
    semi: [ERROR, 'always'], // 语句强制分号结尾
    'space-infix-ops': ERROR, // 中缀操作符周围要不要有空格
    'no-param-reassign': OFF, // 不允许对函数的形参进行赋值
    'prefer-spread': ERROR, // 首选展开运算
    'comma-dangle': OFF, // 不允许或强制在对象字面量或者数组属性的结尾使用逗号
    'padded-blocks': OFF, // 规定代码块前后是否要加空行
    'prefer-const': OFF,
    'no-multi-spaces': ERROR,
    'no-var': OFF,
    'one-var': OFF,
    'class-methods-use-this': WARNING,
    'no-unused-expressions': [ERROR, { allowShortCircuit: true }], // 允许使用断路 和三目运算
    'arrow-parens': [ERROR, 'as-needed'],
    'no-mixed-operators': OFF,
    '@typescript-eslint/no-explicit-any': OFF, // 允许使用 any
    "import/prefer-default-export": OFF,
    '@typescript-eslint/ban-ts-ignore': OFF,
    'import/extensions': OFF,
    'no-underscore-dangle': OFF,
    '@typescript-eslint/no-non-null-assertion': OFF,
    '@typescript-eslint/explicit-function-return-type': OFF,
    'no-plusplus': OFF,
    'no-console': OFF,
    'array-callback-return': OFF,
    'no-useless-return': OFF,
    'consistent-return': OFF,
    'no-loop-func': OFF,
    'prefer-promise-reject-errors': OFF,
    'lines-between-class-members': OFF,
    '@typescript-eslint/no-empty-interface': OFF,
    'jsx-a11y/media-has-caption': OFF,
    'react/jsx-props-no-spreading': OFF,
    'react/jsx-one-expression-per-line': OFF,
    "react-hooks/rules-of-hooks": ERROR,
    "react-hooks/exhaustive-deps": WARNING,
    '@typescript-eslint/no-unused-expressions': OFF,
    'dot-notation': OFF,
    '@typescript-eslint/no-extra-semi': OFF
  }
};
