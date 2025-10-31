📇 Contact Management Application

A Full Stack Contact Manager built with React, TailwindCSS, Express, and MongoDB.
You can add, view, search, and delete contacts with proper validation and responsive UI.

🧰 Tech Stack

Frontend: React + TailwindCSS
Backend: Node.js + Express.js
Database: MongoDB (Mongoose ODM)

⚙️ Setup Instructions
1️⃣ Clone the Repository
git clone https://github.com/Sauravkumarv/contactManagerApp.git
cd contact-manager

2️⃣ Backend Setup
cd server
npm install

Configure .env file

Create a .env file in the server/ folder:

PORT=5000
MONGO_URI=your database url

Start the backend server
npm start


Server will run at 👉 http://localhost:5004

3️⃣ Frontend Setup
cd ../client or frontend
npm install

Run the frontend
npm start


React app runs at 👉 you frontend url

4️⃣ CORS Setup (if needed)

In your backend (server.js or index.js):

import cors from "cors";
app.use(cors({ origin: "(http://localhost:5173)" }));

🚀 How to Run the Application

Start MongoDB service on your system.

Run the backend (Express server) → npm start inside /server folder.

Run the frontend (React app) → npm start inside /client folder.

Open your browser at 👉 http://localhost:5173

🧾 API Endpoints Documentation
Base URL
http://localhost:5173/api/contacts

1️⃣ POST /api/contacts

Create a new contact

Request Body:
{
  "name": "Saurav Verma",
  "email": "saurav@example.com",
  "phone": "9876543210"
}

Validations:

name: required, minimum 2 characters

email: must be a valid email format

phone: must be 10 digits

Response (201 Created):
{
  "_id": "671af1234df1234567890",
  "name": "Saurav Verma",
  "email": "saurav@example.com",
  "phone": "9876543210",
  "__v": 0
}

2️⃣ GET /api/contacts

Fetch all contacts

Response (200 OK):
[
  {
    "_id": "671af1234df1234567890",
    "name": "Saurav Verma",
    "email": "saurav@example.com",
    "phone": "9876543210"
  },
  {
    "_id": "671af5678df1234567891",
    "name": "Priya Sharma",
    "email": "priya@gmail.com",
    "phone": "9123456789"
  }
]

3️⃣ GET /api/contacts?id=<contactId>

Fetch a single contact

Example:
GET /api/contacts?id=671af1234df1234567890

Response:
{
  "_id": "671af1234df1234567890",
  "name": "Saurav Verma",
  "email": "saurav@example.com",
  "phone": "9876543210"
}

4️⃣ DELETE /api/contacts?id=<contactId>

Delete a contact

Example:
DELETE /api/contacts?id=671af1234df1234567890

Response:
{ "message": "Contact deleted successfully" }

🧠 Features

✅ Add contact with validation
✅ List all contacts
✅ Search contact by name
✅ Delete with confirmation
✅ Show total contact count
✅ Error & loading states
✅ Responsive design (TailwindCSS)


You can include screenshots like:

Contact List Page

Add Contact Form

Delete Confirmation

