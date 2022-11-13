import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';
// import { Link } from "react-router-dom";
import "./maths.css";

import { DeleteOutline } from "@material-ui/icons";
// import { userRows } from "../../dummyData";

import { useState } from "react";



import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

// import Button from 'react-bootstrap/Button';

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
// import PhotoCamera from '@material-ui/icons/PhotoCamera';




const theme = createTheme();

theme.typography.h3 = {
  fontSize: '1.2rem',
  '@media (min-width:600px)': {
    fontSize: '1.5rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '2rem',
  },
};


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));





const rows = [
  { id: 1, NameOfActivity: 'Activity 01', TypeOfActivity: 'Mtch images', UploadedDate: '02/05/2022'},
  { id: 2, NameOfActivity: 'Activity 02', TypeOfActivity: 'Fill the blanks', UploadedDate: '02/05/2022' },
  { id: 3, NameOfActivity: 'Activity 03', TypeOfActivity:'Fill the blanks', UploadedDate: '02/05/2022'},
  { id: 4, NameOfActivity: 'Activity 04', TypeOfActivity: 'Fill the blanks', UploadedDate: '02/05/2022'},
  { id: 5, NameOfActivity: 'Activity 05', TypeOfActivity: 'Fill the blanks', UploadedDate: '02/05/2022'},
  { id: 6, NameOfActivity: 'Activity 06', TypeOfActivity: 'Fill the blanks', UploadedDate: '02/05/2022' },
  { id: 7, NameOfActivity: 'Activity 07', TypeOfActivity: 'Fill the blanks', UploadedDate: '02/05/2022' },
];

export default function Maths() {

//   const [data, setData] = useState(rows);

// const handleDelete = (id) => {
//   setData(data.filter((item) => item.id !== id));
// };
  

    // const [data,setData]=useState


  const classes = useStyles();


  const [data, setData] = useState(rows);

  const handleDelete = (id) => {
  setData(data.filter((item) => item.id !== id));
};
  

  

  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'NameOfActivity',
      headerName: 'Name of activity',
      width: 250,
      editable: true,
    },
    {
      field: 'TypeOfActivity',
      headerName: 'Type of activity',
      width: 250,
      editable: true,
    },
    {
      field: 'UploadedDate',
      headerName: 'Uploaded date',
      type: 'String',
      width: 250,
      // editable: true,
    },
    {
      // field: 'fullName',
      // headerName: 'Full name',
      // description: 'This column has a value getter and is not sortable.',
      // sortable: false,
      // width: 160,


      // valueGetter: (params) =>
      //   `${params.getValue(params.id, 'Name_of_activity') || ''} 
      //   ${
      //     params.getValue(params.id, 'Type_of_activity') || ''}
        
      //   `,
    },
  
    {
      field: "action",
      headerName: "Action",
      width: 160,
      renderCell: (params) => {
        return (
          <>
            {/* <Link to={"/user/" + params.row.id}>
              <button className="MathsMarksEdit">Edit</button>
            </Link> */}
            <DeleteOutline
              className="MathsMarksDelete"
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
    
  ];
  
// const [data, setData] = useState(rows);

// const handleDelete = (id) => {
//   setData(data.filter((item) => item.id !== id));
// };
const theme = createTheme({
  typography: {
    // Tell Material-UI what's the font-size on the html element is.
    htmlFontSize: 10,
  },
});
  return (
    <div>
<ThemeProvider theme={theme}>
      <Typography variant="h5" className='title'>Maths</Typography>
    </ThemeProvider>

    <div className={classes.root}>

   

      {/* <Link to={"/user/" + params.row.id}>
              <button className="userListEdit">Edit</button>
            </Link> */}
      <Button variant="contained" color="primary" href="/uploadActivity/1">
        Add exercise
      </Button>
   
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
    </div>
    </div>
  );
}
