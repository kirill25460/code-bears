import {  PhotoBlockContainer, Photo } from './PhotoBlock.styled';
import sites from '../../../images/sites.png'

const PhotoBlock = () => {
  return (
    <PhotoBlockContainer>
      <Photo src={sites} />
    </PhotoBlockContainer>
  );
};

export default PhotoBlock;
