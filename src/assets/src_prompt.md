== Project Prompt ==
Generated: 2025-06-02T08:26:09.976Z
Source Directory: /home/evai/my/chinisik-root/chinisik-ocr-translator/src/assets
Included Files: 21
Total Size: 12.31 KB
Format: structured
====================

=== Project File Structure ===
└── scss
    ├── mixins
    │   ├── _media.scss
    │   └── _theme.scss
    ├── themes
    │   ├── dark
    │   │   ├── _maps.scss
    │   │   ├── _variables.scss
    │   │   └── theme.scss
    │   ├── light
    │   │   ├── _maps.scss
    │   │   ├── _variables.scss
    │   │   └── theme.scss
    │   ├── rainy
    │   │   ├── _maps.scss
    │   │   ├── _variables.scss
    │   │   └── theme.scss
    │   ├── shared
    │   │   ├── _maps.scss
    │   │   ├── _variables.scss
    │   │   └── theme.scss
    │   └── _theme.scss
    ├── _css-variables.scss
    ├── _fonts.scss
    ├── _functions.scss
    ├── _setup.scss
    ├── _variables.scss
    └── main.scss
============================

=== File List ===
- scss/_css-variables.scss (0.36 KB)
- scss/_fonts.scss (2.06 KB)
- scss/_functions.scss (0.17 KB)
- scss/_setup.scss (0.18 KB)
- scss/_variables.scss (0.13 KB)
- scss/main.scss (0.44 KB)
- scss/mixins/_media.scss (0.49 KB)
- scss/mixins/_theme.scss (0.18 KB)
- scss/themes/_theme.scss (0.27 KB)
- scss/themes/dark/_maps.scss (1.47 KB)
- scss/themes/dark/_variables.scss (0.80 KB)
- scss/themes/dark/theme.scss (0.05 KB)
- scss/themes/light/_maps.scss (1.47 KB)
- scss/themes/light/_variables.scss (0.80 KB)
- scss/themes/light/theme.scss (0.05 KB)
- scss/themes/rainy/_maps.scss (1.47 KB)
- scss/themes/rainy/_variables.scss (0.80 KB)
- scss/themes/rainy/theme.scss (0.05 KB)
- scss/themes/shared/_maps.scss (0.60 KB)
- scss/themes/shared/_variables.scss (0.36 KB)
- scss/themes/shared/theme.scss (0.10 KB)
=================

=== File Contents ===

--- File: scss/_css-variables.scss ---

@use 'mixins/theme' as mixins-theme;
@use 'themes/theme' as themes-theme;
@use 'sass:map';

@include mixins-theme.connectThemes(themes-theme.$themes, 'theme') using ($theme, $themeName) {
  @each $colorType, $color in map.get($theme, 'colors') {
    --#{$colorType}-color: #{$color};
  }
}

:root {
  --font-family-cn: 'MapleMono-CN';
  --font-family-base: 'Rubik';
}

--- File: scss/_fonts.scss ---

@font-face {
  font-family: 'Rubik';
  src: url('chrome-extension://__MSG_@@extension_id__/src/assets/fonts/Rubik-Regular.woff2') format('woff2');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'Rubik';
  src: url('chrome-extension://__MSG_@@extension_id__/src/assets/fonts/Rubik-Medium.woff2') format('woff2');
  font-weight: 500;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'Rubik';
  src: url('chrome-extension://__MSG_@@extension_id__/src/assets/fonts/Rubik-Bold.woff2') format('woff2');
  font-weight: 700; // Or 600 if you use SemiBold as Bold
  font-style: normal;
  font-display: swap;
}

// Maple Mono Font Family for Chinese Characters
@font-face {
  font-family: 'Maple Mono';
  src: url('chrome-extension://__MSG_@@extension_id__/assets/fonts/MapleMonoSC-Regular.woff2') format('woff2'); // Adjust filename if different
  font-weight: normal; // Or specific weight if applicable
  font-style: normal;
  font-display: swap;
  // Unicode range for CJK Ideographs, Symbols, and Punctuation
  // This ensures Maple Mono is primarily used for these characters.
  unicode-range:
    U+2E80-2EFF,   // CJK Radicals Supplement
    U+2F00-2FDF,   // Kangxi Radicals
    U+3000-303F,   // CJK Symbols and Punctuation
    U+31C0-31EF,   // CJK Strokes
    U+3200-32FF,   // Enclosed CJK Letters and Months
    U+3300-33FF,   // CJK Compatibility
    U+3400-4DBF,   // CJK Unified Ideographs Extension A
    U+4DC0-4DFF,   // Yijing Hexagram Symbols
    U+4E00-9FFF,   // CJK Unified Ideographs
    U+F900-FAFF,   // CJK Compatibility Ideographs
    U+FE30-FE4F,   // CJK Compatibility Forms
    U+FF00-FFEF,   // Halfwidth and Fullwidth Forms (includes fullwidth punctuation)
    U+20000-2A6DF, // CJK Unified Ideographs Extension B
    U+2A700-2B73F, // CJK Unified Ideographs Extension C
    U+2B740-2B81F, // CJK Unified Ideographs Extension D
    U+2B820-2CEAF, // CJK Unified Ideographs Extension E
    U+2CEB0-2EBEF, // CJK Unified Ideographs Extension F
    U+2F800-2FA1F; // CJK Compatibility Ideographs Supplement
}

