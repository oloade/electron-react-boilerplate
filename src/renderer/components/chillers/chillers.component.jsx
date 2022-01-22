import * as React from 'react';
import { useState } from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    // backgroundColor: theme.palette.primary.main,
    backgroundColor: '#607d8b',
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

function createData(id, desc, unitNumber, dateAdded, carbs, protein) {
  return { id, desc, unitNumber, dateAdded, carbs, protein };
}

const initialRows = [
  createData(1, 'Pump is noisy', 15, '22 January 2021', 24, 4.0),
  createData(2, 'Polish leak', 2, '22 January 2021', 37, 4.3),
  createData(3, 'Polish flow error', 12, '22 January 2021', 24, 6.0),
  createData(4, 'Not able to switch on', 3, '22 January 2021', 67, 4.3),
  createData(5, 'High temperature', 5, '22 January 2021', 49, 3.9),
];

export default function Chillers() {
  const [rows, setRows] = useState(initialRows);

  function deleteRow(rowId) {
    setRows(rows.filter((row) => row.id !== rowId));
  }

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Fault Description</StyledTableCell>
            <StyledTableCell align="right">Unit number</StyledTableCell>
            <StyledTableCell align="right">Date added</StyledTableCell>
            <StyledTableCell align="right"> </StyledTableCell>
            {/* <StyledTableCell align="right">Protein&nbsp;(g)</StyledTableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.id}>
              <StyledTableCell component="th" scope="row">
                {row.desc}
              </StyledTableCell>
              <StyledTableCell align="right">{row.unitNumber}</StyledTableCell>
              <StyledTableCell align="right">{row.dateAdded}</StyledTableCell>
              <StyledTableCell align="right">
                <DeleteForeverIcon onClick={() => deleteRow(row.id)} />
              </StyledTableCell>
              {/* <StyledTableCell align="right">{row.protein}</StyledTableCell> */}
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
