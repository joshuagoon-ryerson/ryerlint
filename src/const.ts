import { Rule } from "eslint";
import { ImportDeclaration, Literal } from "estree";

export const ERROR_MESSAGE = {
  "styled-component-scope":
    "Styled components must be defined at the top level scope. Retrieve any scoped variables as props.",
};

// export type Node = ImportDeclaration &
//   Rule.NodeParentExtension & { parent: Node; type: string };

export type Node = Literal & Rule.NodeParentExtension;
