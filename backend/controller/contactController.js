const Contact = require("../model/contactSchemal");

// Create new contact
const createContact = async (req, res) => {
  try {
    const { name, email, phone } = req.body;

    if (!name || name.trim().length < 2) {
      return res
        .status(400)
        .json({ message: "Name is required (min 2 characters)" });
    }

    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!email || !emailRegex.test(email)) {
      return res.status(400).json({ message: "Invalid email format" });
    }

    const phoneRegex = /^\d{10}$/;
    if (!phone || !phoneRegex.test(phone)) {
      return res
        .status(400)
        .json({ message: "Phone number must be exactly 10 digits" });
    }

    const contact = await Contact.create({ name, email, phone });

    res.status(201).json({
      message: "Contact created successfully",
      contact,
    });
  } catch (error) {
    console.log("Error happend in createContactController")
    res.status(500).json({ message: error.message });
  }
};

// Get all contacts
const getContacts = async (req, res) => {
  try {
    const contacts = await Contact.find(); 
    res.status(200).json(contacts);        
  } catch (error) {
    console.error("Error fetching contacts in getContact Controller");
    res.status(500).json({
      message: "Failed to fetch contacts",
      error: error.message,
    });
  }
};


// Get single contact
const getSingleContact = async (req, res) => {
  const { id } = req.params;
  try {
    const contact = await Contact.findById(id);
    if (!contact) return res.status(404).json({ message: "Contact not found" });
    res.status(200).json(contact);
  } catch (error) {
    console.log("Error fetching getSingleContact Controller")
    res.status(400).json({ message: "Invalid ID format" });
  }
};

// Delete contact
 const deleteContact = async (req, res) => {
  const { id } = req.params;
  try {
    const contact = await Contact.findByIdAndDelete(id);
    if (!contact) return res.status(404).json({ message: "Contact not found" });
    res.status(200).json({ message: "Contact deleted successfully" });
  } catch (error) {
    console.log("Error in deleteContact Controller")
    res.status(400).json({ message: "Invalid ID format" });
  }
};

module.exports = { createContact,getContacts,getSingleContact,deleteContact };
