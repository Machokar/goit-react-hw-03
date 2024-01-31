import { Contact } from '../Contact/Contact';

export const Contactlist = ({ avalibleusers }) => {
  return (
    <ul>
      {avalibleusers.map(user => (
        <li key={user.id}>
          <Contact users={user} />
        </li>
      ))}
    </ul>
  );
};
