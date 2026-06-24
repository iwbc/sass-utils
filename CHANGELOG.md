# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## [3.0.0](https://github.com/iwbc/sass-utils/compare/v2.1.1...v3.0.0) (2026-06-24)


### ⚠ BREAKING CHANGES

* vw()およびvh()のデフォルト単位がlvw/lvhからsvw/svhに変更されました。単位を明示せずに呼び出している既存コードは出力が変わります。

### update

* vw()/vh()のデフォルト単位をlvw/lvhからsvw/svhに変更 ([c52fcad](https://github.com/iwbc/sass-utils/commit/c52fcadc8e266eded9fa5bfdc7b33a749cec3a0a))

### [2.1.1](https://github.com/iwbc/sass-utils/compare/v2.1.0...v2.1.1) (2026-06-22)

## [2.1.0](https://github.com/iwbc/sass-utils/compare/v2.0.1...v2.1.0) (2026-06-22)


### Features

* **color:** CSSカスタムプロパティに対応したrgba関数の代替関数を追加（color-mix） ([f98a348](https://github.com/iwbc/sass-utils/commit/f98a348a0d086af1e62002ff09e5db590518322c))
