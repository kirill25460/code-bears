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
  StyledTitleSpan,
  StyledTitle,
  StyledText,
  StyledSection,
  StyledSpan,
  ColorConteiner,
  InfoText,
  StyledFieldMess,
} from './styled';
import { useTranslation } from 'react-i18next';

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
  const { t } = useTranslation();

  return (
    <StyledSection id="contact">
      <ColorConteiner>
        <Container>
          <StyledTitle>
            {t('contact.mainText')}
            <br />
            <StyledTitleSpan>{t('contact.spanText')}</StyledTitleSpan>
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
                  Message*
                  <StyledFieldMess as="textarea" name="message" />
                </StyledLabel>
                <Button id="contact" />
              </StyledForm>
            )}
          </Formik>
          <InfoText>* - {t('contact.required')}</InfoText>
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
