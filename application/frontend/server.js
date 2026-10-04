const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;
const BACKEND_URL = process.env.BACKEND_URL || "http://localhost:3001";

app.use(express.static(path.join(__dirname)));

app.get("/api-url", (req, res) => {
  res.json({
    backendUrl: BACKEND_URL
  });
});

app.listen(PORT, () => {
  console.log(`Frontend running on port ${PORT}`);
});