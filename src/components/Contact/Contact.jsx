export const Contact = ({ users: { name, number } }) => {
  return (
    <div>
      <p>{name}</p>
      <p>{number}</p>
      <button>Del</button>
    </div>
  );
};
