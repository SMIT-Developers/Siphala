import express from "express";
const router = express.Router();
import Student from '../models/Student.js'
import Admin from "../models/Admin.js";
import Activity from "../models/Activity.js";
// let Student = require("../models/Student");
import Marks from "../models/Marks.js";
import marks from "../models/Marks.js";

router.route("/add").post(async (req, res) => {
    const Student_ID = req.body.Student_ID;
    const Student_Name = req.body.Student_Name;
    const Student_Gender = req.body.Student_Gender;
    const Student_Address = req.body.Student_Address;
    const Parent_Telephone = req.body.Parent_Telephone;
    const Student_Date = req.body.Student_Date;
    const Student_Password = req.body.Student_Password;


    const student = await Student.findOne(
        {Student_ID:req.body.Student_ID})

    if (student){
        res.json("Student id duplicate")
    }else {
        const newStudent = new Student({
            Student_ID,
            Student_Name,
            Student_Gender,
            Student_Address,
            Parent_Telephone,
            Student_Date,
            Student_Password

        })
        newStudent.save().then(() => {
            res.json("Student Added")
        }).catch((err) => {
            console.log(err);
        })
    }


})





router.route("/submit_activity").post(async (req, res) => {


     console.log(req.body)
    const Student_Id = req.body.Student_ID;
    const Submit_Date = req.body.Submit_Date;
    const Subject_Name = req.body.Subject_Name;
    const Activity_Name = req.body.Activity_Name;
    const Mark = req.body.Mark;
    const Highest_Marks = req.body.Highest_Marks;




        // console.log(Student_Id)
        const newMark = new Marks({
            Student_Id,
            Submit_Date,
            Subject_Name,
            Activity_Name,
            Mark,
            Highest_Marks

        })
        newMark.save().then(() => {
            res.json("Marks Added")
        }).catch((err) => {
            res.send({status:"ERROR", "error":err})
            console.log(err.message)
        })





})

router.route("/get_activity").post(async (req,res) =>{


    // console.log(req.body)
    const Student_ID = req.body.Student_ID;
    const Subject_Name = req.body.Subject_Name;
    const Activity_Name = req.body.Activity_Name;


    const result = await Marks.findOne({Student_Id:Student_ID, Subject_Name:Subject_Name, Activity_Name:Activity_Name})

    if(result){
        res.status(200).send({status:true, message:"Activity Already Submitted", data:{Mark:result.Mark,Highest_Marks:result.Highest_Marks}})
    }else{
        // result.catch((err) => {
        //     console.log(err);
        //     res.status(500).send({status: "Error get result, error: err.message"});
        // })
        res.status(200).send({ status:false, message:"Activity Not Submitted"});
    }


})

router.route("/update/:id").put(async (req,res) =>{

    let studentgenarateno = req.params.id;
    const {Student_ID, Student_Name, Student_Address, Parent_Telephone, Student_Date, Student_Password} = req.body;

    const updateStudent = {
        Student_ID,
        Student_Name,
        Student_Address,
        Parent_Telephone,
        Student_Date,
        Student_Password,
    }

    const update = await Student.findByIdAndUpdate(studentgenarateno, updateStudent).then(() =>{

        res.status(200).send({status: "Student updated"})
    }).catch((err) => {
        console.log(err);
        res.status(500).send({status: "Error with updating data", error: err.message});
    })

    console.log(update)
})

router.route("/delete/:id").delete(async (req,res) => {
    let studentgenarateno = req.params.id;

    const student =await Student.findByIdAndDelete(studentgenarateno)
        .then((student) => {
            // res.status(200).send({status: "Appointment deleted"});
            res.json(student);
        }).catch((err) => {
            console.log(err.message);
            res.status(500).send({status: "Error with delete student", error: err.message});

        })
})
 
 router.route("/get/:id").get(async(req,res) =>{
     let std_id = req.params.id;
     await Student.findOne({Student_ID: std_id})
     .then((student) => {
         //res.status(200).send({status: "Appointment fetched", appointment})
         res.json({status :true, student:student});
     }).catch((err) =>{
         console.log(err);
         res.status(500).send({status: "Error with get user", error: err.message});
         })
     })


export default router;