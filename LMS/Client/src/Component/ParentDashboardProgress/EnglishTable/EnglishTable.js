import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {useEffect} from "react";


const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        fontSize: 15,
        backgroundColor: "#d9d9d9",
        color: "black",
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 15,
    },
}));


const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

function createData(Activity_Name, Mark, Highest_Marks,Submit_Date) {
    return { Activity_Name, Mark, Highest_Marks,Submit_Date};
}


const rows = [
    createData( "Activity 01 - Fruits, fruits everywhere", 80, 100,'2022-09-08' ),
    createData("Activity 02 - It's my family", 0, 0,'2022-09-07' ),
    createData("Activity 03 - What time is it now?", 0, 0,'2022-09-06' ),
    createData("Activity 04 - Let's Learn Colors", 0, 0,'2022-09-05' ),
    createData("Activity 05 - Let's learn Shapes", 0, 0,'2022-09-04' ),
    createData("Activity 06 - Let's play sports", 0, 0,'2022-09-03' ),
];

export default function EnglishTable() {

    let marks = []
    let Student_ID = localStorage.getItem("Student_ID");
    let Subject_Name = "English"
    let tableData= ""

    async function getDataTable() {
        console.log(rows)

        let url = `http://localhost:8070/parent/viewProgress/${Subject_Name}`
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                Student_ID,
            }),
        })

        const getData = await response.json()
        console.log(getData)

        if (getData.status) {
            // console.log("change marks")
            // console.log(getData.data.Mark)

            let marks_object = []
            getData.data.map((name, value) => {
                // console.log("Entered");
                // console.log(name);
                marks_object.push(name)
                // console.log(value);

            })

            marks_object.map((n, v) => {
                marks[n] =v
            })
            // console.log(marks_object)
            // console.log(marks_object[0])
            // console.log(marks_object[1])

            marks_object.map((key,value) => {
                // console.log(key)
                // console.log(value)
                marks.push(key)
            })

            // marks.map((row) => {
            //         console.log(row._id)
            //         console.log(row._id)
            //         console.log(row.Submit_Date)
            //         console.log(row.Activity_Name)
            //         console.log(row.Highest_Marks)
            // }
            //
            // )

        } else {
            console.log("no data")
        }

        console.log(marks)

    }



    return (
        <TableContainer component={Paper} onload={getDataTable} onClick={getDataTable}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                    <TableRow>

                        <StyledTableCell align="center">Activity Name</StyledTableCell>
                        <StyledTableCell align="center">Marks</StyledTableCell>
                        <StyledTableCell align="center">Highest Markets</StyledTableCell>
                        <StyledTableCell align="center">Submitted Data</StyledTableCell>

                    </TableRow>
                </TableHead>
                <TableBody onClick={getDataTable}>
                    {rows.map((row) => (
                        <StyledTableRow key={row.marks}>
                            <StyledTableCell component="th" scope="row" align="center">
                                {row.Activity_Name}
                            </StyledTableCell>
                            <StyledTableCell align="center">{row.Mark}</StyledTableCell>
                            <StyledTableCell align="center">{row.Highest_Marks}</StyledTableCell>
                            <StyledTableCell align="center">{row.Submit_Date}</StyledTableCell>
                        </StyledTableRow>
                    ))}


                </TableBody>
            </Table>
        </TableContainer>
    );
}
