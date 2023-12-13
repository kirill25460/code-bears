import {
  BlockItem,
  FormBlockContainer,
  FormBlockInputContainer,
  FormBlockMessageContainer,
  FormButton,
  FormInput,
  FormInputMessege,
  FormItem,
  FormLabel,
} from './FormBlock.styled';

const FormBlock = () => {
  return (
    <FormBlockContainer>
      <FormItem>
        <FormBlockInputContainer>
          <BlockItem>
            <FormLabel htmlFor="name">Name</FormLabel>
            <FormInput type="name" />
          </BlockItem>
          <BlockItem>
            <FormLabel htmlFor="email">Email</FormLabel>
            <FormInput type="email" />
          </BlockItem>
        </FormBlockInputContainer>
        <FormBlockMessageContainer>
          <FormLabel htmlFor="message">Message</FormLabel>
          <FormInputMessege type="message" />
        </FormBlockMessageContainer>
        <FormButton type="submit">Send</FormButton>
      </FormItem>
    </FormBlockContainer>
  );
};

export default FormBlock;
