import { Title } from './Section.styled';

export const Section = ({ title, children }) => {
  return title ? (
    <section>
      <Title>{title}</Title>
      {children}
    </section>
  ) : (
    <div>{children}</div>
  );
};
