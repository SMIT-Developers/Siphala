import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const parentSchema = new Schema({

    Student_ID : {
        type : String,
        required: true,

    },
    Parent_ID : {
        type : String,
        required: true,

    },
    Parent_Email : {
        type : String,
        required: true,
        unique: true,
    },

    Parent_Name : {
        type:String,
        required: true
    },
    Parent_Type : {
        type:String,
        required: true
    },
    Parent_Occupation :{
        type:String,
    },
    Parent_Address :{
        type:String,
    },
    Parent_Telephone :{
        type:String,
        required:true
    },

    Parent_Password :{
        type:String,
    },


})

const Parent = mongoose.model("Parent",parentSchema);


export default Parent;