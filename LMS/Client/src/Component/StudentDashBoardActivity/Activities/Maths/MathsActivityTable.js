import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import * as FaIcons from "react-icons/fa";
import add from "../../../../Assets/Puzzel/Maths/add.png";
import sub from "../../../../Assets/Puzzel/Maths/sub.png";
import mul from "../../../../Assets/Puzzel/Maths/1.jpg";
import divi from "../../../../Assets/Puzzel/Maths/2.jpg";
import mix from "../../../../Assets/Puzzel/Maths/3.jpg";
import {useState} from "react";
import MathsActivity from "./MathsActivity";
import fruit from "../../../../Assets/Puzzel/Fruit/main.png";
import animal from "../../../../Assets/Puzzel/Animal/main.png";

const columns = [
    {
        id: 'activityName',
        label: 'Activity Name',
        minWidth: 100,
        align: 'center'
    },
    {
        id: 'image',
        label: 'Image',
        minWidth: 150,
        align: 'center'
    },
    {
        id: 'marks',
        label: 'Marks',
        minWidth: 150,
        align: 'center'
    },
    {
        id: 'highestMark',
        label: 'Highest Mark',
        minWidth: 150,
        align: 'center'
    },
    {
        id: 'moreActions',
        label: 'More Actions',
        minWidth: 100,
        align: 'center'
    },
];

function createData(id, activityName, image, marks, highestMark,buttonStatus) {
    return {
        id,
        activityName,
        image,
        marks,
        highestMark,
        buttonStatus
    };
}




export default function MathsActivityTable() {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const [disabled1, setDisabled1] = useState(false);
    const [disabled2, setDisabled2] = useState(false);

    const [marksA1, setMarksA1] =useState(0);
    const [marksA2, setMarksA2] =useState(0);
    const [hightesMarksA1, setHightesMarksA1] =useState(0);
    const [hightesMarksA2, setHightesMarksA2] =useState(0);


    //Pop up form
    const [id, setId] = useState(0);
    const [isFormOpen, setIsFormOpen] = useState(false);

    const rows = [
        createData(1, "Activity 1 - Addition", add, marksA1, hightesMarksA1,disabled1),
        createData(2, "Activity 2 - Subtraction", sub, marksA2, hightesMarksA2,disabled2),
        createData(3, "Activity 3 - Multiply", mul, 0, 0,false),
        createData(4, "Activity 4 - Division", divi, 0, 0,false),
        createData(5, "Activity 5 - Mix", mix, 0, 0,false),
    ];

    let Subject_Name1 = "Maths"
    let Activity_Name1= "Activity 1 - Addition"
    let TYPE1="A1"

    let Subject_Name2 = "Maths"
    let Activity_Name2= "Activity 2 - Subtraction"
    let TYPE2="A2"

    let Student_ID = localStorage.getItem("std_id");

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };


    const toggleFormPopup = () => {
        setIsFormOpen(!isFormOpen);
    }

    const openActivityForm = (id) => (action) => {
        setId(id);
        toggleFormPopup();
    };

    function setMarksData(){
        isAllreadSubmit  (Subject_Name1,Activity_Name1,TYPE1)
        isAllreadSubmit  (Subject_Name2,Activity_Name2,TYPE2)
    }
    async function isAllreadSubmit  (Subject_Name,Activity_Name,TYPE){

        let url = "http://localhost:8070/student/get_activity"

        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                Student_ID,
                Subject_Name,
                Activity_Name,
            }),
        })

        const getData = await response.json()
        console.log(getData)
        if (TYPE ==="A1"){


            if(getData.status){
                // console.log("change marks")
                // console.log(getData.data.Mark)
                setMarksA1(getData.data.Mark)
                setHightesMarksA1(getData.data.Highest_Marks)
                setDisabled1(true);
            }else{
                setDisabled1(false);
            }

        }else{


            if(getData.status){
                // console.log("change marks")
                // console.log(getData.data.Mark)
                setMarksA2(getData.data.Mark)
                setHightesMarksA2(getData.data.Highest_Marks)
                setDisabled2(true);
            }else{
                setDisabled2(false);
            }

        }



    }



    return (
        <div onLoad={setMarksData}>
            <Paper sx={{width: '100%', overflow: 'hidden'}}>
                <TableContainer sx={{maxHeight: 440}}>
                    <Table stickyHeader aria-label="sticky table">
                        <TableHead>
                            <TableRow>
                                {columns.map((column) => (
                                    <TableCell
                                        key={column.id}
                                        align={column.align}
                                        style={{minWidth: column.minWidth}}
                                    >
                                        {column.label}
                                    </TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows
                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((row) => {
                                    return (
                                        <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                                            {columns.map((column) => {
                                                const value = row[column.id];
                                                if (column.label === "More Actions") {
                                                    return (
                                                        <TableCell key={column.id} align={column.align}>
                                                            <button onClick={openActivityForm(row.id)} disabled={row.buttonStatus}>
                                                                <FaIcons.FaEye className="view-more"/>
                                                            </button>
                                                        </TableCell>
                                                    );
                                                } else if (column.label === "Image") {
                                                    return (
                                                        <TableCell key={column.id} align={column.align}>
                                                            <img width="150px" src={value}
                                                                 alt="Puzzle Image"/>
                                                        </TableCell>
                                                    );
                                                } else {
                                                    return (
                                                        <TableCell key={column.id} align={column.align}>
                                                            {value}
                                                        </TableCell>
                                                    );
                                                }
                                            })}
                                        </TableRow>
                                    );
                                })}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[5, 10, 25, 100]}
                    component="div"
                    count={rows.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Paper>
            {isFormOpen && <MathsActivity
                id={id}
                handleClose={toggleFormPopup}
            />}
        </div>
    );
}