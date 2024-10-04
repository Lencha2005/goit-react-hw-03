import { useState } from 'react';
import './App.css';
import SearchBox from './components/SearchBox/SearchBox';
import ContactList from './components/ContactList/ContactList';
import ContactForm from './components/ContactForm/ContactForm';
import usersData from './usersData.json'

function App() {
  const [users, setUsers] = useState(usersData);
  const [filter, setFilter] = useState("");

  const addUser = (newUser) => {
    setUsers((prevState) => {
      return [...prevState, newUser]
    })


  };

const onFilter = (e) => {
  setFilter(e.target.value)
}

const visibleUsers = users.filter(user => user.name.toLowerCase().includes(filter.toLowerCase()));


  return (
    <div>
  <h1>Phonebook</h1>
  <ContactForm addUser={addUser}/>
  <SearchBox value={filter} onFilter={onFilter}/>
  <ContactList users={visibleUsers}/>
</div>

  )
}

export default App
