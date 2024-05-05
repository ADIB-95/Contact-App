import ContactItem from "./ContactItem";
import styles from "./ContactsList.module.css";
function ContactsList({ contacts, deleteHandler, setContacts }) {
  return (
    <div className={styles.container}>
      <h3>Contacts List</h3>
      {contacts.length ? (
        <ul className={styles.contacts}>
          {contacts.map((contact) => (
            <ContactItem
              key={contact.id}
              data={contact}
              setContacts={setContacts}
              deleteHandler={deleteHandler}
            />
          ))}
        </ul>
      ) : (
        <p className={styles.message}>No Contacts Yet !</p>
      )}
    </div>
  );
}

export default ContactsList;
