import { FooterContactConteiner, FooterContactItem, FooterContactList, Instagram, Mail, Telegram } from "./FooterContact.styled";

const FooterContact = () => {
    return (
      <FooterContactConteiner>
            <FooterContactList>
                <FooterContactItem><Mail/>codebear@gmail.com</FooterContactItem>
                <FooterContactItem><Instagram/>@codebearit</FooterContactItem>
                <FooterContactItem><Telegram/>@codebearmanager</FooterContactItem>
            </FooterContactList>
      </FooterContactConteiner>
    );
  };
  
  export default FooterContact;