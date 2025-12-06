const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000; 

app.use(cors());
app.use(express.json());

// Sample data
const devices = [
  {
    deviceId: "A02130825",
    name: "Battery Pack 01",
    status: "active",
    temperature: 32,
    voltage: 48.5
  },
  {
    deviceId: "A02130826",
    name: "Battery Pack 02",
    status: "warning",
    temperature: 44,
    voltage: 47.9
  },
  {
    deviceId: "A02130827",
    name: "Battery Pack 03",
    status: "offline",
    temperature: null,
    voltage: null
  }
];

// GET API
app.get('/api/devices', (req, res) => {
  const { status } = req.query;
  
  let data = devices;
  
  if (status) {
    data = data.filter(d => d.status === status);
  }
  
  res.json(data);
});

// Health 
app.get('/health', (req, res) => {
  res.json({ status: 'Server is running' });
});


app.get('/', (req, res) => {
  res.json({ message: 'EV Device Monitoring API', version: '1.0.0' });
});

app.listen(PORT, () => {
  console.log(`✅ Server is running on port ${PORT}`);
});