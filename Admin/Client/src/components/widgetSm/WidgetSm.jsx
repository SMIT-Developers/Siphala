import "./widgetSm.css";
// import { Visibility } from "@material-ui/icons";
import Button from 'react-bootstrap/Button';




export default function WidgetSm() {
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Students</span>
      <ul className="widgetSmList">
        <li className="widgetSmListItem">
         
        
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Ruwan sampath</span>
            {/* <span className="widgetSmUserTitle">Software Engineer</span> */}
          </div>
          
          <Button variant="light" href="/showStudents/1" >View Information</Button>
          

          {/* <Link to="/showMarks/" >
     <Button variant="contained" color="secondary" href="/showMarks/Id/">
     Show Marks
    </Button>
    </Lin */}




          {/* <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button> */}
        </li>
        <li className="widgetSmListItem">
          {/* <img
            src="https://images.pond5.com/sri-lankan-children-school-uniform-footage-039980832_iconl.jpeg"
            alt=""
            className="widgetSmImg"
          /> */}



          <div className="widgetSmUser">
            <span className="widgetSmUsername">Lahiru kumara</span>
            {/* <span className="widgetSmUserTitle">Software Engineer</span> */}
          </div>
          <Button variant="light" href="/showStudents/1">View Information</Button>
        </li>



        <li className="widgetSmListItem">
          {/* <img
            src="https://www.unicef.org/srilanka/sites/unicef.org.srilanka/files/styles/large/public/2018-11/Earl%20Jayasuriya%20304.jpg?itok=qqBcOthN"
            alt=""
            className="widgetSmImg"
          /> */}
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Warna gamage</span>
            {/* <span className="widgetSmUserTitle">Software Engineer</span> */}
          </div>
          <Button variant="light" href="/showStudents/1">View Information</Button>
        </li>


        
        <li className="widgetSmListItem">
          {/* <img
            src="https://live.staticflickr.com/2679/4475564336_55d399f757_b.jpg"
            alt=""
            className="widgetSmImg"
          /> */}
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Malsha peris</span>
            {/* <span className="widgetSmUserTitle">Software Engineer</span> */}
          </div>
          <Button variant="light" href="/showStudents/1">View Information</Button>
        </li>


        <li className="widgetSmListItem">
          {/* <img
            src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
            className="widgetSmImg"
          /> */}
          {/* <div className="widgetSmUser">
            <span className="widgetSmUsername">Kasuni sadamali</span>
            {/* <span className="widgetSmUserTitle">Software Engineer</span> */}
          {/* </div> */} 
          {/* <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button> */}
        </li>
      </ul>
    </div>
  );
}
