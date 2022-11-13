import "./showMarks.css";
// import * as React from 'react';
// import { DataGrid } from '@material-ui/data-grid';
// import { Link } from "react-router-dom";



// export default function ShowMarks() {
//   return (
//     <div>ShowMarks</div>
//   )
// }

import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';
// import { Link } from "react-router-dom";
//import "./userList.css";

import { DeleteOutline } from "@material-ui/icons";
import { userRows } from "../../dummyData";

import { useState } from "react";

import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

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


const rows = [
  { id: 1, Name_of_Student: 'saduni', Act_01_Marks: '20', Act_02_Marks: 15, Act_03_Marks: '20', Total_Marks: '20' },
  { id: 2, Name_of_Student: 'kasun', Act_01_Marks: '13', Act_02_Marks: 12, Act_03_Marks: '20', Total_Marks: '20' },
  { id: 3, Name_of_Student: 'kanmal', Act_01_Marks: '15', Act_02_Marks: 13, Act_03_Marks: '20',Total_Marks: '20' },
  { id: 4, Name_of_Student: 'waruna', Act_01_Marks: '18', Act_02_Marks: 16, Act_03_Marks: '20',Total_Marks: '20' },
  { id: 5, Name_of_Student: 'sadali', Act_01_Marksy: '12', Act_02_Marks: 18, Act_03_Marks: '20',Total_Marks: '20'},
  { id: 6, Name_of_Student: 'gagani', Act_01_Marks: '16', Act_02_Marks: 15, Act_03_Marks: '20',Total_Marks: '20'},
  { id: 7, Name_of_Student: 'sumudu', Act_01_Marks: '18', Act_02_Marks: 4,  Act_03_Marks: '20',Total_Marks: '20'},
];

export default function ShowMarks() {

  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'Name_of_Student',
      headerName: 'Name of Student',
      width: 180,
      editable: true,
    },
    {
      field: 'Act_01_Marks',
      headerName: 'Activity 01 marks',
      type: 'number',
      width: 180,
      editable: true,
    },
    {
      field: 'Act_02_Marks',
      headerName: 'Activity 02 marks',
      type: 'number',
      width: 180,
      editable: true,
    },
    {
        field: 'Act_03_Marks',
        headerName: 'Activity 03 marks',
        type: 'number',
        width: 180,
        editable: true,
      },
      {
        field: 'Total_Marks',
        headerName: 'Total marks',
        type: 'number',
        width: 180,
        editable: true,
      },








    {
      // field: 'fullName',
      // headerName: 'Full name',
      // description: 'This column has a value getter and is not sortable.',
      // sortable: false,
      // width: 160,



      valueGetter: (params) =>
        `${params.getValue(params.id, 'firstName') || ''} ${
          params.getValue(params.id, 'lastName') || ''
        }`,
    },
  
    {
      field: "delete",
      headerName: "Delete",
      width: 160,
      renderCell: (params) => {
        return (
          <>
            {/* <Link to={"/user/" + params.row.id}>
              <button className="userListEdit">Edit</button>
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
      <Typography variant="h5">Marks of the students</Typography>
    </ThemeProvider>
   
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
  );
}





