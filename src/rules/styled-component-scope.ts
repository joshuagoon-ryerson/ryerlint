import { Rule } from "eslint";
import { ERROR_MESSAGE, Node } from "../const";

const rule: Rule.RuleModule = {
  create: (context) => {
    return {
      "VariableDeclaration > VariableDeclarator > TaggedTemplateExpression > MemberExpression > Identifier[name='styled']":
        (node: Node) => {
          let parent = node && node.parent;
          let scopes = [];

          while (parent) {
            parent.type && scopes.push(parent.type);
            if (parent.type === "BlockStatement") break;
            parent = parent.parent;
          }

          if (scopes.includes("BlockStatement")) {
            context.report({
              node,
              message: ERROR_MESSAGE["styled-component-scope"],
            });
          }
        },
      "VariableDeclaration > VariableDeclarator > TaggedTemplateExpression > CallExpression > Identifier[name='styled']":
        (node: Node) => {
          let parent = node && node.parent;
          let scopes = [];

          while (parent) {
            parent.type && scopes.push(parent.type);
            if (parent.type === "BlockStatement") break;
            parent = parent.parent;
          }

          if (scopes.includes("BlockStatement")) {
            context.report({
              node,
              message: ERROR_MESSAGE["styled-component-scope"],
            });
          }
        },
    };
  },
};

export = rule;

// export const meta = {
//   type: "problem",
//   hasSuggestions: true,
//   fixable: true,
// };
