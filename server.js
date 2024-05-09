const express = require("express");
const fs = require("fs");
const cors = require("cors"); // Import cors
const app = express();
const PORT = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Allow requests from all origins
app.use(cors());

// Endpoint to handle user registration
app.post("/api/register", (req, res) => {
  const { username, email, password, contact } = req.body;

  // Read existing users from db.json
  const users = JSON.parse(fs.readFileSync("db.json", "utf8"));

  // Check if user with the same email already exists
  const existingUser = users.find((user) => user.email === email);
  if (existingUser) {
    return res
      .status(400)
      .json({ error: "User with this email already exists" });
  }

  // Add new user to the users array
  users.push({ username, email, password, contact });

  // Write updated users array back to db.json
  fs.writeFileSync("db.json", JSON.stringify(users, null, 2));

  res.status(201).json({ message: "User registered successfully" });
});
// Endpoint to handle POST requests to /api/users with credentials
app.post("/api/users", (req, res) => {
  const { email, password } = req.body;

  // Read users from db.json
  const users = JSON.parse(fs.readFileSync("db.json", "utf8"));

  // Find user with matching email and password
  const user = users.find(
    (user) => user.email === email && user.password === password
  );

  if (!user) {
    return res.status(401).json({ error: "Invalid email or password" });
  }

  // Return the user details
  res.status(200).json(user);
});

// Endpoint to fetch all users
app.get("/api/users", (req, res) => {
  // Read users from db.json
  const users = JSON.parse(fs.readFileSync("db.json", "utf8"));
  console.log("users", users);
  res.json(users);
});

// Endpoint to book a restaurant table
app.post("/api/book-table", (req, res) => {
  const { name, email, date, time, partySize } = req.body;

  // Read existing bookings from booking.json
  let bookings = [];
  try {
    bookings = JSON.parse(fs.readFileSync("booking.json", "utf8"));
  } catch (error) {
    console.error("Error reading booking.json:", error);
  }

  // Generate a unique booking ID
  const bookingId = generateBookingId();

  // Create new booking object
  const newBooking = {
    bookingId,
    name,
    email,
    date,
    time,
    partySize,
  };

  // Add new booking to the bookings array
  bookings.push(newBooking);

  // Write updated bookings array back to booking.json
  fs.writeFileSync("booking.json", JSON.stringify(bookings, null, 2));

  res.status(201).json({ message: "Table booked successfully", bookingId });
});

// Function to generate a unique booking ID
function generateBookingId() {
  // Generate a random 6-digit number
  return Math.floor(100000 + Math.random() * 900000);
}

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
