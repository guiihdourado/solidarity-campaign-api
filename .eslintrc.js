module.exports = {
  "env": {
    "es2020": true,
    "node": true,
    "jest": true,
  },
  "extends": [
    "airbnb-base",
    "plugin:@typescript-eslint/recommended",
    "prettier/@typescript-eslint",
    "plugin:prettier/recommended",
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": 2018,
    "sourceType": "module"
  },
  "plugins": [
    "@typescript-eslint",
    "prettier",
  ],
  "rules": {
    "no-use-before-define": "off",
    "prettier/prettier": "error",
    "no-underscore-dangle": "off",
    "no-unused-expressions": "off",
    "class-methods-use-this": "off",
    "camelcase": "off",
    "@typescript-eslint/no-unused-vars": ["error", {
      "argsIgnorePattern": "_"
    }],
    "import/prefer-default-export": "off",
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        "ts": "never",
        "tsx": "never"
      }
    ],
  },
  "settings": {
    "import/resolver": {
      "typescript": {}
    },
    "react": {
      "version": "detect"
    }
  }
}
