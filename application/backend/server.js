const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/health", (req, res) => {
  res.status(200).json({
    status: "UP",
    service: "backend"
  });
});

app.get("/api", (req, res) => {
  res.status(200).json({
    message: "NodeJS Three Tier Backend API"
  });
});

app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});