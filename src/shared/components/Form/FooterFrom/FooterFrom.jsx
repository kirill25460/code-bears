import {
  FooterFromContainer,
  FooterFromSpan,
  FooterFromText,
} from './FooterFrom.styled';

const FooterFrom = () => {
  return (
    <FooterFromContainer>
      <FooterFromText>
        Or if you have any questions left <br/> Be sure to <FooterFromSpan href='#'>contact</FooterFromSpan> us, we always love to hear you!
      </FooterFromText>
    </FooterFromContainer>
  );
};

export default FooterFrom;
