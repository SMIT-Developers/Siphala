import express, {json, response} from "express";
import bcrypt from 'bcryptjs';
import Admin from '../models/Admin.js'
import Notification from "../models/Notifications.js";
import Activity from "../models/Activity.js";


const router = express.Router();

//const Admin = mongoose.model("UserInfo");
//create funtion router
router.post("/registeradmin", async(req,res)=>{
    const {Admin_ID,Admin_Name,Admin_Mail,Admin_Password, Admin_Date}= req.body;


    try{
        const oldUser = await Admin.findOne({Admin_Mail:Admin_Mail});
        if(oldUser){
            // console.log(oldUser)
            return res.json({error: "Regiter already Exists"});
        }
            const r =await Admin.create({
                Admin_ID,
                Admin_Name,
                Admin_Mail,
                Admin_Password,
                Admin_Date

            });
            if(r){
                res.send({status: "OK"})
            }




    }catch(error){
        res.send({status:"ERROR"})
    }
});




router.route("/view").get((req,res)=>{
    Admin.find().then((student)=>{
        res.json(student)
    }).catch((err)=>{
        console.log(err)
    })
})


//notiifcaton add
router.route("/add_notification").get(async (req, res) => {

    const {Notification_Date, Notification_Message} = req.body;


    try {
        const oldNotifi = await Notification.findOne({
            Notification_Date: Notification_Date,
            Notification_Message: Notification_Message
        });
        if (oldNotifi) {
            return res.json({error: "Notification Available. Please try new one"});
        }

        await Notification.create({
            Notification_Date,
            Notification_Message,

        });
        res.send({status: "Notification added OK"})

    } catch (error) {
        res.send({status: "Notification npt added ERROR"})
    }
});

//notiifcaton view

router.route("/view_notifications").get(async (req, res) => {


    try {
        const LIMIT = 8;

        const posts = await Notification.find().sort({ _id: -1 }).limit(LIMIT);

        res.json({ status: true,data:posts} );
    } catch (error) {
        res.status(404).json({ message: error.message });
    }



});


//works
router.route("/add_activity").post(async (req, res) => {


    const Subject_Name = req.body.Subject_Name;
    const Activity_Name = req.body.Activity_Name;
    const Highest_Marks = req.body.Highest_Marks;

    try {
        const oldActivity = await Activity.findOne({Subject_Name: Subject_Name, Activity_Name: Activity_Name});
        if (oldActivity) {
            console.log(oldActivity)
            return res.json({error: "Activity already Exists"});
        }

        const r = await Activity.create({
            Subject_Name,
            Activity_Name,
            Highest_Marks,

        });

        if (r) {
            res.send({status: "OK"})
        }


    } catch (error) {
        res.send({status: "ERROR", message:error.message})

    }

});


    export default router;