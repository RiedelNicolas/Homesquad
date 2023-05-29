/* eslint-env node */
module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "prettier",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: true,
    tsconfigRootDir: __dirname,
  },
  ignorePatterns: [".eslintrc.cjs", "babel.config.js"],
  plugins: ["@typescript-eslint", "prettier"],
  settings: {
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"]
    },
    "import/resolver": {
      typescript: true,
      node: true
    },
  },
  rules: {
    "import/no-unresolved": "error",
    "import/no-default-export": "error",
    "import/order": "error",
    "prettier/prettier": [
      'error',
      {
        singleQuote: true,
      },
    ],
  },
  root: true,
};
