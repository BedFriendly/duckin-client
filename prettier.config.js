//  @ts-check

/** @type {import('prettier').Config} */
const config = {
  plugins: ["prettier-plugin-tailwindcss"],
  semi: true,
  singleQuote: true,
  trailingComma: "all",
  endOfLine: "lf",
  jsxSingleQuote: false,
  printWidth: 100,
  tabWidth: 2,
};

export default config;
