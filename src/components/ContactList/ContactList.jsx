import { Li, Ul } from '../ContactList/ContactList.styled';

export const ContactList = ({ renderList }) => {
  return (
    <Ul>
      {renderList.map(({ id, name, number }) => {
        return (
          <Li key={id}>
            {name}: {number}
          </Li>
        );
      })}
    </Ul>
  );
};
