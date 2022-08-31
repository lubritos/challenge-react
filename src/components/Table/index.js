import * as React from 'react';
import { styled } from '@mui/material/styles';
import TableMT from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: '#ccc',
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
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


export default function Table({
    rows,
    colums
}) {
    return (
    <TableContainer component={Paper}>
      <TableMT sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              {colums.map((column)=>
              <StyledTableCell align="center">
                  {column}
              </StyledTableCell>
              )}
            </TableRow>
          </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.nombre}>
              <StyledTableCell component="th" align="center" scope="row">
                {row.nombre}
              </StyledTableCell>
              <StyledTableCell align="center">{row.edad}</StyledTableCell>
              <StyledTableCell align="center">{row.carrera}</StyledTableCell>
              <StyledTableCell align="center">{row.hobbie}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </TableMT>
    </TableContainer>
  );
}
