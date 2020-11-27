'use strict'

var ecmaVersion = 3

module.exports = {
  env: {
    amd: false,
    browser: true,
    es6: true,
    jasmine: false,
    mocha: false,
    node: true
  },

  'extends': ['./configs/typescript'],

  globals: {
    BigInt: false,
    Map: false,
    Reflect: false,
    Set: false,
    Symbol: false
  },

  parserOptions: {
    ecmaVersion: ecmaVersion,
    sourceType: 'script'
  },

  reportUnusedDisableDirectives: true,

  root: true
}
