const ARROW_FUNCTION_STANDARD = `const FooArrowFC = () => {
  const Bar = styled.div\`\`;

  return <div></div>;
};`;

const ARROW_FUNCTION_STANDARD_WRAPPER = `const FooArrowFC = () => {
  const Foo = styled(Bar)\`\`;

  return <div></div>;
};`;

const FUNCTION_STANDARD = `function FooFunctionFC() {
  const Bar = styled.div\`\`;

  return <div></div>;
}`;

const FUNCTION_STANDARD_WRAPPER = `function FooFunctionFC() {
  const Foo = styled(Bar)\`\`;

  return <div></div>;
}`;

const STANDARD = `const Bar = styled.div\`\`;`;

const STANDARD_WRAPPER = `const FooSC = styled(Bar)\`\`;`;

const EXPORT_STANDARD = `export const FooSC = styled.span\`\`;`;

const EXPORT_STANDARD_WRAPPER = `export const FooSC = styled(Bar)\`\`;`;

const EXPORT_DEFAULT_STANDARD = `export default FooSC = styled.span\`\`;`;

const EXPORT_DEFAULT_STANDARD_WRAPPER = `export default FooSC = styled(Bar)\`\`;`;

export const invalid = [
  ARROW_FUNCTION_STANDARD,
  ARROW_FUNCTION_STANDARD_WRAPPER,
  FUNCTION_STANDARD,
  FUNCTION_STANDARD_WRAPPER,
];
export const valid = [
  STANDARD,
  STANDARD_WRAPPER,
  EXPORT_STANDARD,
  EXPORT_STANDARD_WRAPPER,
  EXPORT_DEFAULT_STANDARD,
  EXPORT_DEFAULT_STANDARD_WRAPPER,
];
