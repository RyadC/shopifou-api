import globals from "globals";
import pluginJs from "@eslint/js";
import js from "@eslint/js";


export default [
  {
    languageOptions: { 
      globals: {
        ...globals.browser, 
        ...globals.node
      } 
    }
  },
  {
    "overrides": [
      {
        "files": ["tests/**/*"],
        "env": {
          "jest": true
        }
      }
    ]
  },
  js.configs.recommended,
  pluginJs.configs.recommended,
];