import React, { useEffect, useState } from 'react';
import axios from "axios";
import jwt from "jsonwebtoken";

 function StudentAccDetails(user) {


        let Parent_Telephone=localStorage.getItem("Parent_Telephone");
        let Student_ID=localStorage.getItem("std_id")
     let Student_Address=localStorage.getItem("Student_Address")
        let Student_Name=localStorage.getItem("Student_Name")
        let Parent_Name=localStorage.getItem("Parent_Name")




    return (
        <div className='main-div-class'>
            <div className='form-row row-col-md-6'>


                    <label htmlFor='exampleInputEmail1'>Full Name</label>
                    <input type='email' className='form-control' id='fullName' aria-describedby='emailHelp'
                           placeholder='Full name'
                           value={Student_Name}
                           disabled/>

            </div>

            <div className='form-row row-col-md-6'>

                    <label>Guardian Name</label>
                    <input type='text' className='form-control' id='PName' placeholder='Guardian Name'
                           value={Parent_Name}
                           disabled/>

            </div>

            <div className='form-row row-col-md-6'>

                    <label>Gender</label>
                    <input type='text' className='form-control' id='gender' placeholder='Gender'
                           value="Male" disabled/>

            </div>

            <div className='form-row row-col-md-6'>
                <label htmlFor='exampleInputEmail1'>Address</label>
                <input type='email' className='form-control' id='fullName' placeholder='Address'
                       value={Student_Address}
                       disabled/>
            </div>

            <div className='form-row row-col-md-6'>


                    <label>Emergency Contact Number</label>
                    <input type='text' className='form-control' id='dob' placeholder='Emergency Contact Number'
                           value={Parent_Telephone}
                           disabled/>

            </div>
        </div>
    );
}

export default StudentAccDetails;
