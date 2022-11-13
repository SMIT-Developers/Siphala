import React from "react";
import {useState} from "react";


function StudentDetails() {


    // let Student_Name=localStorage.getItem("Student_Name");
    //
    // let Parent_Name=localStorage.getItem("Parent_Name");
    // let Parent_Telephone=localStorage.getItem("Parent_Telephone");

    let Student_ID = localStorage.getItem("std_id");

    const [name, setName] =useState('Sadun Nisssanka');
    const [gender, setGender] =useState('Male');
    const [address, setAdress] =useState('23/34 A, Gangodawila, kandy');
    const [contact, setContact] =useState('0718291019');


    async function getData(){

        let url = `http://localhost:8070/student/get/${Student_ID}`

        console.log(url)

        const response = await fetch(url, {
            method: 'GET',

        })

        const getData = await response.json()
        console.log(getData)


            if(getData.status){
                // console.log("change marks")
                // console.log(getData.data.Mark)
                setName(getData.student.Student_Name)
                setGender(getData.student.Student_Gender)
                setAdress(getData.student.Student_Address)
                setContact(getData.student.Parent_Telephone)

            }

        }
    return (
        <div className="main-div-class" onLoad={getData}>
            <div className="form-group form-row">
                <label htmlFor="exampleInputEmail1">Full Name</label>
                <input type="email" className="form-control" id="fullName" aria-describedby="emailHelp"
                       placeholder="Full name" value={name} disabled/>
            </div>




            <div className="form-group form-row">


                    <label >Gender</label>
                    <input type="text" className="form-control" id="gender" placeholder="Gender" value={gender} disabled/>

            </div>

            <div className="form-group form row ">
                <label >Address</label>
                <input type="email" className="form-control" id="fullName"
                       placeholder="Address" value={address} disabled/>
            </div>

            <div className="form-row form-group ">


                    <label >Emergency Contact Number</label>
                    <input type="text" className="form-control" id="dob"  placeholder="Emergency Contact Number"  value={contact} disabled/>

            </div>

        </div>
    );

}

export default StudentDetails;