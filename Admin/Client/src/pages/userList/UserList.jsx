import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import { Link } from "react-router-dom";
import "./userList.css";

import { DeleteOutline } from "@material-ui/icons";
import { userRows } from "../../dummyData";

import { useState } from "react";

import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

// import Button from 'react-bootstrap/Button';

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
  { id: 1, Name: 'saduni', Address: 'Colombo', phoneNo: 5566578932,Grade:'1A'},
  { id: 2, Name: 'kasun', Address: 'kandy', phoneNo: 712348769 ,Grade:'1B'},
  { id: 3, Name: 'kamal', Address: 'Nugegoda', phoneNo: 729871256,Grade:'1A' },
  { id: 4, Name:'waruna', Address:'Gampaha', phoneNo: 7734561298,Grade:'1C' },
  { id: 5, Name:'jayani', Address: 'Kurunagala', phoneNo: 761345698,Grade:'1A' },
  { id: 6, Name: 'malidu', Address: 'Kalaniya', phoneNo: 751347689 ,Grade:'1A'},
  { id: 7, Name: 'saku', Address: 'halawatha', phoneNo: 701278532,Grade:'1D' },
  { id: 8, Name: 'shali', Address:'Jaffna', phoneNo: 716547899 ,Grade:'1A'},
  { id: 9, Name: 'ruwan', Address: 'Galle', phoneNo: 761256755 ,Grade:'1B'},
];

export default function DataTable() {

  const classes = useStyles();

  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'Name',
      headerName: 'Name',
      width: 200,
      editable: true,
    },
    // {
    //   field: 'lastName',
    //   headerName: 'Last name',
    //   width: 150,
    //   editable: true,
    // },
    {
      field: 'Address',
      headerName: 'Address',
      width: 200,
      editable: true,
    },


    {
      field: 'Grade',
      headerName: 'Grade',
      width: 150,
      editable: true,
    },


    {
      field: 'phoneNo',
      headerName: 'Phone number',
      type: 'int',
      width: 150,
      editable: true,
    },
   
    {
      field: "parent",
      headerName: "parent",
      width: 160,


      renderCell: (params) => {
        return (
          <>
            <Link to={"/showParents/" + params.row.id}>
              <button className="viewParent">View parent</button>
            </Link>
            {/* <Link to={"/AddStudents/" + params.row.id}>
              <button className="Addparent">Add</button>
            </Link> */}
            
          </>
        );
      },
    },
    // {
    //   field: 'fullName',
    //   headerName: 'Full name',
    //   description: 'This column has a value getter and is not sortable.',
    //   sortable: false,
    //   width: 160,
    //   valueGetter: (params) =>
    //     `${params.getValue(params.id, 'firstName') || ''} ${
    //       params.getValue(params.id, 'lastName') || ''
    //     }`,
    // },
  
    {
      field: "action",
      headerName: "Action",
      width: 160,


      renderCell: (params) => {
        return (
          <>
            <Link to={"/showStudents/" + params.row.id}>
              <button className="viewStudent">View student</button>
            </Link>
            <DeleteOutline
              className="userListDelete"
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },


      // renderCell: (para) => {
      //   return (
      //     <>
      //       <Link to={"/user/" + para.row.id}>
      //         <button className="userListEdit">Edit</button>
      //       </Link>
      //       <DeleteOutline
      //         className="userListDelete"
      //         onClick={() => handleDelete(para.row.id)}
      //       />
      //     </>
      //   );
      // },
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
    <Typography variant="h5"  className='title'>Students</Typography>
  </ThemeProvider>
  

  <div className={classes.root}>

  <Link to="/AddStudents/" >
     <Button variant="contained" color="secondary" href="/addStudents/">
      Add student
    </Button>
    </Link>

    <Link to="/Mail/" >
     <Button variant="contained" color="primary" href="/mail/">
      Send email
    </Button>
    </Link>

    {/* <Link to={"/user/" + params.row.id}>
            <button className="userListEdit">Edit</button>
          </Link> */}
    {/* <Button variant="contained" color="secondary" href="/uploadActivity/1">
      Upload activity
    </Button> */}
 
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
