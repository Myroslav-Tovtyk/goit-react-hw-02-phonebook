import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import styled from 'styled-components';

const ErrorText = styled.p`
  color: red;
  font-size: 14px;
`;
const FormError = ({ name }) => {
  return (
    <ErrorMessage
      name={name}
      render={message => <ErrorText>{message}</ErrorText>}
    />
  );
};
const schema = Yup.object({
  name: Yup.string().required("Будь ласка, введіть ваше ім'я"),
});

export const ContactForm = ({ formValue }) => {
  return (
    <Formik
      validationSchema={schema}
      initialValues={{ name: 'dgdgd' }}
      onSubmit={formValue}
    >
      <Form autoComplete="off">
        <label htmlFor="name">
          Name
          <Field
            type="text"
            name="name"
            // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <FormError name="name" />
        </label>
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
};
