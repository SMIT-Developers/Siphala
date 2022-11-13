import "./teachInfor.css";



import {
    CalendarToday,
    LocationSearching,
    MailOutline,
    PermIdentity,
    PhoneAndroid,
    Publish,
  } from "@material-ui/icons";
 

export default function TeachInfor() {
  return (
    <div className="">
        <div className="">
          <h1 className="teTitle">Techer's details</h1>
          
           
          
        </div>
        <div className="teContainer">
          <div className="teShow">
            <div className="teShowTop">
              <img
                src="https://images.unsplash.com/photo-1583468982228-19f19164aee2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1011&q=80"
                alt=""
                className="teShowImg"
              />
              <div className="teShowTopTitle">
                <span className="teShowUsername">Supuni Wickramasinghe</span>
                <span className="teShowUserTitle">Matale Internatioal School</span>
              </div>
            </div>
            <div className="teShowBottom">
              <span className="teShowTitle">Account Details</span>
              <div className="teShowInfo">
                <PermIdentity className="teShowIcon" />
                <span className="teShowInfoTitle">Supuni99</span>
              </div>
              <div className="teShowInfo">
                <CalendarToday className="teShowIcon" />
                <span className="teShowInfoTitle">10.12.2021</span>
              </div>
              <span className="teShowTitle">Contact Details</span>
              <div className="teShowInfo">
                <PhoneAndroid className="teShowIcon" />
                <span className="teShowInfoTitle">77 123 456 67</span>
              </div>
              <div className="teShowInfo">
                <MailOutline className="teShowIcon" />
                <span className="teShowInfoTitle">supuni93@gmail.com</span>
              </div>
              <div className="teShowInfo">
                <LocationSearching className="teShowIcon" />
                <span className="teShowInfoTitle">Colombo</span>
              </div>
            </div>
          </div>
          <div className="teUpdate">
            <span className="teUpdateTitle">Edit</span>
            <form className="teUpdateForm">
              <div className="teUpdateLeft">
                <div className="teUpdateItem">
                  <label>Username</label>
                  <input
                    type="text"
                    placeholder="saduni11"
                    className="teUpdateInput"
                  />
                </div>
                <div className="teUpdateItem">
                  <label>Full Name</label>
                  <input
                    type="text"
                    placeholder="Saduni Perera"
                    className="teUpdateInput"
                  />
                </div>
                <div className="teUpdateItem">
                  <label>Email</label>
                  <input
                    type="text"
                    placeholder="saduni@gmail.com"
                    className="teUpdateInput"
                  />
                </div>
                <div className="teUpdateItem">
                  <label>Phone</label>
                  <input
                    type="text"
                    placeholder="7 723 456 67"
                    className="teUpdateInput"
                  />
                </div>
                <div className="teUpdateItem">
                  <label>Address</label>
                  <input
                    type="text"
                    placeholder="Colombo"
                    className="teUpdateInput"
                  />










                </div>
              </div>
              <div className="teUpdateRight">
                <div className="teUpdateUpload">
                  <img
                    className="teUpdateImg"
                    src="https://images.unsplash.com/photo-1583468982228-19f19164aee2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1011&q=80"
                    alt=""
                  />
                  <label htmlFor="file">
                    <Publish className="teUpdateIcon" />
                  </label>
                  <input type="file" id="file" style={{ display: "none" }} />
                </div>
                <button className="teUpdateButton">Update</button>
              </div>
            </form>
          </div>
        </div>
      </div>
   
  )
}



  

  
