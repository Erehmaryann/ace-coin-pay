// Define the prop types for the CustomInput component
interface InputProps extends React.HTMLProps<HTMLInputElement> {
  leadingIcon?: ReactNode;
  trailingIcon?: ReactNode;
}

// Define the prop types for the CustomText component
interface TextProps {
  role?: string;
  className?: string;
  children: React.ReactNode; // Content of the text component
}
