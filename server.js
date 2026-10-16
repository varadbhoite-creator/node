
const express = require("express");

const app = express();
const PORT = 3000;

// Health Check API
app.get("/health", (req, res) => {
    res.status(200).json({
        status: "OK",
        message: "Server is running",
        timestamp: new Date().toISOString()
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server on http://localhost:${PORT}`);
});