--- File: scss/_functions.scss ---

@use 'sass:map';

@function map-collect($maps...) {
  $collection: ();

  @each $map in $maps {
    $collection: map.merge($collection, $map);
  }
  @return $collection;
}

--- File: scss/_setup.scss ---

@forward '_variables.scss';
@forward '_functions.scss';
@forward 'themes/_theme.scss';
@forward 'mixins/_media.scss';
@forward 'mixins/_theme.scss';
@forward '_css-variables.scss';

--- File: scss/_variables.scss ---

$font-size-small: 15px !default;
$font-size-base: 17px !default;
$font-size-large: 19px !default;

$header-height: 56px !default;

--- File: scss/main.scss ---

html {
  padding: 0;
  margin: 0;
  height: 100%;
  border: none;
}

body {
  font-size: 16px;
  text-size-adjust: 100%;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
  font-family: var(--font-family-base);

  margin: 0;
  box-sizing: border-box;

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
}

--- File: scss/mixins/_media.scss ---

$tablet-width: 768px;
$desktop-width: 1024px;

@mixin desktop {
  @media (min-width: #{$desktop-width}) {
    @content;
  }
}

@mixin before-desktop {
  @media (max-width: #{$desktop-width - 1}) {
    @content;
  }
}

@mixin tablet {
  @media (max-width: #{$desktop-width - 1}) and (min-width: #{$tablet-width}) {
    @content;
  }
}

@mixin after-mobile {
  @media (min-width: #{$tablet-width}) {
    @content;
  }
}

@mixin mobile {
  @media (max-width: #{$tablet-width - 1}) {
    @content;
  }
}

--- File: scss/mixins/_theme.scss ---

@mixin connectThemes($themes, $data-name) {
  @each $themeName, $theme in $themes {
    html[data-#{$data-name}='#{$themeName}'] {
      @content ($theme, $themeName);
    }
  }
}

--- File: scss/themes/_theme.scss ---

@use './light/theme.scss' as light;
@use './dark/theme.scss' as dark;
@use './rainy/theme.scss' as rainy;
@use './shared/theme.scss' as shared;

$themes: (
  light: light.$theme,
  dark: dark.$theme,
  rainy: rainy.$theme,
);

$font-family: (
  cn: shared.$font-family-cn,
);

--- File: scss/themes/dark/_maps.scss ---

@use '../shared/_maps.scss' as shared;

@use '_variables.scss';
@use '../../_functions.scss';

// BG
$bg-colors: (
  bg-primary: variables.$bg-primary-color,
  bg-secondary: variables.$bg-secondary-color,
  bg-tertiary: variables.$bg-tertiary-color,
  bg-header: variables.$bg-header-color,
  bg-disabled: variables.$bg-disabled-color,
  bg-inverted: variables.$bg-inverted-color,
  bg-accent-overlay: variables.$bg-accent-overlay-color,
  bg-accent: variables.$bg-accent-color,
  bg-pressed: variables.$bg-pressed-color,
  bg-overlay-primary: variables.$bg-overlay-primary-color,
  bg-overlay-secondary: variables.$bg-overlay-secondary-color,
  bg-action-hover: variables.$bg-action-hover-color,
  bg-success: variables.$bg-success-color,
  bg-error: variables.$bg-error-color,
);

// Border
$border-colors: (
  border-button-secondary: variables.$border-button-secondary-color,
  border-disabled: variables.$border-disabled-color,
  border-primary: variables.$border-primary-color,
  border-secondary: variables.$border-secondary-color,
  border-accent: variables.$border-accent-color,
);

// FG
$fg-colors: (
  fg-primary: variables.$fg-primary-color,
  fg-secondary: variables.$fg-secondary-color,
  fg-tertiary: variables.$fg-tertiary-color,
  fg-muted: variables.$fg-muted-color,
  fg-accent: variables.$fg-accent-color,
  fg-action: variables.$fg-action-color,
);

