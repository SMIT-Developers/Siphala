import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import studentRouter from './routes/students.js';
import adminloginRouter from './routes/AdminLogins.js';
import adminRouter from './routes/admins.js'
import parentRouter from './routes/parent.js';


import auth from './middleware/auth.js'

import studentLoginsRouter from './routes/StudentLogins.js';
import jwt from "jsonwebtoken";
import Student from "./models/Student.js";
import Parent from "./models/Parent.js";
import Notification from "./models/Notifications.js"

import bcrypt from "bcryptjs";
import Admin from "./models/Admin.js";
import router from "./routes/AdminLogins.js";
import Marks from "./models/Marks.js";
const app = express();


const PORT = process.env.PORT || 8070;

app.use(cors());
app.use(bodyParser.json());


const URL = process.env.MONGODB_URL;
const uri= "mongodb+srv://admin:admin123@project01.sjuznia.mongodb.net/admin_db?retryWrites=true&w=majority"
mongoose.connect(uri, {
   /* useCreateIndex: true,*/
    useNewUrlParser: true,
    useUnifiedTopology: true,
    /*useFindAndModify: false*/

});

mongoose.connection.once("open", () => {
    console.log("Mongodb Connection made successfully");
}) 

// const studentRouter=require("./routes/students.js");
app.use("/student",studentRouter);

// const adminloginRouter=require("./routes/adminlogin.js");
app.use("/admin",adminloginRouter);

app.use("/parent",parentRouter);

app.listen(PORT, () => {
    console.log('Server is up and running on port number' , +PORT);
})

//app.use("/user",studentLoginsRouter);

app.post('/user/student_login', async (req, res) => {
    console.log(req.body)


    const user = await Student.findOne(
            { Student_ID: req.body.studentUsername,
                Student_Password:req.body.studentpassword
            })

    // console.log(user)


    if(user){

        const parent =await  Parent.findOne(
            {Student_ID: user.Student_ID}
        )

        // console.log(parent)
        const token =jwt.sign({
            std_id: user._id,

        },'secret123',)
        // return res.json({status:'ok', student:token})
        return res.json({status:'ok', student:token,std_id:user.Student_ID,Student_Name:user.Student_Name, Student_Address:user.Student_Address,Parent_Name: parent.Parent_Name,Parent_Telephone:parent.Parent_Telephone,
        })
    }else {
        return res.json({status:'error', student:false})
    }

})

app.post('/user/parent_login', async (req, res) => {
    //  console.log(req.body)


    const user = await Parent.findOne(
        { Parent_Mail: req.body.parentEmail,
            Parent_Password:req.body.parentPassword
        })

    // console.log(user)

    if(user){

        const student = await Student.findOne(
            { Student_ID: user.Student_ID,
            })
        
            // console.log(student)

        const token =jwt.sign({
            prt_id: user._id,
        },'secret123')

        // console.log(token)
        return res.json({status:'ok', prt_id:token,std_id:student.Student_ID,Student_Name:student.Student_Name,
            Student_Address:student.Student_Address,Parent_Name: user.Parent_Name,Parent_Telephone:user.Parent_Telephone,
            Parent_Mail:req.body.parentEmail})


    }else {
        return res.json({status:'error', parent:false})
    }

})

app.post('/user/admin_login', async (req, res) => {
    console.log(req.body)


    const user = await Admin.findOne(
        { Admin_Mail: req.body.email,
            Admin_Password:req.body.pw
        })


    // console.log(user)

    if(user){

        const token =jwt.sign({
            admin: user._id,
        },'secret123')
        // console.log(token)
        return res.json({status:'ok', admin:token})


    }else {
        return res.json({status:'error', admin:false})
    }

})

app.post("/home", auth, (req, res) => {
    res.status(200).send("Welcome 🙌 ");
});


//student


app.get('/user/student/:id', async (req, res) => {
    // console.log(req.body)

    let studentId = req.params.id;
    // console.log(studentId)
    const user = await Student.findOne(
        { _id: studentId }
    )
    const parent =await  Parent.findOne(
        {Student_ID: user.Student_ID}

    )
        // console.log(user)
    if(user){


        return res.json({status:'ok', std_id:user.Student_ID,Student_Name:user.Student_Name, Student_Address:user.Student_Address,Parent_Name: parent.Parent_Name,Parent_Telephone:parent.Parent_Telephone,
        })
    }else {
        return res.json({status:'error', student:false})
    }

})


