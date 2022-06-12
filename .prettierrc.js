module.exports = {
  useTabs: true,
  tabWidth: 2,
  semi: true,
  singleQuote: true,
  quoteProps: "consistent",
  bracketSpacing: true,
  printWidth: 1000,
  trailingComma: "es5",
  arrowParens: "avoid",
  overrides: [
    {
      files: ["*.test.ts", "*.specpartial.ts"],
      options: {
      }
    },
    {
      files: ["*.ts"],
      options: {
      }
    },
    {
      files: ["*.tsx"],
      options: {
        jsxBracketSameLine: false,
        jsxSingleQuote: false
      }
    }
  ]
}
