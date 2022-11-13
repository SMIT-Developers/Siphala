import "./sidebar.css";
import {
  LineStyle,
  // Timeline,
  // TrendingUp,
  PermIdentity,
  // GroupAdd,
  // Person,
  // PersonAdd,
  // LocalLibrary,
  // AttachMoney,
  BarChart,
  // MailOutline,
  // DynamicFeed,
  // ChatBubbleOutline,
  Functions,
  // Language,
  Landscape,
  Apartment,
  Explicit,

} from "@material-ui/icons";
import { Link } from "react-router-dom";






// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';

export default function Sidebar() {


  return (

  
        
        <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle text-center">Dashboard</h3>
          <ul className="sidebarList">
            <Link to="/" className="link">
            <li className="sidebarListItem ">
              <LineStyle className="sidebarIcon" />
              Home
            </li>
            </Link>
     
            <Link to="/users" className="link">
              <li className="sidebarListItem">
                <PermIdentity className="sidebarIcon" />
                Students
              </li>
            </Link>

            <Link to="/pages/reports" className="link">
            <li className="sidebarListItem">
              <BarChart className="sidebarIcon" />
              Reports
            </li>
            </Link>
          </ul>
        </div>
        {/* <div className="sidebarMenu">
          <h3 className="sidebarTitle">Notifications</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <MailOutline className="sidebarIcon" />
              Mail
            </li>
            <li className="sidebarListItem">
              <DynamicFeed className="sidebarIcon" />
              Feedback
            </li>
            <li className="sidebarListItem">
              <ChatBubbleOutline className="sidebarIcon" />
              Messages
            </li>
          </ul>
        </div> */}

        <div className="sidebarMenu">
          <h3 className="sidebarTitle text-center">Subjects</h3>
          <ul className="sidebarList">


          <Link to="/pages/maths" className="link">
            <li className="sidebarListItem">
              <Functions className="sidebarIcon" />
              Maths
            </li>
            </Link>

            
            {/* <li className="sidebarListItem">
              <Language className="sidebarIcon" />
              Language
            </li> */}



            {/* <Link to="/pages/environmentStudy" className="link">
            <li className="sidebarListItem">
              <Landscape className="sidebarIcon" />
              Environmental Study
            </li>
            </Link> */}
            

            <Link to="/pages/religion" className="link">
            <li className="sidebarListItem">
              <Apartment className="sidebarIcon" />
              Religion
            </li>
            </Link>

            <Link to="/pages/english" className="link">
            <li className="sidebarListItem">
              <Explicit className="sidebarIcon" />
              English
            </li>
            </Link>


            <Link to="/pages/environmentStudy" className="link">
            <li className="sidebarListItem">
              <Landscape className="sidebarIcon" />
              Environmental Studies
            </li>
            </Link>


          </ul>
        </div>

        <div className="sidebarMenu">
          <h3 className="sidebarTitle text-center">Accounts</h3>
          <ul className="sidebarList">
          <Link to="/pages/teachInfor" className="link">
              <li className="sidebarListItem">
                <PermIdentity className="sidebarIcon" />
                My Account
              </li>
            </Link>
           
     
           
          </ul>
        </div>
      </div>
    </div>
   
  );
}
