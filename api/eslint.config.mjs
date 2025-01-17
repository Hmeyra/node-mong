import globals from "globals";
import pluginJs from "@eslint/js";


/** @type {import('eslint').Linter.Config[]} */
export default [
  pluginJs.configs.recommended,
  {
    files: ["**/*.js"],
    languageOptions: {
      sourceType: "commonjs"
    },
    rules: {
      // Bu dosya için özel kurallar
      "no-console": "off",  // Konsol komutları uyarı verir
      "no-unused-vars": "off", // Kullanılmayan değişkenler uyarı verir
      "no-undef":"off",
    },
  },
  {
    languageOptions: {
      globals: globals.browser
    }
  },
  
];