declare module "BaceButton" {
  type BaceButtonProps = {
    isSolid?: boolean;
  };
  const BaceButton: import("styled-components").StyledComponent<
    "button",
    any,
    BaceButtonProps,
    never
  >;
  export default BaceButton;
}
declare module "BaceInput" {
  const BaceInput: import("styled-components").StyledComponent<
    "input",
    any,
    {},
    never
  >;
  export default BaceInput;
}
declare module "@bacebu4/ui-library" {
  import BaceButton from "BaceButton";
  import BaceInput from "BaceInput";
  export { BaceButton, BaceInput };
}
