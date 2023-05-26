// Image import
import CloseIcon from "@/assets/svg/close-icon.svg";

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
          className="bg-[#D9D9D9] xl:w-[60px] xl:h-[49px] w-5 h-3 outline-none border-none flex justify-center items-center"
        >
          {/* Close Icon Image */}
          <img
            src={CloseIcon}
            alt="Ace-coinPay Modal close button"
            className="w-2 xl:w-4"
          />
        </button>
      </div>

      <div className="flex flex-col justify-between w-full mt-[26px] lg:flex-row xl:mt-[70px]">
        <FormContainer />
       <PaymentContainer />
      </div>
    </div>
  );
};

export default Home;
