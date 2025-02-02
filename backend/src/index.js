const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use('/images', express.static('public/images'));

// Mock data for trips (replace with database later)
// Cards will get their details from db after setup
const trips = [
  {
    id: 1,
    title: "Manali Snow Trek",
    image: "/images/manali.jpg",
    description: "An unforgettable trek through snowy landscapes.",
    month: "January",
    price: 12000
  },
  {
    id: 2,
    title: "Goa Beach Getaway",
    image: "/images/goa.jpg",
    description: "Relax on the beaches of Goa with amazing nightlife.",
    month: "February",
    price: 15000
  }
];

// Homepage route
app.get('/', (req, res) => {
  res.json({
    message: "Welcome to TripHub API",
    endpoints: {
      trips: "/trips",
      search: "/trips?query=destination",
      sort: "/trips?month=January&sort=price_asc",
      contact: "/contact"
    }
  });
});

// Get all trips
app.get('/trips', (req, res) => {
  let filteredTrips = [...trips]; // Ensure we don't mutate the original array
  const { query, month, sort } = req.query;

  if (query) {
    filteredTrips = filteredTrips.filter(trip =>
      trip.title.toLowerCase().includes(query.toLowerCase())
    );
  }

  if (month) {
    filteredTrips = filteredTrips.filter(trip => trip.month.toLowerCase() === month.toLowerCase());
  }

  if (sort === 'price_asc') {
    filteredTrips.sort((a, b) => a.price - b.price);
  }

  console.log("Sorted Trips:", filteredTrips);

  res.json(filteredTrips);
});


// Contact form submission
app.post('/contact', (req, res) => {
  const { name, phone, message } = req.body;

  if (!name || !phone || !message) {
    return res.status(400).json({ error: "All fields are required" });
  }
  if (!/^\d{10}$/.test(phone)) {
    return res.status(400).json({ error: "Invalid phone number format" });
  }

  res.json({ message: "Contact request received", data: { name, phone, message } });
});

// 404 Route
app.use((req, res) => {
  res.status(404).json({ error: "Route not found. Endpoint may have a typo." });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
