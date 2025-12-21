import express from "express"
import mongoose from "mongoose";
import dotenv from "dotenv"
import cors from "cors";

import bookRoute from "./route/book.route.js"
import userRoute from "./route/user.route.js"


const app=express()

app.use(cors());

dotenv.config();
app.use(express.json())

const PORT=process.env.PORT || 4000;
const URI=process.env.MongoDBURI
//connect to mongoddb
mongoose.connect(URI)
  .then(() => console.log("connected to mongodb"))
  .catch(error => console.log("mongodb error:", error))


//defining routes
app.use("/book", bookRoute);
app.use("/user",userRoute);

app.listen(PORT, ()=>{
    console.log(`example app listening on PORT ${PORT}`)
})