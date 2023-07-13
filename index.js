import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import cors from 'cors';
import jwt from 'jsonwebtoken';
import cookieParser from 'cookie-parser';
import mongoose from 'mongoose';

const app = express();
app.use(cors());
app.use(express.json());
app.use(cookieParser());

mongoose.Promise = global.Promise;
mongoose.connect(process.env.DATABASE_LINK, {useNewUrlParser : true});
let db = mongoose.connection;
db.on('open',()=>console.log("DB Connected"));

import UserColl from './DB_models/User.js';


app.get('/', (req, res) => {
    res.send("Working");
})

app.get('/backend', Auth, (req, res) => {

    res.send("Hello from "+req.user.UserName);
})

//LoginStart
app.post('/LogIn', Auth, async (req,res)=>
{
    let emailId = req.body.emailId;
    let resultUser = await UserColl.find({Email:emailId});
    if(resultUser===null)
    {
        console.log("No User Exists!");
        //return No user found try again
    }
    let decryptPass= jwt.verify(resultUser[0].Password,process.env.PASSWORD_SALT);
    if(req.body.password === decryptPass.password)
    {
        console.log("LoggedIn");
        res.cookie('token',jwt.sign({'userId':resultUser._id}, process.env.ACCESS_TOKEN),{httpOnly:true});
        res.sendStatus(201);
    }
})
//LoginEnd

app.post('/SignUp',Auth, async (req,res)=>
{
    let user = new UserColl({
        UserName : "temp",
        Email : req.body.emailId,
        Password : jwt.sign({'password':req.body.password},process.env.PASSWORD_SALT)
    });
    let userSaved = await UserColl.create(user);
    let token = jwt.sign({'userId':userSaved._id }, process.env.ACCESS_TOKEN);
    res.cookie('token',token,{httpOnly:true});
    res.sendStatus(201);
})

async function Auth(req,res,next)
{
    try
    {
        if(req.cookie.token===null){ /* return */ next();}
        let UserId = jwt.verify(req.cookies.token,process.env.ACCESS_TOKEN);
        let user =await UserColl.findById(UserId);
        if(user !=null)
        {
            req.user = user
            //redirect
        }
        else
        {
            next();
        }
    }
    catch{
        console.log("Auth-error");
        next();
        //Error in Autherization
    }
}

app.listen(8080, () => {
    console.log("Server is running on PORT 8080");
})