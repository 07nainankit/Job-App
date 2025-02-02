const express = require("express");
const app = express();
const cors = require("cors");

require("./conn/conn"); // database connected 

const path = require("path");
const auth = require("./routes/auth");
const list = require("./routes/list");

// const about = require("./routes/about");

app.use(express.json());
app.use(cors());

app.use("/api/v1", auth);
app.use("/api/v2", list);

// app.use("/api/v3", about);

app.get("/", (req, res) => {
  app.use(express.static(path.resolve(__dirname, "frontend", "build")));
  res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
});

app.get("/about", (req, res) => {
  app.use(express.static(path.resolve(__dirname, "frontend", "build")));
  res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
});

app.get("/todo", (req, res) => {
  app.use(express.static(path.resolve(__dirname, "frontend", "build")));
  res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
});

app.get("/signin", (req, res) => {
  app.use(express.static(path.resolve(__dirname, "frontend", "build")));
  res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
});

app.get("/signup", (req, res) => {
  app.use(express.static(path.resolve(__dirname, "frontend", "build")));
  res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
});

app.listen(1000, () => {
  console.log("Server Started  !!!");
}); 
