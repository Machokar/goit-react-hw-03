import { useState } from 'react';
import './App.css';
import { Contactlist } from './components/Contactlist/Contactlist';
import { Searchbox } from './components/Searchbox/Searchbox';
import { Contactform } from './components/Contactform/Contactform';

export const App = () => {
  const bob = [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ];
  const [inputv, setinputv] = useState('');
  const [users, setUser] = useState(() => {
    return bob;
  });
  const addusers = newUser => {
    setUser(newusers => {
      return [...newusers, newUser];
    });
  };
  const avalibleusers = users.filter(user =>
    user.name.toLowerCase().includes(inputv.toLowerCase())
  );
  return (
    <div>
      <h1>Phonebook</h1>
      <Contactform addusers={addusers} />
      <Searchbox values={inputv} onChanges={setinputv} />
      <Contactlist avalibleusers={avalibleusers} />
    </div>
  );
};
