import mongoose from "mongoose";

let Users = new mongoose.Schema(
    {
        Email:
        {
            type:String,
            required:true
        },
        Password:
        {
            type:String,
            required:true
        },
        Date :
        {
            type:String
        }
});
let Schema = mongoose.model('tempusers',Users);
export default Schema;