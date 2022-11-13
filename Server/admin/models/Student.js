import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const studentSchema = new Schema({


    Student_ID : {
        type : String,
        required: true,
        unique: true
    },
    Student_Name : {
        type:String,
        required: true
    },
    Student_Gender :{
        type:String,
    },
    Student_Address :{
        type:String,
    },
    Parent_Telephone :{
        type:String,
        required:true
    },
    Student_Password:{
        type:String,
        required: true
    },
});

const Student = mongoose.model("Student",studentSchema);


export default Student;