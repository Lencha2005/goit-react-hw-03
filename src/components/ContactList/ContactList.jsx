import React from 'react';
import Contact from '../Contact/Contact';
import styles from './ContactList.module.css'

const ContactList = ({users}) => {
  return (
    <ul className={styles.list}>
      {users.map(user => {
        return (
        <li key={user.id} className={styles.item}>
          <Contact
          name={user.name}
          number={user.number}
          />
        </li>
      )})}
    </ul>
  )
}

export default ContactList