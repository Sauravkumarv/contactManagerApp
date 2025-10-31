import React, { useEffect, useState } from "react";
import axios from "axios";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";
import SearchBar from "./components/SearchBar";

function App() {
  // State variables to store data
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");

  // Base URL for API requests
  const API_URL = import.meta.env.VITE_API_URL 

  // Function to get all contacts from the server
  const fetchContacts = async () => {
    try {
      setLoading(true);
      // axios.get automatically parses JSON response
      const response = await axios.get(`${API_URL}/contacts`);
      setContacts(response.data);
      setError("");
    } catch (err) {
      setError("Failed to load contacts");
    } finally {
      setLoading(false);
    }
  };

  // Load contacts when the app starts
  useEffect(() => {
    fetchContacts();
  }, []);

  // Function to add a new contact
  const handleAdd = async (contact) => {
    try {
      setLoading(true);
      // axios.post automatically sends JSON and sets headers
      await axios.post(`${API_URL}/contacts`, contact);
      
      // Refresh the contact list
      fetchContacts();
    } catch (err) {
      setError("Error adding contact");
    } finally {
      setLoading(false);
    }
  };

  // Function to delete a contact
  const handleDelete = async (id) => {
    // Ask user to confirm before deleting
    if (!window.confirm("Are you sure you want to delete this contact?")) return;
    
    try {
      setLoading(true);
      // Send delete request with id as parameter
      await axios.delete(`${API_URL}/contacts/${id}`, {
        params: { id }
      });
      
      // Refresh the contact list
      fetchContacts();
    } catch (err) {
      setError("Error deleting contact");
    } finally {
      setLoading(false);
    }
  };

  // Filter contacts based on search input
  const filteredContacts = contacts.filter((c) =>
    c.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-4">
      <h1 className="text-3xl font-bold text-blue-600 mb-4">📇 Contact Manager</h1>

      <SearchBar search={search} setSearch={setSearch} />

      <ContactForm onAdd={handleAdd} />

      {loading && <p className="text-gray-500">Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}

      <p className="mt-4 font-semibold">
        Total Contacts: {filteredContacts.length}
      </p>

      <ContactList contacts={filteredContacts} onDelete={handleDelete} />
    </div>
  );
}

export default App;