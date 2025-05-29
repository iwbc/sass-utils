# sass-utils

## インストール

`sass-embedded`（または`sass`）v1.89.0以上と`sass-true`v8.1.0以上を別途インストールする必要があります。

```sh
npm i sass-embedded sass-true @iwbc/sass-utils
```

## 使い方

ラッパーSCSSファイルを作成し、必要に応じて変数を設定します。

```scss:breakpoint.scss
@forward @iwbc/sass-utils/scss/breakpoint with (
  $breakpoints: ('sp': 0, 'tab': 768px, 'pc': 1200px) !default
);
```

ラッパーSCSSをインポートして使用します。

```scss:page.scss
@use breakpoint.scss;

.element {
  @include breakpoint.min('tab') {
    width: 50%;
  }
}
```

ほかの使い方は[ドキュメント](https://iwbc.github.io/sass-utils/)を参照してください。
