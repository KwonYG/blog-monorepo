module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
  ],
  rules: {},
  ignorePatterns: ["**/*.test.ts"],
  overrides: [
    {
      files: '*.js',
    },
    {
      "files": ["*.tsx"],
      "rules": {
        "react/prop-types": "off"
      }
    }
  ]
};
