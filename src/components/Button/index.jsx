import { Button } from "./style";

const ButtonDefault = ({ children,theme, ...props }) => {
  return <Button {...props} theme={theme}>{children}</Button>;
};

export default ButtonDefault;
