import {
  FooterInfoConteiner,
  FooterInfoItem,
  FooterInfoList,
} from './FooterInfo.styled';

const FooterInfo = () => {
  return (
    <FooterInfoConteiner>
      <FooterInfoList>
        <FooterInfoItem>Terms&Condition</FooterInfoItem>
        <FooterInfoItem>Data security</FooterInfoItem>
        <FooterInfoItem>Privacy policy</FooterInfoItem>
      </FooterInfoList>
    </FooterInfoConteiner>
  );
};

export default FooterInfo;




