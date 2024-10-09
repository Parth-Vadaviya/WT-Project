
const express = require('express');
const Contact = require('../models/Contact');
const router = express.Router();

// Fetch all contacts
router.get('/', async (req, res) => {
    try {
        const contacts = await Contact.find();
        res.json(contacts);
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch contacts' });
    }
});

// Add a contact
router.post('/', async (req, res) => {
    try {
        const newContact = new Contact(req.body);
        await newContact.save();
        res.json(newContact);
    } catch (err) {
        res.status(400).json({ error: 'Failed to add contact' });
    }
});

// Delete a contact
router.delete('/:id', async (req, res) => {
    try {
        await Contact.findByIdAndDelete(req.params.id);
        res.json({ message: 'Contact deleted' });
    } catch (err) {
        res.status(500).json({ error: 'Failed to delete contact' });
    }
});

// Update a contact
router.put('/:id', async (req, res) => {
    try {
        const updatedContact = await Contact.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updatedContact);
    } catch (err) {
        res.status(400).json({ error: 'Failed to update contact' });
    }
});

// Fetch contact by ID
router.get('/:id', async (req, res) => {
    try {
      const contact = await Contact.findById(req.params.id);
      if (!contact) return res.status(404).json({ error: 'Contact not found' });
      res.json(contact);
    } catch (err) {
      res.status(500).json({ error: 'Failed to fetch contact' });
    }
  });

module.exports = router;
