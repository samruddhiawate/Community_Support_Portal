# Community Support Portal

A district-based directory that helps people find **real NGOs, sevashrams, shelters, and support centres** in Maharashtra. Users select a **district** and **help type**, then see matching organization cards with address, contact, source, last verified date, and an official website link when available.

---

## Features

- Search by **district** and **help type**
- Organization cards with name, description, address, and phone
- **Clickable official website** links (only when a real URL exists)
- **Source** and **last verified** information on each card
- Organization **details page** with full information
- Data stored in **MongoDB** and served by a REST API
- Seeded with real organizations across **Kolhapur, Sangli, Pune, Satara, and Nashik**

### Help types

- Shelter / Ashram  
- Old Age Home  
- Mental Health / Rehabilitation  
- Homeless Support  
- Disability Support  
- Women & Children Shelter  

---

## Tech stack

| Layer    | Technology                          |
|----------|-------------------------------------|
| Frontend | React, Vite, React Router, MUI      |
| Backend  | Node.js, Express                    |
| Database | MongoDB (Mongoose)                  |

---

## Project structure

```
Community Support Portal/
├── client/                 # React frontend
│   └── src/
│       ├── pages/          # Home, Organizations, Details, About
│       └── components/     # Navbar
└── server/                 # Express API
    ├── models/             # Organization schema
    ├── routes/             # API routes
    ├── seedOrganizations.js
    └── server.js
```

---

## Prerequisites

- [Node.js](https://nodejs.org/) (v18 or later recommended)
- [MongoDB](https://www.mongodb.com/) running locally (or a MongoDB Atlas connection string)

---

## Setup

### 1. Clone / open the project

Use this folder only:

```text
Community Support Portal/
```

### 2. Backend setup

```bash
cd server
npm install
```

Create a `.env` file inside `server/` (if it does not already exist):

```env
MONGO_URI=mongodb://127.0.0.1:27017/community_support
PORT=5000
```

### 3. Seed real organization data

```bash
cd server
node seedOrganizations.js
```

This inserts verified organizations with real contact details and official websites where available.

### 4. Start the server

```bash
cd server
node server.js
```

API runs at: [http://localhost:5000](http://localhost:5000)

### 5. Frontend setup

Open a **new terminal**:

```bash
cd client
npm install
npm run dev
```

App runs at: [http://localhost:5173](http://localhost:5173) (or the port Vite prints)

---

## How to use

1. Open the home page.
2. Select a **District** and **Help Type**.
3. Click **Find Support**.
4. Browse organization cards.
5. Click **Visit Website** to open the official NGO/sevashram site.
6. Click **View Details →** for the full organization page.

You can also open **Organizations** and use the filters (including **All Districts** / **All Help Types**) to browse everything.

---

## API endpoints

| Method | Endpoint                         | Description                          |
|--------|----------------------------------|--------------------------------------|
| `GET`  | `/api/organizations`             | List all organizations               |
| `GET`  | `/api/organizations?district=`   | Filter by district                   |
| `GET`  | `/api/organizations?helpType=`   | Filter by help type                  |
| `GET`  | `/api/organizations/:id`         | Get one organization by ID           |
| `POST` | `/api/organizations`             | Add a new organization               |

### Example

```text
GET http://localhost:5000/api/organizations?district=Sangli&helpType=Old%20Age%20Home
```

---

## Organization data fields

Defined in `server/models/Organization.js`:

| Field          | Required | Description                          |
|----------------|----------|--------------------------------------|
| `name`         | Yes      | Organization / NGO name              |
| `district`     | Yes      | District location                    |
| `helpType`     | Yes      | Type of support                      |
| `address`      | Yes      | Full address                         |
| `contact`      | Yes      | Phone or contact                     |
| `description`  | Yes      | Short description                    |
| `website`      | No       | Official website URL (if available)  |
| `source`       | Yes      | Source of information                |
| `lastVerified` | Auto     | Last verification date               |

---

## Adding more organizations

### Option A — seed file

Edit `server/seedOrganizations.js`, then run:

```bash
node seedOrganizations.js
```

> Note: reseeding clears existing organization documents and inserts the list again.

### Option B — API

```bash
POST http://localhost:5000/api/organizations
Content-Type: application/json
```

```json
{
  "name": "Organization Name",
  "district": "Kolhapur",
  "helpType": "Old Age Home",
  "address": "Full address",
  "contact": "+91 XXXXX XXXXX",
  "description": "Short description",
  "website": "https://example.org/",
  "source": "Official Website"
}
```

Leave `website` as `""` if there is no official link.

---

## Notes

- Only **real** organization information should be stored.
- Add a website link **only** when an official URL exists.
- Keep the server running while using the frontend, or cards will not load.

---

## License

ISC
