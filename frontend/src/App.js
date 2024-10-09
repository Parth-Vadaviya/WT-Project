
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ContactList from './components/ContactList';
import AddContact from './components/AddContact';
import EditContact from './components/EditContact';
import About from './components/About';  
import ColorPicker from './components/ColorPicker'; 
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [navbarColor, setNavbarColor] = useState('#003366');
  const [bodyColor, setBodyColor] = useState('#E0F7FA');
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <Router>
      <style>
        {`
          .navbar {
            background-color: ${navbarColor};
            color: white;
          }
          .navbar a {
            color: white;
          }
          .navbar a:hover {
            color: #87CEEB;
          }
          .body {
            background-color: ${bodyColor};
            min-height: 100vh;
            padding: 20px;
            color: #333;
          }
        `}
      </style>

      <nav className="navbar navbar-expand-lg sticky-top">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">Contact-Manager-App</Link>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item me-3">
                <Link className="nav-link" to="/">Contacts</Link>
              </li>
              <li className="nav-item me-3">
                <Link className="nav-link" to="/add">Add Contact</Link>
              </li>
              <li className="nav-item me-3">
                <Link className="nav-link" to="/about">About</Link>
              </li>
              <li className="nav-item me-3">
                <Link className="nav-link" to="#" data-bs-toggle="modal" data-bs-target="#colorModal">Settings</Link>
              </li>
            </ul>
            {/* Search Bar */}
            <form className="d-flex" onSubmit={(e) => e.preventDefault()}>
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search Contacts"
                aria-label="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </form>
          </div>
        </div>
      </nav>

      {/* color picker */}
      <div className="modal fade" id="colorModal" tabIndex="-1" aria-labelledby="colorModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="colorModalLabel">Change Colors</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <ColorPicker setNavbarColor={setNavbarColor} setBodyColor={setBodyColor} />
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>

      <div className="body container mt-4">
        <Routes>
          <Route path="/" element={<ContactList searchQuery={searchQuery} />} />
          <Route path="/add" element={<AddContact />} />
          <Route path="/edit/:id" element={<EditContact />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
