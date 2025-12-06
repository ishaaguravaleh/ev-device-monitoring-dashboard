

## Installation 

### Backend Setup

1. Navigate to the backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Start the server:
```bash
npm run dev
```

The backend will run on `http://localhost:5000`

### Frontend Setup

1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The frontend will run on `http://localhost:3000`


### GET /api/devices
Returns all devices or filtered by status

**Examples:**
- Get all devices: `http://localhost:5000/api/devices`
- Get active devices: `http://localhost:5000/api/devices?status=active`
- Get warning devices: `http://localhost:5000/api/devices?status=warning`



## 🔧 Technologies Used

**Frontend:**
- React 18
- Tailwind CSS
- Lucide React (icons)

**Backend:**
- Node.js
- Express.js
- CORS

