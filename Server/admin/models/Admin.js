import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const adminSchema = new Schema({

    Admin_ID : {
        type : String,
        required: true
    },
    Admin_Mail:{
        type:String,
    },
    Admin_Name : {
        type:String,
        required: true
    },

    Admin_Password :{
        type:String,
        required:true
    },


})

const Admin = mongoose.model("Admin",adminSchema);


export default Admin;