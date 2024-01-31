import { Contact } from '../Contact/Contact';

export const Contactlist = ({ avalibleusers, deletbut }) => {
  return (
    <ul>
      {avalibleusers.map(user => (
        <li key={user.id}>
          <Contact users={user} deletbut={deletbut} />
        </li>
      ))}
    </ul>
  );
};
