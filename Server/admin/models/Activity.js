

import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const activitySchema = new Schema({


    Subject_Name : {
        type : String,
        required: true,

    },
    Activity_Name : {
        type:String,
        required: true
    },
    Highest_Marks :{
        type:String,
        required:true
    },

});

const Activity = mongoose.model("Activity",activitySchema);


export default Activity;