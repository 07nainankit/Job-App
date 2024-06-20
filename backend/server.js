const express = require('express');
const app = express();
const dotenv = require('dotenv');

app.get("/", (req, res)=>{
    res.send("Api is running e ")
})

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`server started port ${PORT}`));

// removed from package.json -> scripts (start added) (for npm start instead of npm backend/server.js)
// "test": "echo \"Error: no test specified\" && exit 1"

// npm i nodemon (for not restarting server for changes)