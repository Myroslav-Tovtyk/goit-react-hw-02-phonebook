import PropTypes from 'prop-types';
import { Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import {
  Input,
  ErrorText,
  FormikForm,
  SubmitButton,
  Label,
} from '../ContactForm/ContactForm.styled';

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
  number: Yup.string().required('Будь ласка, введіть ваш номер'),
});

export const ContactForm = ({ formValue }) => {
  return (
    <Formik
      validationSchema={schema}
      initialValues={{
        name: '',
        number: '',
      }}
      onSubmit={formValue}
    >
      <FormikForm autoComplete="off">
        <Label htmlFor="name">
          Name
          <Input
            type="text"
            name="name"
            placeholder="Name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <FormError name="name" />
        </Label>
        <Label htmlFor="number">
          Number
          <Input
            type="tel"
            name="number"
            placeholder="Number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
          <FormError name="number" />
        </Label>
        <SubmitButton type="submit">Add contact</SubmitButton>
      </FormikForm>
    </Formik>
  );
};

ContactForm.protoType = {
  formValue: PropTypes.func.isRequired,
};
