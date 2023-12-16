import { useState } from 'react';
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
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');



  function reset(){
    setName('')
    setEmail('')
    setMessage('')
  }

  function inputValueForm(e) {
    const { name, value } = e.target;
  
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'message':
        setMessage(value);
        break;
      default:
        break;
    }
  }

  function handleSubmit(e) {
    e.preventDefault();

    console.log(name, email, message, 'a');

    reset()
  }

  return (
    <FormBlockContainer>
      <FormItem onSubmit={handleSubmit}>
        <FormBlockInputContainer>
          <BlockItem>
            <FormLabel htmlFor="name">Name</FormLabel>
            <FormInput
              type="name"
              name="name"
              onChange={inputValueForm}
              value={name}
            />
          </BlockItem>
          <BlockItem>
            <FormLabel htmlFor="email">Email</FormLabel>
            <FormInput
              type="email"
              name="email"
              onChange={inputValueForm}
              value={email}
            />
          </BlockItem>
        </FormBlockInputContainer>
        <FormBlockMessageContainer>
          <FormLabel htmlFor="message">Message</FormLabel>
          <FormInputMessege
            type="message"
            name="message"
            onChange={inputValueForm}
            value={message}
          />
        </FormBlockMessageContainer>
        <FormButton type="submit">Send</FormButton>
      </FormItem>
    </FormBlockContainer>
  );
};

export default FormBlock;
