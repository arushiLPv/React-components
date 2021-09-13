import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function createData(AccountNumber, Interest, DateofOpening, Credit, Debit) {
  return { AccountNumber, Interest, DateofOpening, Credit, Debit };
}

const rows = [
  createData('Account 1', 159, 6.0, 24, 4.0),
  createData('Account 2', 237, 9.0, 37, 4.3),
  createData('Account 3', 262, 16.0, 24, 6.0),
  createData('Account 4', 305, 3.7, 67, 4.3),
  createData('Account 5', 356, 16.0, 49, 3.9),
    createData('Account 6', 306, 26.0, 32, 1.8)
];

const useStyles = makeStyles({
  table: {
    minWidth: 700,
    // marginTop:"500px",
    // paddingTop:"1200px"
  },
});

export default function CustomizedTables() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper} className="tablecomp">
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Account Number </StyledTableCell>
            <StyledTableCell align="right">Interest</StyledTableCell>
            <StyledTableCell align="right">Date of Opening</StyledTableCell>
            <StyledTableCell align="right">Credit</StyledTableCell>
            <StyledTableCell align="right">Debit</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.AccountNumber}>
              <StyledTableCell component="th" scope="row">
                {row.AccountNumber}
              </StyledTableCell>
              <StyledTableCell align="right">{row.Interest}</StyledTableCell>
              <StyledTableCell align="right">{row.DateofOpening}</StyledTableCell>
              <StyledTableCell align="right">{row.Credit}</StyledTableCell>
              <StyledTableCell align="right">{row.Debit}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
