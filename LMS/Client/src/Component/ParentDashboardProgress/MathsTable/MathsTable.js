import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


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
    createData( "Activity 01 - Let's Learn Addition", 80, 100,'2022-09-08' ),
    createData("Activity 02 - Let's learn to Subtract", 0, 0,'2022-09-07' ),
    createData("Activity 03 - Let's learn to multiply", 0, 0,'2022-09-06' ),
    createData("Activity 04 - Let's learn to divide", 0, 0,'2022-09-05' ),

];

const getData = async () => {

    let Student_ID = localStorage.getItem("Student_Id");
    let Subject_Name = "Maths"
    // let url = `http://localhost:8070/parent/viewProgress/:${Subject_Name}`
    let url = 'http://localhost:8070/parent/viewProgress'
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            Student_ID,
            Subject_Name,
        }),
    })

    const data = await response.json()
    console.log(data)


}


export default function MathsTable() {


    return (
        <>

        <TableContainer onLoad={getData} component={Paper}   >
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                    <TableRow>

                        <StyledTableCell align="center">Activity Name</StyledTableCell>
                        <StyledTableCell align="center">Marks</StyledTableCell>
                        <StyledTableCell align="center">Highest Markets</StyledTableCell>
                        <StyledTableCell align="center">Date</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody >
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
        </>
    );
}
