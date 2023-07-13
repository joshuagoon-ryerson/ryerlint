import { RuleTester } from "eslint";
import rule from "../rules/styled-component-scope";
import { valid, invalid } from "./styled-component-scope.examples";
import { ERROR_MESSAGE } from "../const";

const tester = new RuleTester({
  parser: require.resolve("@typescript-eslint/parser"),
  parserOptions: {
    jsx: true,
  },
});

const validExamples = valid.map((code) => {
  return {
    filename: "valid.tsx",
    code,
  };
});

const invalidExamples = invalid.map((code) => {
  return {
    filename: "invalid.tsx",
    code,
    errors: [
      {
        message: ERROR_MESSAGE["styled-component-scope"],
      },
    ],
  };
});

tester.run("styled-component-scope", rule, {
  valid: validExamples,
  invalid: invalidExamples,
});
