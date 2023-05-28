/* eslint-env node */
module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "prettier",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: true,
    tsconfigRootDir: __dirname,
  },
  ignorePatterns: [".eslintrc.cjs", "babel.config.js"],
  plugins: ["@typescript-eslint", "prettier"],
  rules: {
    "prettier/prettier": "error"
  },
  root: true,
};
