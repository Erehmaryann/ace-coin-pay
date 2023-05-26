import { FC } from "react";

// Define the CustomText component as a functional component
const Text: FC<TextProps> = ({ children, className, ...rest }) => {
  // Render the text component
  return (
    <p className={`font-sans ${className}`} {...rest}>
      {children}
    </p>
  );
};

export default Text; //export the custom text component
