import React from "react";
import { useState } from "react";

function ContactList({contacts, onDelete }) {

  




  if (contacts.length === 0)
    return <p className="text-gray-600 mt-4">No contacts found.</p>;

  return (
    <ul className="bg-white shadow-lg rounded-lg w-full max-w-md mt-4 divide-y divide-gray-200">
      {contacts.map((c) => (
        <li key={c._id} className="flex justify-between items-center p-3">
          <div>
            <p className="font-semibold">{c.name}</p>
            <p className="text-gray-600 text-sm">{c.email}</p>
            <p className="text-gray-600 text-sm">{c.phone}</p>
          </div>
          <button
            onClick={() => onDelete(c._id)}
            className="text-red-500 hover:text-red-700"
          >
            🗑️
          </button>
        </li>
      ))}
    </ul>
  );
}

export default ContactList;
