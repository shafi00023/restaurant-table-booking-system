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

// Endpoint to fetch all users
app.get("/api/users", (req, res) => {
  // Read users from db.json
  const users = JSON.parse(fs.readFileSync("db.json", "utf8"));
  res.json(users);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
