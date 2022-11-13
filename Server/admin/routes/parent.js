import express from "express";
const router = express.Router();
import Student from '../models/Student.js'
import Admin from "../models/Admin.js";
import Activity from "../models/Activity.js";
// let Student = require("../models/Student");
import Marks from "../models/Marks.js";
import Notification from "../models/Notifications.js";
import Parent from "../models/Parent.js";

router.route("/add").post(async (req, res) => {
    const Student_ID = req.body.Student_ID;
    const Parent_ID = req.body.Parent_ID;
    const Parent_Email = req.body.Parent_Email;
    const Parent_Name = req.body.Parent_Name;
    const Parent_Type = req.body.Parent_Type;
    const Parent_Occupation = req.body.Parent_Occupation;
    const Parent_Address = req.body.Student_Address;
    const Parent_Telephone = req.body.Parent_Telephone;
    const Parent_Password = req.body.Parent_Password;


    const parent = await Parent.findOne(
        {Parent_ID:req.body.Parent_ID})

    if (parent){
        res.json("Parent Is Duplicate")
    }else {
        const newStudent = new Parent({
            Student_ID,
            Parent_ID,
            Parent_Email,
            Parent_Name,
            Parent_Type,
            Parent_Occupation,
            Parent_Address,
            Parent_Telephone,
            Parent_Password

        })
        newStudent.save().then(() => {
            res.json("Parent Added")
        }).catch((err) => {
            console.log(err);
        })
    }


})
router.route("/viewProgress/:subject").post( async (req, res) => {

    ///:subject
    const Subject_Name = req.params.subject;
    const Student_ID = req.body.Student_ID;
    // console.log(req.body)
    // console.log(Subject_Name)


    try {
        const LIMIT = 8;

        const marks = await Marks.find({Student_Id:Student_ID,Subject_Name:Subject_Name}).limit(LIMIT);

        res.json({ status: true,data:marks} );
    } catch (error) {
        res.status(404).json({ message: error.message });
    }

})



export default router;