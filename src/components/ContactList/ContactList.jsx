import { Li, Ul, Button } from '../ContactList/ContactList.styled';
import PropTypes from 'prop-types';

export const ContactList = ({ renderList, deleteContact }) => {
  return (
    <Ul>
      {renderList.map(({ id, name, number }) => {
        return (
          <Li key={id}>
            {name}: {number}
            <Button type="button" id={id} onClick={deleteContact}>
              Delete
            </Button>
          </Li>
        );
      })}
    </Ul>
  );
};

ContactList.propTypes = {
  renderList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.number.isRequired,
    })
  ),
  deleteContact: PropTypes.func.isRequired,
};
