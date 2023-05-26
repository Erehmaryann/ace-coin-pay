// React import
import { FC, useState } from "react";

// Define the CustomInput component as a functional component
const Input: FC<InputProps> = ({
  leadingIcon,
  trailingIcon,
  className,
  ...rest
}) => {
  // Define the Input focused state
  const [isFocused, setIsFocused] = useState<boolean>(false);
  // Render the Input component
  return (
    <div
      className={`w-full rounded-[7px] h-10 lg:h-16 ${className} flex items-center border
      ${
        isFocused ? "border-field_active bg-[#D5E3FF]" : "border-base_border"
      } hover:border-field_active`}
    >
      {leadingIcon && <div className="mx-[17px]">{leadingIcon}</div>}
      <input
        autoComplete="off"
        className={`flex-grow rounded-l-[7px] focus:px-4 h-full border-none appearance-none outline-none ${className} bg-transparent focus:placeholder:text-field_active focus:placeholder:font-semibold
       ${!leadingIcon || !trailingIcon ? "placeholder:text-center" : ""} `}
        aria-label="Custom input"
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        {...rest}
      />
      {trailingIcon && <div className="mr-[17px]">{trailingIcon}</div>}
    </div>
  );
};

export default Input; // Export the CustomInput component
