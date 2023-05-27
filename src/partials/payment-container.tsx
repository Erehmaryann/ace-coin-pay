// Image import
import AtmCard from "@/assets/svg/atm-card.svg";
import AppleLogo from "@/assets/svg/apple.svg";
import Receipt from "@/assets/svg/pay-slip.svg";

// Component import
import Text from "@/ui/text/text";

{
  /* Payment Slip section */
}
const PaymentContainer = () => {
  return (
    <section className="xl:w-[27%] w-full h-full lg:pb-0 pb-8 lg:pt-0 pt-14">
      <div className="w-full bg-card_container_bg lg:h-[531px] rounded-[18px]">
        {/* Card and purchased items wrapper */}
        <div className="w-full pb-8">
          {/* Atm Wrapper */}
          <div>
            <img
              src={AtmCard}
              alt="atm-card"
              className="mx-auto w-[232px] h-[341px] -translate-y-[75px]"
            />
          </div>
          {/* Payment Items Info */}
          <div className="lg:px-[40px] px-4 lg:-mt-[85px] -mt-[90px]">
            {/* First Item */}
            <div className="flex items-center justify-between w-full">
              <Text className="lg:text-[16px] font-normal text-sm text-primary_bright_grey">
                Company
              </Text>
              <div className="flex items-center">
                {/* apple icon */}
                <div className="bg-primary_blue w-[27px] h-[27px] flex items-center justify-center rounded-full lg:mr-3 mr-1">
                  <img
                    src={AppleLogo}
                    alt="apple icon"
                    className="w-[20px] h-[18px]"
                  />
                </div>
                <Text className="font-medium text-primary_blue lg:text-[16px] text-sm">
                  Apple
                </Text>
              </div>
            </div>
            {/* Second Item */}
            <div className="flex items-center justify-between w-full py-4">
              <Text className="lg:text-[16px] font-normal text-sm text-primary_bright_grey">
                Order Number
              </Text>
              <Text className="font-medium text-primary_blue lg:text-[16px] text-sm">
                1266201
              </Text>
            </div>
            {/* Third Item */}
            <div className="flex items-center justify-between w-full pb-4">
              <Text className="lg:text-[16px] font-normal text-sm text-primary_bright_grey">
                Product
              </Text>
              <Text className="font-medium text-primary_blue lg:text-[16px] text-sm">
                MacBook Air
              </Text>
            </div>
            {/* Fourth Item */}
            <div className="flex items-center justify-between w-full">
              <Text className="lg:text-[16px] font-normal text-sm text-primary_bright_grey">
                VAT(20%)
              </Text>
              <Text className="font-medium text-primary_blue lg:text-[16px] text-sm">
                $100.00
              </Text>
            </div>
          </div>
        </div>
        {/* Total amount Purchased Wrapper */}
        <div className="border-t-2 border-dashed relative border-[#C4CAD6]">
          <div className="bg-white lg:w-[38px] w-[20px] h-[35px] rounded-full z-20 absolute lg:-left-[20px] -left-[8px] -top-[20px]"></div>
          <div className="bg-white lg:w-[38px] w-[20px] h-[35px] rounded-full z-20 absolute lg:-right-[20px] -right-[8px] -top-[20px]"></div>
          <div className="flex justify-between items-center lg:px-[40px] px-4 py-8">
            <div>
              <Text className="lg:text-[16px] font-normal text-sm text-primary_bright_grey pb-2">
                You have to Pay
              </Text>
              <Text className="text-lg font-bold text-primary_blue lg:text-[26px]">
                549
                <span className="text-primary_blue font-normal lg:text-[16px] text-sm">
                  .99
                </span>{" "}
                <span className="text-primary_bright_grey font-normal lg:text-[16px] text-sm">
                  USD
                </span>
              </Text>
            </div>
            <img src={Receipt} alt="payment receipt" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PaymentContainer;
