module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  overrides: [
    {
      files: ["*.ts"],
      plugins: ["@typescript-eslint", "eslint-plugin-expect-type"],
      parserOptions: {
        debugLevel: true,
        EXPERIMENTAL_useProjectService: true,
        project: true,
        tsconfigRootDir: __dirname,
      },
      extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:expect-type/recommended",
      ],
      rules: {
        // "@typescript-eslint/no-namespace": "off",
        "@typescript-eslint/no-unused-vars": [
          "warn",
          {
            argsIgnorePattern: "^_",
            varsIgnorePattern: "^_",
            caughtErrorsIgnorePattern: "^_",
          },
        ],
        "expect-type/expect": "error",
      },
    },
  ],
};
