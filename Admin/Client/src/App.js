import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./App.css";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";

import Maths from "./pages/maths/Maths";
import English from "./pages/english/English";
import Religion from "./pages/religion/Religion";
import EnviromentStudy from "./pages/environmentStudy/EnvironmentStudy";
import Parents from "./pages/parents/Parents";
import EditMarks from "./pages/editMarks/EditMarks";
import Reports from "./pages/reports/Reports";
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import ShowMarks from "./pages/showMarks/ShowMarks";
import UploadActivity from "./pages/uploadActivity/UploadActivity";
import AddStudents from "./pages/addStudents/AddStudents";
import AddParents from "./pages/addParents/AddParents";
// import ViewParents from "./pages/viewParents/ViewParents";
import ShowParents from './pages/showParents/ShowParents';
import ShowStudents from './pages/showStudents/ShowStudents';
// import SendEmail from './pages/sendMail/SendMail';
import SendEmail from './pages/sendEmail/SendEmail';
import Mail from './pages/mail/Mail';
import TeachInfor from './pages/teachInfor/TeachInfor'
// import Register from './Register';

// import AdminLogin from "./AdminLogin/AdminLogin";

function App() {
  return (
    <Router>
       <div className="row">

        <div className="col-12">
        <Topbar />
        </div>

  
      </div>

      <div className="row">

        <div className="col-2">
        <Sidebar />
        </div>

        <div className="col-10">

        <Switch>



            <Route exact path="/">
                <Home />
            </Route>

         <Route path="/users">
           <UserList />
         </Route>

         <Route path="/user/:userId">
           <User />
         </Route>

         <Route path="/newUser">
           <NewUser />
         </Route>

         <Route path="/pages/parents">
           <Parents />
         </Route>



         <Route path="/pages/maths">
           <Maths />
         </Route>

         <Route path="/pages/maths">
           <Maths />
         </Route>

         <Route path="/pages/english">
           <English />
         </Route>

         <Route path="/pages/religion">
           <Religion />
         </Route>

         <Route path="/pages/environmentStudy">
           <EnviromentStudy />
         </Route>

         <Route path="/editMarks">
           <Maths />
         </Route>

         <Route path="/editMarks/:markId">
           <EditMarks />
         </Route>

         
         <Route path="/editMarks/:markId">
           <EditMarks />
         </Route>

         <Route path="/pages/reports">
           <Reports />
         </Route>



         <Route path="/pages/teachInfor">
           <TeachInfor />
         </Route>

         <Route path="/showMarks">
           <ShowMarks />
         </Route>

         <Route path="/showMarks/:showMarksId">
           <ShowMarks/>
         </Route>

         <Route path="/uploadActivity">
           <UploadActivity />
         </Route>

         <Route path="/uploadActivity/:uploadActivityId">
           <UploadActivity/>
         </Route>

         <Route path="/addStudents">
           <AddStudents />
         </Route>

         <Route path="/addStudents/:AddStudentsId">
           <AddStudents/>
         </Route>

         <Route path="/addParents">
           <AddParents />
         </Route>

         <Route path="/addParents/:AddParentsId">
           <AddParents/>
         </Route>


         {/* <Route path="/viewParents">
           <AddParents />
         </Route>

         <Route path="/viewParents/:ViewParentsId">
           <AddParents/>
         </Route> */}

          <Route path="/showParents">
           <ShowParents />
          </Route>

          <Route path="/showParents/:ShowParentsId">
           <ShowParents/>
          </Route>

          <Route path="/showStudents">
           <ShowStudents />
          </Route>

          <Route path="/showStudents/:ShowStudentsId">
           <ShowStudents/>
          </Route>



          <Route path="/sendEmail">
           <sendEmail />
          </Route>

          <Route path="/sendEmail/:SendEmailId">
           <SendEmail/>
          </Route>


          <Route path="/mail">
           <Mail />
         </Route>

         <Route path="/mail/:MailId">
           <Mail/>
         </Route>

         {/* <Route path="Register">
           <Register />
         </Route> */}

















         
         
       </Switch>
       

  
        </div>
      </div>
    
      
    </Router>
  );
}

export default App;
