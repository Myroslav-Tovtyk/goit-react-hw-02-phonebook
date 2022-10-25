export const ContactList = ({ renderList }) => {
  return (
    <ul>
      {renderList.map(({ name }) => {
        return <li>{name}</li>;
      })}
    </ul>
  );
};
