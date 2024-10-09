
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import bootstrap  from 'bootstrap/dist/css/bootstrap.min.css';

const AddContact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    notes: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost:5000/api/contacts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then(() => navigate('/'))
      .catch((err) => console.error(err));
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label className="form-label">Name</label>
        <input type="text" name="name" className="form-control" value={formData.name} onChange={handleChange} />
      </div>
      <div className="mb-3">
        <label className="form-label">Email</label>
        <input type="email" name="email" className="form-control" value={formData.email} onChange={handleChange} />
      </div>
      <div className="mb-3">
        <label className="form-label">Phone</label>
        <input type="text" name="phone" className="form-control" value={formData.phone} onChange={handleChange} />
      </div>
      <button type="submit" className="btn btn-primary">Add Contact</button>
    </form>
  );
};

export default AddContact;
