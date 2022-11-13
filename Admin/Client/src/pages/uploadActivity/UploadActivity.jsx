
import "./uploadActivity.css";

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';






const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  input: {
    display: 'none',
  },
})); 





export default function UploadActivity() {

  const classes = useStyles();
  

  return (
    <div className="featured">
      
      <div className="featuredItem text-center justify-content-center">
      <span className="featuredTitle">Upload your file here</span>

      <div className="featuredMoneyContainer text-center justify-content-center">
          <span className="featuredMoney text-center"> </span> </div>





      <div className={classes.root}>
      <input
        accept="image/*"
        className={classes.input}
        id="contained-button-file"
        multiple
        type="file"
      />
      <label htmlFor="contained-button-file">
        <Button variant="contained" color="primary" component="span">
          Upload
        </Button>
      </label>
      <input accept="image/*" className={classes.input} id="icon-button-file" type="file" />
      <label htmlFor="icon-button-file">
        <IconButton color="primary" aria-label="upload picture" component="span">
          <PhotoCamera />
        </IconButton>
      </label>
    </div>
      

    <form className="uploadActivityForm">

    <div className="uploadItem">
        <label>Activity name</label>
        <input type="text" placeholder="Activity o2" />
      </div>


      <div className="uploadItem">
        <label>Date</label>
        <input type="text" placeholder="15/04/2022" />
      </div>

      <div className="uploadItem">
        <label>Type of exercise</label>
        <input type="text" placeholder="Maths Images" />
      </div>


    <div className="uploadItem">
        <label>Subject</label>
        <select className="Subject" name="active" id="active">
          <option value="yes">Maths</option>
          <option value="no">Environmantal studies</option>
          <option value="no">Religion</option>
          <option value="no">English</option>

          
        
        </select> 
        {/* <div>
        <div><button className="addButton">Add</button></div>
        <div><button className="backButton">Back</button></div><br></br>
        </div> */}
        </div>

        <div className="buttons">
        <div><button className="addButton" style={{display:'flex',justifycontent:'bottem'}}>Add</button></div>
        

        <div><button className="backButton" style={{display:'flex',justifycontent:'top'}}>Back</button></div><br></br>
        </div>

        {/* <div><button className="SkipButton">Skip for now</button></div><br></br> */}

    </form>

        </div>
        {/* <div className={classes.root}>
      <input
        accept="image/*"
        className={classes.input}
        id="contained-button-file"
        multiple
        type="file"
      />
      <label htmlFor="contained-button-file">
        <Button variant="contained" color="primary" component="span">
          Upload
        </Button>
      </label>
      <input accept="image/*" className={classes.input} id="icon-button-file" type="file" />
      <label htmlFor="icon-button-file">
        <IconButton color="primary" aria-label="upload picture" component="span">
          <PhotoCamera />
        </IconButton>
      </label>
    </div> */}

     
    
      </div>
     
    
  );
}





