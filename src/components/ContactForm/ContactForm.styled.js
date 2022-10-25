import { Field, Form } from 'formik';
import styled from 'styled-components';

export const Input = styled(Field)`
  font-size: 18px;
  padding: 10px;
  margin: 10px;
  background: papayawhip;
  border: none;
  border-radius: 3px;
  ::placeholder {
    color: palevioletred;
  }
  box-shadow: 0 0 15px 4px rgba(0, 0, 0, 0.06);
`;
export const ErrorText = styled.p`
  color: red;
  font-size: 14px;
`;
export const FormikForm = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  gap: 16px;
  width: 360px;
  padding: 8px;
  border: 2px solid palevioletred;
  border-radius: 4px;
`;
export const SubmitButton = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;
  cursor: pointer;
  :hover {
    border: none;
    background-color: skyblue;
    color: white;
  }
`;
export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;
