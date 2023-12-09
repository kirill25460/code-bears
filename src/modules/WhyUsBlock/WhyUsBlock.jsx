import TextBlock from "shared/components/WhyUsBlock/TextBlock/TextBlock";
import { WhyUsBlockConteiner } from "./WhyUsBlock.styled";
import PictureBlock from "shared/components/WhyUsBlock/PictureBlock/PictureBlock";

const WhyUsBlock = () => {
  return (
    <WhyUsBlockConteiner>
      <TextBlock />
      <PictureBlock />
    </WhyUsBlockConteiner>
  );
};

export default WhyUsBlock;
