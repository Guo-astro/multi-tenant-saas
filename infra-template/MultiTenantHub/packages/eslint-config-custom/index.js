module.exports = {
  extends: [
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "plugin:import/typescript",
    "turbo",
  ],
  settings: {
    "import/resolver": {
      typescript: {
        // use an array
        project: ["apps/**/*/tsconfig.json", "packages/**/*/tsconfig.json"],
      },
    },
  },
  plugins: ["@typescript-eslint"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    sourceType: "module",
    project: "tsconfig.json",
  },
};
