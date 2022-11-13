import "./addStudents.css";
// import Button from 'react-bootstrap/Button';
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';



export default function AddStudents() {
  return (

    
    <div className="AddStudents">
       <h1 className="addStudentTitle">Add students</h1>
       <form className="addStudentsForm">

        <div className="addStudentsItem">
        <label>Student index number</label>
        <input type="text" placeholder="Nimal" />
        </div>
        <div className="addStudentsItem">
        <label> Student full Name</label>
        <input type="text" placeholder="Nimal Perera" />
        </div>
         <div className="addStudentsItem">
        <label>Parent's email</label>
        <input type="email" placeholder="nimal@gmail.com" />
        </div>
        <div className="addStudentsItem">
        <label>Password</label>
        <input type="password" placeholder="password" />
        </div>
       <div className="addStudentsItem">
        <label>Parent's phone no</label>
        <input type="text" placeholder="+71 2123 456" />
      </div>
     
      <div className="addStudentsItem">
        <label>Gender</label>
        <div className="newStudentGender">
          <input type="radio" name="gender" id="male" value="male" />
          <label for="male">Male</label>
          <input type="radio" name="gender" id="female" value="female" />
          <label for="female">Female</label>
         </div>
      </div>
      
    </form> 
   
     <br></br>
    <br></br>
    <br></br>
    <br></br>
    



    <div className="AddParents">
    <h1 className="addParentsTitle">Add Parents</h1>
     <form className="addParentsForm">
      <div className="addParentsItem">
         <label>Parent user name</label>
        <input type="text" placeholder="Siripala" />
      </div>
      

       <div className="addParentsItem">
       <label>Email</label>
       <input type="email" placeholder="Siripala@gmail.com" />
     </div>
      <div className="addParentsItem">
        <label>Password</label>
        <input type="password" placeholder="password" />
     </div>
      <div className="addParentsItem">
         <label>Phone no</label>
        <input type="text" placeholder="+71 2123 456" />
      </div>
      
       <div>

       <div className="button">
          <div><button className="AddButton">Add</button></div>
      
             
         </div>
       
             
              </div>
     
     </form>

    </div>
   </div>

    );

}
