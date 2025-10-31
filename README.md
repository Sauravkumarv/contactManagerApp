# 📇 Contact Management Application

A **Full Stack Contact Manager** built with React, TailwindCSS, Express, and MongoDB.  
You can add, view, search, and delete contacts with proper validation and responsive UI.

---

## 🧰 Tech Stack

| Layer | Technology |
|-------|-----------|
| **Frontend** | React + TailwindCSS |
| **Backend** | Node.js + Express.js |
| **Database** | MongoDB (Mongoose ODM) |

---

## ⚙️ Setup Instructions

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/Sauravkumarv/contactManagerApp.git
cd contact-manager
```

### 2️⃣ Backend Setup

Navigate to the server directory and install dependencies:

```bash
cd server
npm install
```

**Configure `.env` file**

Create a `.env` file in the `server/` folder:

```env
PORT=5000
MONGO_URI=your database url
```

**Start the backend server**

```bash
npm start
```

Server will run at 👉 **http://localhost:5004**

### 3️⃣ Frontend Setup

Navigate to the client directory and install dependencies:

```bash
cd ../client
# or
cd ../frontend

npm install
```

**Run the frontend**

```bash
npm start
```

React app runs at 👉 **your frontend url**

### 4️⃣ CORS Setup 

In your backend (`server.js` or `index.js`):

```javascript
import cors from "cors";
app.use(cors({ origin: "http://localhost:5173" }));
```

---

## 🚀 How to Run the Application

1. **Start MongoDB service** on your system
2. **Run the backend** (Express server) → `npm start` inside `/server` folder
3. **Run the frontend** (React app) → `npm start` inside `/client` folder
4. **Open your browser** at 👉 **http://localhost:5173**

---

## 🧾 API Endpoints Documentation

### Base URL

```
http://localhost:5173/api/contacts
```

---

### 1️⃣ POST `/api/contacts`

**Create a new contact**

**Request Body:**

```json
{
  "name": "Saurav Verma",
  "email": "saurav@example.com",
  "phone": "9876543210"
}
```

**Validations:**

- `name`: required, minimum 2 characters
- `email`: must be a valid email format
- `phone`: must be 10 digits

**Response (201 Created):**

```json
{
  "_id": "671af1234df1234567890",
  "name": "Saurav Verma",
  "email": "saurav@example.com",
  "phone": "9876543210",
  "__v": 0
}
```

---

### 2️⃣ GET `/api/contacts`

**Fetch all contacts**

**Response (200 OK):**

```json
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
```

---

### 3️⃣ GET `/api/contacts?id=<contactId>`

**Fetch a single contact**

**Example:**

```
GET /api/contacts?id=671af1234df1234567890
```

**Response:**

```json
{
  "_id": "671af1234df1234567890",
  "name": "Saurav Verma",
  "email": "saurav@example.com",
  "phone": "9876543210"
}
```

---

### 4️⃣ DELETE `/api/contacts?id=<contactId>`

**Delete a contact**

**Example:**

```
DELETE /api/contacts?id=671af1234df1234567890
```

**Response:**

```json
{
  "message": "Contact deleted successfully"
}
```

---

## 🧠 Features

✅ Add contact with validation  
✅ List all contacts  
✅ Search contact by name  
✅ Delete with confirmation  
✅ Show total contact count  
✅ Error & loading states  
✅ Responsive design (TailwindCSS)

---

