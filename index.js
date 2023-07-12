require('dotenv').config();
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
import UserColl from 'DB_models/User';




app.get('/', (req, res) => {
    res.send("Working");
})

app.get('/backend', Auth, (req, res) => {

    res.send("Hello from "+req.user.UserName);
})

//LoginStart
app.post('/SignIn', Auth, async (req,res)=>
{
    let username = req.body.username;
    let resultUser = await UserColl.find({UserName:username});
    if(resultUser===null)
    {
        //return No user found try again
    }
    let decryptPass= jwt.verify(resultUser.Password,process.env.PASSWORD_SALT);
    if(req.body.password === decryptPass)
    {
        res.cookie('token',jwt.sign(resultUser._id, process.env.ACCESS_TOKEN, {expiresIn:'48h'}),{httpOnly:true});
        //SignIn User Redirect HomePage
    }
})
//LoginEnd

app.post('/SignUp', async (req,res)=>
{
    //UserNameCheck
    let usersname = req.body.userName;
    let result = await UserColl.find({UserName:usersname});
    if(result===null)
    {
        //return to try again username taken
    }

    let user = new UserColl({
        UserName : req.body.userName,
        Email : req.body.email,
        Password : jwt.sign(req.body.password,process.env.PASSWORD_SALT)
    })
    let userSaved = await UserColl.save(user);
    res.cookie('token',jwt.sign(userSaved._id, process.env.ACCESS_TOKEN, {expiresIn:'48h'}),{httpOnly:true});

    //return to Homepage;
    //res.redirect();
})

async function Auth(req,res,next)
{
    try
    {
        let UserId = jwt.verify(req.cookies.token,process.env.ACCESS_TOKEN);
        let user = await UserColl.findById(UserId);
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
        //Error in Autherization Re-Login
    }
}

app.listen(8080, () => {
    console.log("Server is running on PORT 8080");
})