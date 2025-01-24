const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(express.json());
app.use(cors());

const API_KEY = "wmOGQpXRp7SOS8KwcUeOlKSJt03w6wjt"; // Replace with your API Layer Key

app.post("/verifyemail", async (req, res) => {
    const { email } = req.body;

    if (!email) {
        return res.status(400).json({ error: "Email is required" });
    }
    console.log("hi")

    const url = `https://api.apilayer.com/email_verification/check?email=${email}`;

    try {
        const response = await axios.get(url, {
            headers: { "apikey": API_KEY }
        });

        return res.json( response.data );
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ error: "Failed to verify email" });
    }
});

app.listen(3001, () => {
    console.log("Server running on http://localhost:3000");
});
