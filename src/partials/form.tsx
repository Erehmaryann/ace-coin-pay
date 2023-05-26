// Custom components imports
import Input from "@/ui/input/input";
import Text from "@/ui/text/text";

// Images import
import MasterCardIcon from "@/assets/svg/master-card-icon.svg";
import BlueTick from "@/assets/svg/blue-tick.svg";
import Dots from "@/assets/svg/dots.svg";
import Pencil from "@/assets/svg/pencil.svg";

{
  /* Form Input section */
}
const Form = () => {
  return (
    <form>
      <div>
        <div className="flex items-center justify-between lg:mb-[23px] mb-4">
          <div>
            <Text
              className="font-semibold text-primary_blue lg:text-[19px] text-sm lg:pb-2 pb-[6px]"
              role="h4"
            >
              Card Number
            </Text>
            <Text className="text-[10px] font-normal lg:text-sm text-primary_bright_grey">
              Enter the 16-digit card number on the card
            </Text>
          </div>
          <div role="button" className="flex items-center mr-1 lg:mr-0">
            <img
              src={Pencil}
              alt="Edit Icon"
              aria-hidden="false"
              className="lg:w-5 w-4 lg:mr-[10px] mr-1"
            />
            <Text className="text-xs lg:text-lg text-field_active">Edit</Text>
          </div>
        </div>
        {/* Render the CustomInput component */}
        <Input
          type="number"
          className="w-full font-medium bg-field_bg placeholder:lg:text-lg placeholder:text-primary_md_grey"
          placeholder="2412     -     7512     -     3412     -     3456"
          leadingIcon={
            <img
              src={MasterCardIcon}
              alt="master card Icon"
              className="lg:w-8 w-5 h-[19px]"
            />
          }
          trailingIcon={
            <img
              src={BlueTick}
              alt="verified tick"
              className="lg:w-[39px] lg:h-[39px] w-6"
            />
          }
        />
      </div>
      {/* CVV Input section */}
      <div className="flex flex-col items-center justify-between w-full my-5 lg:flex-row lg:my-7">
        <div className="xl:w-[47%] w-full xl:mb-0 mb-4">
          <Text
            className="font-semibold text-primary_blue lg:text-[19px] text-sm lg:pb-2 pb-[6px]"
            role="h4"
          >
            CVV Number
          </Text>
          <Text className="text-[10px] font-normal lg:text-sm text-primary_bright_grey">
            Enter the 3 or 4 digit number on the card
          </Text>
        </div>
        <div className="w-full xl:w-1/2">
          {/* Render the CustomInput component */}
          <Input
            type="number"
            className="w-full placeholder:font-semibold placeholder:lg:text-lg placeholder:text-primary_blue"
            placeholder="327"
            trailingIcon={
              <img
                src={Dots}
                alt="Dots icon"
                className="lg:w-[28px] lg:h-[28px] w-4"
              />
            }
          />
        </div>
      </div>
      {/* Expiry Date Input section */}
      <div className="flex flex-col items-center justify-between w-full my-5 lg:flex-row lg:my-7">
        <div className="xl:w-[47%] w-full xl:mb-0 mb-4">
          <Text
            className="font-semibold text-primary_blue lg:text-[19px] text-sm lg:pb-2 pb-[6px]"
            role="h4"
          >
            Expiry Date
          </Text>
          <Text className="text-[10px] font-normal lg:text-sm text-primary_bright_grey">
            Enter the expiration date of the card
          </Text>
        </div>
        <div className="flex items-center justify-between w-full xl:w-1/2">
          {/* Render the CustomInput component */}
          <Input
            type="number"
            className="w-[calc(50%-16px)] placeholder:font-semibold placeholder:lg:text-lg placeholder:text-primary_blue"
            placeholder="09"
          />
          <Text
            className="font-semibold text-primary_blue lg:text-[16px] text-sm w-[20px] flex justify-center"
            role="h4"
          >
            /
          </Text>
          <Input
            type="number"
            className="w-[calc(50%-16px)] placeholder:font-semibold placeholder:lg:text-lg placeholder:text-primary_blue"
            placeholder="22"
          />
        </div>
      </div>
      {/* Password Input section */}
      <div className="flex flex-col items-center justify-between w-full my-5 lg:flex-row lg:my-7">
        <div className="xl:w-[47%] w-full xl:mb-0 mb-4">
          <Text
            className="font-semibold text-primary_blue lg:text-[19px] text-sm lg:pb-2 pb-[6px]"
            role="h4"
          >
            Password
          </Text>
          <Text className="text-[10px] font-normal lg:text-sm text-primary_bright_grey">
            Enter your dynamic password
          </Text>
        </div>
        <div className="w-full xl:w-1/2">
          {/* Render the CustomInput component */}
          <Input
            type="password"
            autoComplete="off"
            placeholder="......"
            className="w-full placeholder:font-semibold placeholder:text-[83px] placeholder:text-primary_blue"
            trailingIcon={
              <img
                src={Dots}
                alt="Dots icon"
                className="lg:w-[28px] lg:h-[28px] w-4"
              />
            }
          />
        </div>
      </div>
      {/* Submit button */}
      <button
        type="submit"
        className="w-full outline-none bg-field_active lg:h-[82px] h-[58px] rounded-[7px]"
      >
        <Text className="font-bold text-white text-[21px]">Pay Now</Text>
      </button>
    </form>
  );
};

export default Form;
