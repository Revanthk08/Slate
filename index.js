import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import cors from 'cors';
import jwt from 'jsonwebtoken';
import cookieParser from 'cookie-parser';
import mongoose from 'mongoose';
import nodemailer from 'nodemailer';

const app = express();
app.use(cors({origin:'http://localhost:3000',credentials:true}));
app.use(express.json());
app.use(cookieParser());

mongoose.Promise = global.Promise;
mongoose.connect(process.env.DATABASE_LINK, {useNewUrlParser : true});
let db = mongoose.connection;
db.on('open',()=>console.log("DB Connected"));

import UserColl from './DB_models/User.js';
import otpDb from './DB_models/OTP.js';

app.get('/', (req, res) => {
    res.send("Working");
})

app.get('/backend', Auth, (req, res) => {

    res.send("Hello from "+req.user.UserName);
})

let transporter = nodemailer.createTransport({
    service:"hotmail",
    auth:{
        user:process.env.MAILID,
        pass:process.env.MAIL_PASS
    }
});

app.post('/sendOTPmail',Auth,async (req,res)=>
{
    
    let OTP = (Date.now().toString()).slice(6,13);
    let d = Date();
    if(await otpDb.find({_id:req.user._id}).length !=0)
    {
        await otpDb.findByIdAndUpdate({UserObjId:req.user._id},{$set:{EmailVerOtp:OTP,date:d.getUTCDate()}},()=>console.log("OTP Set Success")); 
    }
    else{
        let newotp = new otpDb(
        {
            UserObjId:req.user._id,
            EmailVerOtp:OTP,
            date:d.getUTCDate()
        });
        await otpDb.create(newotp);
    }
    let response = UserColl.find({_id:req.user._id});
    let mail = {
        from: process.env.MAILID,
        to:response.Email,
        subject: "OTP for email verification",
        text:"Your OTP is "+OTP+". Use this to create your account."
    }
    transporter.sendMail(mail,()=>console.log("Mail Event Done"));
    //mail Sending logic
    otpDb.deleteMany({date:{$ne:d.getUTCDate()}});

    res.sendstatus(201);
})

app.get('/VerifyOTP', Auth, async (req,res)=>
{
    let response = await otpDb.find({UserObjId:req.user._id});
    if((response.EmailVerOtp).toString()==req.body.otp)
    {
        //User Verified redirect to UserName Page
    }
    else{
        //Wrong OTP try again
    }
})

app.post('/AuthUser', Auth, (req,res)=>
{
    res.json({'UserExist':req.UserAvailable});
})

app.post('/VerifyUserEmail',async (req,res)=>
{
    let resultUser = await UserColl.find({Email:req.body.emailId})
    (resultUser!=null)? res.json({'UserAvailable':true}).sendStatus(201):res.json({'UserAvailable':false});
})

//LoginStart
app.post('/LogIn', async (req,res)=>
{
    let emailId = req.body.emailId;
    let resultUser = await UserColl.find({Email:emailId});

    let decryptPass= jwt.verify(resultUser[0].Password,process.env.PASSWORD_SALT);
    if(req.body.password === decryptPass.password)
    {
        console.log("LoggedIn");
        res.cookie('token',jwt.sign({'userId':resultUser._id}, process.env.ACCESS_TOKEN),{httpOnly:true});
        res.sendStatus(201);
    }
})
//LoginEnd

app.post('/SignUp', async (req,res)=>
{
    let user = new UserColl({
        UserName : "temp",
        Email : req.body.emailId,
        Password : jwt.sign({'password':req.body.password},process.env.PASSWORD_SALT)
    });
    let userSaved = await UserColl.create(user);
    let token = jwt.sign({'userId':userSaved._id}, process.env.ACCESS_TOKEN);
    res.status(201).json({'token':token});
})

async function Auth(req,res,next)
{
    try
    {
        console.log(req.cookies);
        if(req.cookies.token===null){ /* return */ next();}
        console.log('Hel');
        let UserId = jwt.verify(req.cookies.token,process.env.ACCESS_TOKEN);
        console.log(UserId.userId+" fnha");
        let user =await UserColl.findById({_id:UserId.userId});
        if(user !=null)
        {
            req.user = user;
            console.log(req.user);
            req.UserAvailable = true;
            next();
            //redirect
        }
        else
        { req.UserAvailable = false; next();}
    }
    catch{
        console.log("Auth-error");
        req.UserAvailable = false;
        next();
        //Error in Autherization
    }
}

app.listen(8080, () => {
    console.log("Server is running on PORT 8080");
})