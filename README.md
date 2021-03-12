# React UI Library by [@bacebu4](https://www.instagram.com/ui.bace/)

React UI components designed by myself! That is just sample demo readme, I'll change it later!

## Usage

Check example/src/\* for usage.

```js
import { BaceButton } from '@bacebu4/ui-library';

<BaceButton>Sample button</BaceButton>

<BaceButton isSolid>Sample solid button</BaceButton>
```

## Development (`src`, `lib` and the build process)

**NOTE:** The source code for the component is in `src`. A transpiled CommonJS version (generated with Babel) is available in `lib` for use with node.js, browserify and webpack. A UMD bundle is also built to `dist`, which can be included without the need for any build system.

To build, watch and serve the examples (which will also watch the component source), run `npm start`. If you just want to watch changes to `src` and rebuild `lib`, run `npm run watch` (this is useful if you are working with `npm link`).

## License

[MIT Licensed](/LICENSE.md)
Copyright (c) 2021 Vasilii Krasikov
