
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import bootstrap  from 'bootstrap/dist/css/bootstrap.min.css';

const EditContact = () => {
  const { id } = useParams();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    notes: '',
  });

  const navigate = useNavigate();

  // Fetch existing contact details by ID
  useEffect(() => {
    fetch(`http://localhost:5000/api/contacts/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setFormData(data);
      })
      .catch((err) => console.error(err));
  }, [id]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`http://localhost:5000/api/contacts/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then(() => {
        navigate('/');
      })
      .catch((err) => console.error(err));
  };

  return (
    <div>
      <h2>Edit Contact</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            name="name"
            className="form-control"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            name="email"
            className="form-control"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Phone</label>
          <input
            type="text"
            name="phone"
            className="form-control"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Address</label>
          <input
            type="text"
            name="address"
            className="form-control"
            value={formData.address}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Notes</label>
          <textarea
            name="notes"
            className="form-control"
            value={formData.notes}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">Update Contact</button>
      </form>
    </div>
  );
};

export default EditContact;
