// React import
import React from "react";

// Custom components imports
import Text from "@/ui/text/text";

// data import
import { fakeCountdownData } from "./fake-countdown-data";

// Images import
import Logo from "./app-logo";
import Form from "./form";

{
  /* Form and Logo section */
}
const FormContainer = () => {
  return (
    <section className="xl:w-[67%] w-full">
      {/* Logo and Countdown Wrapper */}
      <div className="flex justify-between xl:mb-9 mb-7">
        {/* Brand Logo */}
        <Logo />
        {/* Countdown Container */}
        <div className="flex items-center xl:w-[135px]">
          {fakeCountdownData.map((item, index) => (
            <React.Fragment key={item.id}>
              <div
                className="lg:w-[30px] w-[18px] h-[31px] lg:text-lg text-sm justify-center text-white font-medium mr-1 lg:last:mr-0 flex place-items-center lg:h-[43px] bg-primary_blue rounded"
                key={item.id}
              >
                {item.num}
              </div>
              {index === 1 && (
                <Text className="mr-1 text-lg font-bold text-black">:</Text>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
      <Form />
    </section>
  );
};

export default FormContainer;
