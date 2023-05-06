const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(express.json());
app.use(cors({ origin:true }))

app.post("/authenticate", async (req, res) => {
    const { username } = req.body;

    try {
        const response = await axios.put("https://api.chatengine.io/users/",
        {username: username, secret: username, first_name: username},
        {headers: {"private-key": "545ffe7f-bf53-42b1-bbaa-5fbbf8eca956"}}
        )
        return res.status(response.status).json(response.data);
    } catch (error) {
        return res.status(error.response.status).json(error.response.data);
    }
});

app.listen(3001);