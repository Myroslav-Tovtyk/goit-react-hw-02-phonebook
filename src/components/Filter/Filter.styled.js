import styled from 'styled-components';
export const Input = styled.input`
  align-self: center;
  width: 300px;
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

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 4px;
`;
