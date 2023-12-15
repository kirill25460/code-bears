import FooterContact from "shared/components/Footer/FooterContact/FooterContact";
import { FooterConteiner } from "./Footer.styled";
import FooterBrandName from "shared/components/Footer/FooterBrandName/FooterBrandName";
import FooterInfo from "shared/components/Footer/FooterInfo/FooterInfo";

const Footer = () => {
  return (
    <FooterConteiner>
      <FooterContact />
      <FooterBrandName />
      <FooterInfo />
    </FooterConteiner>
  );
};

export default Footer;
