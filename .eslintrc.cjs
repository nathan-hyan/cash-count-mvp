module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "airbnb",
    "airbnb-typescript",
    "airbnb/hooks",
    "plugin:prettier/recommended",
  ],
  overrides: [
    {
      env: {
        node: true,
      },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "script",
      },
    },
    {
      files: ["*.js", "*.jsx", "*.ts", "*.tsx"],
      rules: {
        "simple-import-sort/imports": [
          "error",
          {
            groups: [
              // Packages `react` related packages come first.
              ["^react", "^@?\\w"],
              // Internal packages.
              ["^(@)(/.*|$)"],
              // Absolute imports, starting with ~
              ["^~.*(?:/|$)"],
              // Parent imports. Put `..` last.
              [
                "^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$', '^\\.\\.(?!/?$)",
              ],
              // Style imports.
              ["^.+\\.?(scss|css)?inline$", "^.+\\.?(scss|css)$"],
            ],
          },
        ],
      },
    },
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["./tsconfig.json"],
  },
  plugins: ["@typescript-eslint", "react", "simple-import-sort", "prettier"],
  rules: {
    "react/react-in-jsx-scope": "off",
  },
};
