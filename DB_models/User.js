import mongoose from "mongoose";

let Users = new mongoose.Schema(
    {
        UserName:
        {
            type: String,
            required:true
        },
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
        EmailVerOtp :
        {
            type:String
        }
});
let Schema = mongoose.model('users',Users);
export default Schema;