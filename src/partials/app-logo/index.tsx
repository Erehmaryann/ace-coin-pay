import LogoCard from "@/assets/svg/logo-card.svg";
import Text from "@/ui/text/text";

const Logo = () => {
  return (
    <div className="flex place-items-center">
      <div className="flex justify-center lg:mr-3 mr-2 rounded-full lg:w-9 lg:h-9 w-[26px] h-[26px] bg-field_active place-items-center">
        <img
          src={LogoCard}
          alt="Ace coin Pay brand Identity"
          className="w-3 lg:w-4"
        />
      </div>
      <Text className="text-sm font-semibold lg:text-xl text-primary_blue">
        AceCoin<span className=" font-extralight">Pay</span>
      </Text>
    </div>
  );
};

export default Logo;
