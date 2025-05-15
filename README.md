# sass-utils

## Installation

```sh
yarn add @iwbc/sass-utils
```

## Usage

Create a wrapper SCSS file and initialize variables.

```scss:breakpoint.scss
@forward @iwbc/sass-utils/scss/breakpoint with (
  $breakpoints: ('sp': 0, 'tab': 768px, 'pc': 1200px) !default
);
```

Import and use in any SCSS file.

```scss:page.scss
@use breakpoint.scss;

.element {
  @include breakpoint.min('tab') {
    width: 50%;
  }
}
```

Please refer to the [documentation](https://iwbc.github.io/sass-utils/) for other usage methods.
