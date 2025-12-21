import mongoose from "mongoose";
import { title } from "process";

const bookSchema=mongoose.Schema({
    name: String,
    price: Number,
    category:String,
    image: String,
    title:String
})

const Book=mongoose.model("Book", bookSchema);

export default Book;