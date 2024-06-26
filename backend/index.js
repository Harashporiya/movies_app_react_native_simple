const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const UserRouter = require("./route/user");
const marvelMovies = require("./Marvel_Movies.json");
const DcMovies = require("./Dc_movies.json")
const app = express();
const PORT = 5000;


mongoose.connect("mongodb://127.0.0.1:27017/registered", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.error("MongoDB connection error:", err));


app.get("/marvel", async(req,res)=>{
  return res.json(marvelMovies);
})

app.get("/dc",async(req,res)=>{
  return res.json(DcMovies);
})

app.use(cors());
app.use(express.json());
app.use("/user", UserRouter);


app.listen(PORT, '0.0.0.0', () => console.log(`Server Started At PORT ${PORT}`));
