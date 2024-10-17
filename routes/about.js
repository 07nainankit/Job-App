const path = require('path');
const router = require('express').Router();

// About route to serve the React app
router.get("/about", async (req, res) => {
  res.sendFile(path.join(__dirname, "../build/index.html")); // Adjust the path if needed
});

module.exports = router;
