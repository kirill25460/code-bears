import HeadFrom from "shared/components/Form/HeadFrom/HeadFrom";
import { FormConteiner } from "./Form.styled";
import FormBlock from "shared/components/Form/FormBlock/FormBlock";

const Form = () => {
    return (
      <FormConteiner>
        <HeadFrom />
        <FormBlock />
        {/* <FooterFrom /> */}
      </FormConteiner>
    );
  };
  
  export default Form;
  