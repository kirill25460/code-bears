import {
  BlockImg,
  Button,
  ImageText,
  ImageWithOverlay,
  OverlayContent,
  BookService,
  FlexBox,
  BlockShadowImg,
  Arrow
} from './ReviewBlock.styled';
import bl from '../../../images/block.png';
import bg from '../../../images/block_shadow.png';

const ReviewBlock = () => {
  return (
    <>
      <ImageWithOverlay>
        <BlockImg src={bl} />
        <BlockShadowImg src={bg} />

        <OverlayContent>
          <ImageText>
            Review of our work by some doode, damn chuck-a-fill tastes
            good.Review of our work by some doode, damn chuck-a-fill tastes
            good.Review of our work by some doode, damn chuck-a-fill tastes
            good.Review of our work by some doode, damn chuck-a-fill tastes
            good.Review of our work by some doode, damn chuck-a-fill tastes
            good.Review of our work by some doode, damn chuck-a-fill tastes
            good.
          </ImageText>
          <FlexBox>
            <BookService>by: BookService</BookService>
            <Button><Arrow /></Button>
          </FlexBox>
        </OverlayContent>
      </ImageWithOverlay>
    </>
  );
};

export default ReviewBlock;
