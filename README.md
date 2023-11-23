This product is deprecated.

# A shared Eslint config

## Installation

```sh
# peer dependencies
npm insatll --save-dev @typescript-eslint/eslint-plugin
# install
npm install --save-dev @andgohq/eslint-config-ts
```

## Usage

In eslint config,

```json
  "extends": "@andgohq/eslint-config-ts"
```

Or in .eslintrc.js,

```js
module.exports = {
  extends: '@andgohq/eslint-config-ts',
};
```

See <https://eslint.org/docs/developer-guide/shareable-configs>
