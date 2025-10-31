import React from "react";

function SearchBar({ search, setSearch }) {
  return (
    <input
      type="text"
      placeholder="🔍 Search contacts..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      className="border rounded-lg p-2 w-full max-w-md mb-4"
    />
  );
}

export default SearchBar;
