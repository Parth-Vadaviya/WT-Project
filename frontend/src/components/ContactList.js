
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const ContactList = ({ searchQuery }) => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/contacts')
      .then((res) => res.json())
      .then((data) => setContacts(data))
      .catch((err) => console.error(err));
  }, []);

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this contact?')) {
      fetch(`http://localhost:5000/api/contacts/${id}`, {
        method: 'DELETE',
      })
        .then(() => {
          setContacts(contacts.filter((contact) => contact._id !== id));
        })
        .catch((err) => console.error(err));
    }
  };

  const filteredContacts = contacts.filter(contact => 
    contact.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container" style={{ backgroundColor: 'white', padding: '20px' }}>
      <div className="row">
        {filteredContacts.map((contact) => (
          <div className="col-md-4 mb-3" key={contact._id}>
            <div
              className="card"
              style={{
                backgroundColor: '#add8e6',
                borderRadius: '10px',
                padding: '15px',
                height: '250px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                border: searchQuery && contact.name.toLowerCase().includes(searchQuery.toLowerCase()) 
                  ? '3px solid yellow' : 'none', // this will highlight contact by search
              }}
            >
              <div>
                <h5 className="card-title">Contact Information</h5>
                <hr />
                <p><strong>Name:</strong> {contact.name}</p>
                <p><strong>Email:</strong> {contact.email}</p>
                <p><strong>Phone:</strong> {contact.phone}</p>
              </div>
              <div>
                <Link to={`/edit/${contact._id}`} className="btn btn-warning me-2">Edit</Link>
                <button
                  className="btn btn-danger"
                  onClick={() => handleDelete(contact._id)}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactList;