$colors: functions.map-collect(
  $bg-colors,
  $border-colors,
  $fg-colors,
  shared.$border-status-colors,
  shared.$fg-tone-colors
);

--- File: scss/themes/dark/_variables.scss ---

// BG
$bg-primary-color: #1e1f20;
$bg-secondary-color: #121314;
$bg-tertiary-color: #151617;
$bg-header-color: 18, 19, 20;
$bg-disabled-color: #e7e9ed;
$bg-inverted-color: #22263b;
$bg-accent-overlay-color: #441717;
$bg-accent-color: #181717;
$bg-pressed-color: #22263b0d;
$bg-overlay-primary-color: #131010;
$bg-overlay-secondary-color: #ffffff1a;
$bg-action-hover-color: #e18a4c;
// BG STATUS
$bg-success-color: #2c492f;
$bg-error-color: #6d3b46;

// FG
$fg-primary-color: #e4e4e4;
$fg-secondary-color: #e4e4e4cc;
$fg-tertiary-color: #e4e4e499;
$fg-muted-color: #e4e4e466;
$fg-accent-color: #ff8856;
$fg-action-color: #e18a4c;

// Border
$border-primary-color: #353535;
$border-secondary-color: #4747471a;
$border-accent-color: #632732;
$border-disabled-color: #4747471a;
$border-button-secondary-color: #34407933;

--- File: scss/themes/dark/theme.scss ---

@use 'maps.scss';

$theme: (
  colors: maps.$colors,
);

--- File: scss/themes/light/_maps.scss ---

@use '../shared/_maps.scss' as shared;

@use '_variables.scss';
@use '../../_functions.scss';

// BG
$bg-colors: (
  bg-primary: variables.$bg-primary-color,
  bg-secondary: variables.$bg-secondary-color,
  bg-tertiary: variables.$bg-tertiary-color,
  bg-header: variables.$bg-header-color,
  bg-disabled: variables.$bg-disabled-color,
  bg-inverted: variables.$bg-inverted-color,
  bg-accent-overlay: variables.$bg-accent-overlay-color,
  bg-accent: variables.$bg-accent-color,
  bg-pressed: variables.$bg-pressed-color,
  bg-overlay-primary: variables.$bg-overlay-primary-color,
  bg-overlay-secondary: variables.$bg-overlay-secondary-color,
  bg-action-hover: variables.$bg-action-hover-color,
  bg-success: variables.$bg-success-color,
  bg-error: variables.$bg-error-color,
);

// Border
$border-colors: (
  border-button-secondary: variables.$border-button-secondary-color,
  border-disabled: variables.$border-disabled-color,
  border-primary: variables.$border-primary-color,
  border-secondary: variables.$border-secondary-color,
  border-accent: variables.$border-accent-color,
);

// FG
$fg-colors: (
  fg-primary: variables.$fg-primary-color,
  fg-secondary: variables.$fg-secondary-color,
  fg-tertiary: variables.$fg-tertiary-color,
  fg-muted: variables.$fg-muted-color,
  fg-accent: variables.$fg-accent-color,
  fg-action: variables.$fg-action-color,
);

$colors: functions.map-collect(
  $bg-colors,
  $border-colors,
  $fg-colors,
  shared.$border-status-colors,
  shared.$fg-tone-colors
);

--- File: scss/themes/light/_variables.scss ---

// BG
$bg-primary-color: #eeeeee;
$bg-secondary-color: #dde0e2;
$bg-tertiary-color: #d2d8dd;
$bg-header-color: 220, 223, 225;
$bg-disabled-color: #e7e9ed;
$bg-inverted-color: #22263b;
$bg-accent-overlay-color: #818bb5;
$bg-accent-color: #d7e0f3;
$bg-pressed-color: #22263b0d;
$bg-overlay-primary-color: #454a6136;
$bg-overlay-secondary-color: #94a1abdc;
$bg-action-hover-color: #828dca;
// BG STATUS
$bg-success-color: #d0e6d2;
$bg-error-color: #ebd5d9;

// FG
$fg-primary-color: #22263b;
$fg-secondary-color: #22263bcc;
$fg-tertiary-color: #22263b99;
$fg-muted-color: #22263b66;
$fg-accent-color: #344079;
$fg-action-color: #424c86;

// Border
$border-primary-color: #22263b54;
$border-secondary-color: #22263b1a;
$border-accent-color: #bbcef8;
$border-disabled-color: #22263b1a;
$border-button-secondary-color: #34407933;

--- File: scss/themes/light/theme.scss ---

@use 'maps.scss';

$theme: (
  colors: maps.$colors,
);

