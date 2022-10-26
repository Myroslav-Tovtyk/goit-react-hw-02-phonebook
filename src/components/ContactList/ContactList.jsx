import { Li, Ul, Button } from '../ContactList/ContactList.styled';

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
