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
    createData( "Activity 01 - Planets and Animals", 80, 100,'2022-09-08' ),
    createData("Activity 02 - Our Planet", 0, 0,'2022-09-07' ),
    createData("Activity 03 - Night Sky", 0, 0,'2022-09-06' ),
    createData("Activity 04 -Day Sky", 0, 0,'2022-09-05' ),
    createData("Activity 05 - Weather", 0, 0,'2022-09-04' ),

];

export default function EnvironmentalTable() {
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                    <TableRow>

                        <StyledTableCell align="center">Activity Name</StyledTableCell>
                        <StyledTableCell align="center">Marks</StyledTableCell>
                        <StyledTableCell align="center">Highest Markets</StyledTableCell>
                        <StyledTableCell align="center">Date</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
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
