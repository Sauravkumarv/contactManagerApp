import React, { useState } from "react";

function ContactForm({ onAdd }) {
  const [form, setForm] = useState({ name: "", email: "", phone: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    if (form.name.length < 2) return setError("Name must be at least 2 chars");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      return setError("Invalid email format");
    if (!/^\d{10}$/.test(form.phone))
      return setError("Phone must be 10 digits");

    setError("");
    onAdd(form);
    setForm({ name: "", email: "", phone: "" });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-md rounded-lg p-4 w-full max-w-md mb-6"
    >
      <h2 className="text-xl font-semibold mb-2">Add New Contact</h2>
      {error && <p className="text-red-500 mb-2">{error}</p>}

      <input
        type="text"
        name="name"
        placeholder="Name"
        value={form.name}
        onChange={handleChange}
        className="border p-2 rounded w-full mb-2"
      />

      <input
        type="email"
        name="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
        className="border p-2 rounded w-full mb-2"
      />

      <input
        type="text"
        name="phone"
        placeholder="Phone"
        value={form.phone}
        onChange={handleChange}
        className="border p-2 rounded w-full mb-2"
      />

      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Add Contact
      </button>
    </form>
  );
}

export default ContactForm;
