const { defineConfig } = require("eslint-define-config");

const root = {
  extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended"],
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
};

module.exports = {
  base: defineConfig(root),
  next: defineConfig({
    ...root,
    extends: [...root.extends, "next", "next/core-web-vitals"],
  }),
};
