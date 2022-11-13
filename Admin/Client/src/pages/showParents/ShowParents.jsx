import "./showParents.css";

import {
    
    LocationSearching,
    MailOutline,
    PhoneAndroid,
    
    // Publish,
  } from "@material-ui/icons";
//   import { Link } from "react-router-dom";
 

 
  
  
  import VpnKeyIcon from '@material-ui/icons/VpnKey';
  import PersonIcon from '@material-ui/icons/Person';
  import FaceIcon from '@material-ui/icons/Face';

 


export default function ShowParents() {
  return (

   

    <div className="">
      <h1 className="prTitle">Parent details</h1>
    <div className="">
  
    </div>
    <div className="prContainer">
    <form className="prform">
      <div className="prShow ">
        <div className="prShowTop">
          
          <div className="prShowTopTitle">
            <span className="prShowUsername">Gamini Dissanayake</span>
            
          </div>
        </div>
        <div className="prShowBottom">
          <span className="prShowTitle">Account Details</span>
          
          <div className="prShowInfo">
            <PersonIcon className="prShowIcon" />
            <span className="prShowInfoTitle">Gamini</span>
          </div>


          <div className="prShowInfo">
            <VpnKeyIcon className="prShowIcon" />
            <span className="prShowInfoTitle">12..sc34</span>
          </div>

         

          <div className="prShowInfo">
            <FaceIcon  className="prShowIcon" />
            <span className="prShowInfoTitle">Father</span>
          </div>

          

          <span className="prShowTitle">Contact Details</span>
          <div className="prShowInfo">
            <PhoneAndroid className="prShowIcon" />
            <span className="prShowInfoTitle">+1 123 456 67</span>
          </div>
          <div className="prShowInfo">
            <MailOutline className="prShowIcon" />
            <span className="prShowInfoTitle">gamini45@gmail.com</span>
          </div>
          <div className="prShowInfo">
            <LocationSearching className="prShowIcon" />
            <span className="prShowInfoTitle">Colombo</span>
          </div>
        </div>
      </div>
      </form>
    </div>
  </div>
)
}

 


