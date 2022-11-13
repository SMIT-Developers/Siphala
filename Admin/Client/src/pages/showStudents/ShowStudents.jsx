
import {
    
    LocationSearching,
    MailOutline,
    PhoneAndroid,
    
    // Publish,
  } from "@material-ui/icons";
//   import { Link } from "react-router-dom";
  import "./showStudents.css";

 
  import SchoolIcon from '@material-ui/icons/School';
  import WcIcon from '@material-ui/icons/Wc';
  import VpnKeyIcon from '@material-ui/icons/VpnKey';
  import PersonIcon from '@material-ui/icons/Person';

 


export default function ShowStudents() {


  async function getData() {

    let Student_ID= "1A001"
    let url = `http://localhost:8070/student/get/${Student_ID}`
    const response = await fetch(url, {
      method: 'GET',
    })
    const res = await response.json()

    console.log(res)
  }


  return (

    <div className="" onLoad={getData}>
      <h1 className="stTitle">Student details</h1>
    <div className="">
  
    </div>
    <div className="stContainer">
    <form className="sform">
      <div className="stShow">
        <div className="stShowTop">
          
          <div className="stShowTopTitle">
            <span className="stShowUsername">Ruwan Sampath</span>
            
          </div>
        </div>
        <div className="stShowBottom">
          <span className="stShowTitle">Account Details</span>
          
          <div className="stShowInfo">
            <PersonIcon className="stShowIcon" />
            <span className="stShowInfoTitle">Ruwan Sampath</span>
          </div>


          <div className="stShowInfo">
            <VpnKeyIcon className="stShowIcon" />
            <span className="stShowInfoTitle">1234</span>
          </div>

          <div className="stShowInfo">
            <WcIcon className="stShowIcon" />
            <span className="stShowInfoTitle">Male</span>
          </div>

          <div className="stShowInfo">
            <SchoolIcon  className="stShowIcon" />
            <span className="stShowInfoTitle">1D</span>
          </div>

          

          <span className="stShowTitle">Contact Details</span>
          <div className="stShowInfo">
            <PhoneAndroid className="stShowIcon" />
            <span className="stShowInfoTitle">+1 123 456 67</span>
          </div>
          <div className="stShowInfo">
            <MailOutline className="stShowIcon" />
            <span className="stShowInfoTitle">ruwan9@gmail.com</span>
          </div>
          <div className="stShowInfo">
            <LocationSearching className="stShowIcon" />
            <span className="stShowInfoTitle">Colombo</span>
          </div>
        </div>
      </div>
      </form>
    </div>
  </div>
)
}
