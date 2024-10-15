const mongoose = require("mongoose");

const conn = async (req, res) => {
  try {
    await mongoose
      .connect(
        "mongodb+srv://anain829:acrzBEVN50BmYDjK@cluster0.3lgirke.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
      )
      .then(() => {
        console.log("Connected :>");
      });
  } catch (error) {
    console.log(error);
  }
};
conn(); 