--- File: scss/themes/rainy/_maps.scss ---

@use '../shared/_maps.scss' as shared;

@use '_variables.scss';
@use '../../_functions.scss';

// BG
$bg-colors: (
  bg-primary: variables.$bg-primary-color,
  bg-secondary: variables.$bg-secondary-color,
  bg-tertiary: variables.$bg-tertiary-color,
  bg-header: variables.$bg-header-color,
  bg-disabled: variables.$bg-disabled-color,
  bg-inverted: variables.$bg-inverted-color,
  bg-accent-overlay: variables.$bg-accent-overlay-color,
  bg-accent: variables.$bg-accent-color,
  bg-pressed: variables.$bg-pressed-color,
  bg-overlay-primary: variables.$bg-overlay-primary-color,
  bg-overlay-secondary: variables.$bg-overlay-secondary-color,
  bg-action-hover: variables.$bg-action-hover-color,
  bg-success: variables.$bg-success-color,
  bg-error: variables.$bg-error-color,
);

// Border
$border-colors: (
  border-button-secondary: variables.$border-button-secondary-color,
  border-disabled: variables.$border-disabled-color,
  border-primary: variables.$border-primary-color,
  border-secondary: variables.$border-secondary-color,
  border-accent: variables.$border-accent-color,
);

// FG
$fg-colors: (
  fg-primary: variables.$fg-primary-color,
  fg-secondary: variables.$fg-secondary-color,
  fg-tertiary: variables.$fg-tertiary-color,
  fg-muted: variables.$fg-muted-color,
  fg-accent: variables.$fg-accent-color,
  fg-action: variables.$fg-action-color,
);

$colors: functions.map-collect(
  $bg-colors,
  $border-colors,
  $fg-colors,
  shared.$border-status-colors,
  shared.$fg-tone-colors
);

--- File: scss/themes/rainy/_variables.scss ---

// BG
$bg-primary-color: #0d1117;
$bg-secondary-color: #161b22;
$bg-tertiary-color: #12161c;
$bg-header-color: 22, 27, 34;
$bg-disabled-color: #181b20;
$bg-inverted-color: #22263b;
$bg-accent-overlay-color: #203d59;
$bg-accent-color: #182840;
$bg-pressed-color: #22263b0d;
$bg-overlay-primary-color: #22263b6e;
$bg-overlay-secondary-color: #ffffff1a;
$bg-action-hover-color: #4ea2d7;
// BG STATUS
$bg-success-color: #344b36;
$bg-error-color: #55343b;

// FG
$fg-primary-color: #e4e4e4;
$fg-secondary-color: #e4e4e4cc;
$fg-tertiary-color: #e4e4e499;
$fg-muted-color: #e4e4e466;
$fg-accent-color: #6db6ff;
$fg-action-color: #4ea2d7;

// Border
$border-primary-color: #22263b;
$border-secondary-color: #3638421a;
$border-accent-color: #2c4a63;
$border-disabled-color: #22263b1a;
$border-button-secondary-color: #34407933;

--- File: scss/themes/rainy/theme.scss ---

@use 'maps.scss';

$theme: (
  colors: maps.$colors,
);

--- File: scss/themes/shared/_maps.scss ---

@use '_variables.scss';

// Border
$border-status-colors: (
  border-positive: variables.$border-positive-color,
  border-warning: variables.$border-warning-color,
  border-negative: variables.$border-negative-color,
);

// Tones
$fg-tone-colors: (
  fg-tone-0: variables.$fg-tone-0-color,
  fg-tone-1: variables.$fg-tone-1-color,
  fg-tone-2: variables.$fg-tone-2-color,
  fg-tone-3: variables.$fg-tone-3-color,
  fg-tone-4: variables.$fg-tone-4-color,
);

// Font family for chinese
$font-family-cn: (
  base: variables.$font-family-cn-base,
);

$font-family-base: (
  default: variables.$font-family-ru-default,
);

--- File: scss/themes/shared/_variables.scss ---

// Notify borders
$border-positive-color: #759f45;
$border-warning-color: #ffd452;
$border-negative-color: #f15d56;

// Tone
$fg-tone-0-color: #2eb1c2;
$fg-tone-1-color: #2e37c2;
$fg-tone-2-color: #cea348;
$fg-tone-3-color: #b83878;
$fg-tone-4-color: #61a15b;

// Font
// > BASE
$font-family-ru-default: 'Rubik' !default;

// > CN
$font-family-cn-base: 'MapleMono-CN';

--- File: scss/themes/shared/theme.scss ---

@use 'maps.scss';

$font-family-cn: maps.$font-family-cn;
$font-family-base: maps.$font-family-base;

=====================
