import { Picture, PictureContainer } from "./PictureBlock.styled";
import Macbook from '../../../images/Macbook.png'


const PictureBlock = () => {
  return (
    <PictureContainer>
      <Picture src={Macbook} />
    </PictureContainer>
  );
};

export default PictureBlock;