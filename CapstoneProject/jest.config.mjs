import { createRequire } from "module";
const require = createRequire(import.meta.url);
const babelJest = require("babel-jest").default;

export default {
  transform: {
    "^.+\\.[tj]sx?$": "babel-jest",
  },
  testEnvironment: "jsdom",
};
