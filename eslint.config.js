// https://docs.expo.dev/guides/using-eslint/
import expoConfig from "eslint-config-expo/flat.js";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";
import reactCompiler from "eslint-plugin-react-compiler";
import { defineConfig, globalIgnores } from "eslint/config";

export default defineConfig([
  globalIgnores(["dist/*", ".expo/*"]),
  expoConfig,
  reactCompiler.configs.recommended,
  eslintPluginPrettierRecommended,
]);
