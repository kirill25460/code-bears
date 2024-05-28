import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import Button from '../common/button';
import { Container } from '../common/styled';
import {
  StyledForm,
  StyledField,
  StyledInputWraper,
  StyledLabel,
  Error,
  StyledTitleSpan,
  StyledTitle,
  StyledText,
  StyledSection,
  StyledSpan,
  ColorConteiner,
  InfoText,
  StyledFieldMess,
} from './styled';

const contactSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  message: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
});

const Contact = () => {
  return (
    <StyledSection id="contact">
      <ColorConteiner>
        <Container>
          <StyledTitle>
            Feeling like you have seen enough?
            <br />
            <StyledTitleSpan>Lets work together!</StyledTitleSpan>
          </StyledTitle>
          <Formik
            initialValues={{
              name: '',
              message: '',
              email: '',
            }}
            validationSchema={contactSchema}
            onSubmit={values => {
              console.log(values);
            }}
          >
            {({ errors, touched }) => (
              <StyledForm>
                <StyledInputWraper>
                  <StyledLabel>
                    Name*
                    <StyledField name="name" required />
                    
                  </StyledLabel>
                  <StyledLabel>
                    Email*
                    <StyledField name="email" type="email" required />
                   
                  </StyledLabel>
                </StyledInputWraper>
                <StyledLabel>
                  Message
                  <StyledFieldMess  as="textarea" name="message" />
                 
                </StyledLabel>
                <Button id="contact" />
              </StyledForm>
            )}
           
          </Formik>
          <InfoText>* - Required fields</InfoText>
          <StyledText>
            Or if you have any questions left <br />
            Be sure to <StyledSpan>contact</StyledSpan> us, we always love to
            hear you!
          </StyledText>
        </Container>
      </ColorConteiner>
    </StyledSection>
  );
};

export default Contact;
