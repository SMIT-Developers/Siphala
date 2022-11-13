import React from "react";

function ParentsDetails() {


    let Student_Address=localStorage.getItem("Student_Address");
    let Parent_Mail=localStorage.getItem("Parent_Mail");
    let Parent_Name=localStorage.getItem("Parent_Name");
    let Parent_Telephone=localStorage.getItem("Parent_Telephone");
    return (
        <>
            <div className="form-group">
                <label htmlFor="exampleInputEmail1">Full Name</label>
                <input type="email" className="form-control" id="fullName" aria-describedby="emailHelp"
                       placeholder="Full name"
                       value={Parent_Name} disabled/>
            </div>


            <div className="form-row">
                <div className="form-group col-md-6">
                    <label >Occupation</label>
                    <input type="text" className="form-control" id="Occupation" placeholder="Occupation" value="Doctor" disabled   />
                </div>
            </div>

            <div className="form-row">
                <div className="form-group col-md-6">
                    <label >Contact Number</label>
                    <input type="tel" className="form-control" id="tel"  placeholder="Contact Number"  value={Parent_Telephone} disabled/>
                </div>
                <div className="form-group col-md-6">
                    <label >Email</label>
                    <input type="Email" className="form-control" id="email" placeholder="Email" value={Parent_Mail} disabled/>
                </div>
            </div>


        </>
    );

}

export default ParentsDetails;