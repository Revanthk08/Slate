import mongoose from "mongoose";

let otpdb = new mongoose.Schema(
    {
        UserObjId:
        {
            type:String
        },
        EmailVerOtp:
        {
            type: String,
            required:true
        },
        date:
        {
            type:Number
        }
});
let Schema = mongoose.model('otp',otpdb);
export default Schema;