import { Label, Input } from 'components/Filter/Filter.styled';
export const Filter = ({ handleChange }) => {
  return (
    <dir>
      <Label>
        Find contacts by name
        <Input type="text" name="filter" onChange={handleChange} />
      </Label>
    </dir>
  );
};
