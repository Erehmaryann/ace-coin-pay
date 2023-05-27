// React import
import React from "react";

// Custom components imports
import Text from "@/ui/text/text";

// data import
import { fakeCountdownData } from "./fake-countdown-data";

// Images import
import CloseIcon from "@/assets/svg/close-icon.svg";
import Logo from "./app-logo";

// Component import
import FormContainer from "./form-container";
import PaymentContainer from "./payment-container";

const Home = () => {
  return (
    <div className="relative xl:w-[83%] w-[90%] h-auto bg-white xl:h-[73%] lg:my-0 my-8 lg:px-[68px] pb-12 px-3">
      {/* Close Icon Wrapper */}
      <div className="absolute right-0">
        <button
          type="button"
          aria-expanded="false"
          className="bg-[#D9D9D9] xl:w-[60px] xl:h-[49px] w-5 h-4 outline-none border-none flex justify-center items-center"
        >
          {/* Close Icon Image */}
          <img
            src={CloseIcon}
            alt="Ace-coinPay Modal close button"
            className="w-2 xl:w-4"
          />
        </button>
      </div>

      {/* Logo and Countdown Wrapper */}
      <div className="flex justify-between xl:mb-9 mb-7 w-full mt-12 xl:w-[67%] flex-row xl:mt-[70px]">
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

      <div className="flex flex-col-reverse justify-between w-full lg:flex-row ">
        <FormContainer />
        <PaymentContainer />
      </div>
    </div>
  );
};

export default Home;
