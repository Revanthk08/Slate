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
        }    
});
let Schema = mongoose.model('SlateDb',Users);
export default Schema;