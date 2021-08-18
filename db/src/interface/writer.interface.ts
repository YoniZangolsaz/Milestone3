import  mongoose from "mongoose";

export interface Iwriter{
    firstName:String,
    lastName:String,
    yearOfBirth:String,
    listOfBook:mongoose.Schema.Types.ObjectId[],
}
