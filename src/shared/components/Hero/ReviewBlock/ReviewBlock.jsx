import { BlockImg, Button, ImageText, ImageWithOverlay, OverlayContent } from './ReviewBlock.styled';
import bl from '../../../images/block.png';
import bl_shadow from '../../../images/block_shadow.png'

const ReviewBlock = () => {
  return (
    <ImageWithOverlay>
      <BlockImg src={bl} />

      <OverlayContent>
        <ImageText>Review of our work by some doode, damn chuck-a-fill tastes good.Review of our work by some doode, damn chuck-a-fill tastes good.Review of our work by some doode, damn chuck-a-fill tastes good.Review of our work by some doode, damn chuck-a-fill tastes good.Review of our work by some doode, damn chuck-a-fill tastes good.Review of our work by some doode, damn chuck-a-fill tastes good.</ImageText>
        <Button>Click Me</Button>
      </OverlayContent>
    </ImageWithOverlay>
  );
};

export default ReviewBlock;
