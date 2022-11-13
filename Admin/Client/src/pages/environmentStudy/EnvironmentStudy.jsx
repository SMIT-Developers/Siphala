import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';
// import { Link } from "react-router-dom";
import "./environmentStudy.css";

import { DeleteOutline } from "@material-ui/icons";
import { userRows } from "../../dummyData";

import { useState } from "react";



import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

// import Button from 'react-bootstrap/Button';

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';




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
  { id: 1, Name_of_activity: 'Activity 01', Type_of_activity: 'Mtch images', Uploaded_date: '02/05/2022' },
  { id: 2, Name_of_activity: 'Activity 02', Type_of_activity: 'Fill the blanks', Uploaded_date: '02/05/2022'},
  { id: 3, Name_of_activity: 'Activity 03', Type_of_activity: 'Fill the blanks', Uploaded_date: '02/05/2022'},
  { id: 4, Name_of_activity: 'Activity 04', Type_of_activity: 'Fill the blanks', Uploaded_date: '02/05/2022' },
  { id: 5, Name_of_activity: 'Activity 05', Type_of_activity: 'Fill the blanks', Uploaded_date: '02/05/2022'},
  { id: 6, Name_of_activity: 'Activity 06', Type_of_activity: 'Fill the blanks', Uploaded_date: '02/05/2022'},
  { id: 7, Name_of_activity: 'Activity 07', Type_of_activity: 'Fill the blanks', Uploaded_date: '02/05/2022'},
  // { id: 8, Name_of_activity: 'Frances', Type_of_activity: 'Rossini', Uploaded_date: 36 },
  // { id: 9, Name_of_activity: 'Roxie', Type_of_activity: 'Harvey', Uploaded_date: 65 },
];

export default function EnvironmentStudy() {

  const classes = useStyles();

  // <Button variant="primary">Primary</Button>

  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'Name_of_activity',
      headerName: 'Name of activity',
      width: 250,
      editable: true,
    },
    {
      field: 'Type_of_activity',
      headerName: 'Type of activity',
      width: 250,
      editable: true,
    },
    {
      field: 'Uploaded_date',
      headerName: 'Uploaded date',
      type: 'String',
      width: 250,
      // editable: true,
    },
    {
      // field: 'Uploaded_date',
      // headerName: 'Uploaded date',
      // type: 'number',
      // // description: 'This column has a value getter and is not sortable.',
      // // sortable: false,
      // editable: true,
      // width: 200,



      valueGetter: (params) =>
        `${params.getValue(params.id, 'firstName') || ''} ${
          params.getValue(params.id, 'lastName') || ''
        }`,
    },
  
    {
      field: "action",
      headerName: "Action",
      width: 160,
      renderCell: (params) => {
        return (
          <>
            {/* <Link to={"/user/" + params.row.id}>
              <button className="ESMarksEdit">Edit</button>
            </Link> */}
            <DeleteOutline
              className="userListDelete"
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
    
  ];
  
const [data, setData] = useState(userRows);

const handleDelete = (id) => {
  setData(data.filter((item) => item.id !== id));
};
const theme = createTheme({
  typography: {
    // Tell Material-UI what's the font-size on the html element is.
    htmlFontSize: 10,
  },
});
  return (
    <div>
    <ThemeProvider theme={theme}>
      <Typography variant="h5" className='Etitle'>Environmental Studies</Typography>
    </ThemeProvider>

    <div className={classes.root}>


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
