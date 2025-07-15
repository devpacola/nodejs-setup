import eslintPluginPrettier from "eslint-plugin-prettier";
import eslintConfigPrettier from "eslint-config-prettier";

export default [
  {
    files: ["**/*.js"],
    ignores: ["node_modules"],

    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module"
    },

    plugins: {
      prettier: eslintPluginPrettier
    },

    rules: {
      "no-unused-vars": "warn",
      "prettier/prettier": "warn"
    }
  },
  eslintConfigPrettier
];
