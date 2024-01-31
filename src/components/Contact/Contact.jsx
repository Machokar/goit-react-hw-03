export const Contact = ({ users: { name, number, id }, deletbut }) => {
  return (
    <div>
      <p>{name}</p>
      <p>{number}</p>
      <button onClick={() => deletbut(id)}>Del</button>
    </div>
  );
};
