const { defineConfig } = require("eslint-define-config");

const root = {
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
    "plugin:unicorn/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["@typescript-eslint", "unused-imports", "simple-import-sort"],
  rules: {
    // simple-import-sort
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",

    // unused-imports
    "@typescript-eslint/no-unused-vars": "off",
    "unused-imports/no-unused-imports": "error",
    "unused-imports/no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
  },
};

module.exports = {
  base: defineConfig(root),
  next: defineConfig({
    ...root,
    extends: [...root.extends, "next", "next/core-web-vitals"],
  }),
};
