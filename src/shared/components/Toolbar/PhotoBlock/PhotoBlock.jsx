import { FirstPhoto, FourthPhoto, SecondPhoto, ThirdPhoto } from './PhotoBlock.styled';
import first from '../../../images/first.png';
import second from '../../../images/second.png';
import third from '../../../images/third.png';
import fourth from '../../../images/fourth.png';

const PhotoBlock = () => {
  return (
    <>
      <FirstPhoto src={first} />
      <SecondPhoto src={second} />
      <ThirdPhoto src={third} />
      <FourthPhoto src={fourth} />
    </>
  );
};

export default PhotoBlock;
