

import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const markSchema = new Schema({


    Student_Id : {
        type : String,
        required: true,
    },
    Submit_Date : {
        type : String,

    },
    Subject_Name : {
        type : String,
        required: true,
    },
    Activity_Name : {
        type:String,
        required: true
    },
    Mark :{
        type:String,
        required: true
    },
    Highest_Marks :{
        type:String,
        required:true
    },

});

const Marks = mongoose.model("Marks",markSchema);


export default Marks;