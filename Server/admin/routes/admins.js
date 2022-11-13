import express from "express";
//import bcrypt from 'bcryptjs';
import Admin from '../models/Admin.js'


const router = express.Router();

//create funtion router
router.post("/add", async(req,res)=>{
    const  Admin_ID = req.body.Admin_ID;
    const  Admin_Name = req.body.Admin_Name;
    const  Admin_Mail = req.body.Admin_Mail;
    const  Admin_Password = req.body.Admin_Password;
    const  Admin_Date = req.body.Admin_Date;

    const newAdmin = new Admin({

        Admin_ID,
        Admin_Name,
        Admin_Mail,
        Admin_Password,
        Admin_Date,

    })
    newAdmin.save().then(() =>{
        res.json("Admin Added")
    }).catch((err) =>{
        console.log(err);
    })
})



router.route("/").get((req,res)=>{
    Admin.find().then((admin)=>{
        res.json(admin)
    }).catch((err)=>{
        console.log(err)
    })
})




export default router;