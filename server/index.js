// import app from "./app.js";
// import dotenv from "dotenv";

// dotenv.config({ path: ".env" });

import express from "express";
const app = express();
app.use("/", (req, res) => {
  res.send("server 5000");
});

app.listen(5000, () => {
  console.log(`Listening on PORT `);
});
