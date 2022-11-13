import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const notificationSchema = new Schema({


    Notification_Date : {
        type : String,
        required: true,

    },
    Notification_Message : {
        type:String,
        required: true
    },

});

const Notification = mongoose.model("Notification",notificationSchema);


export default Notification;