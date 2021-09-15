// import * as React from 'react';
// import { DataGrid } from '@mui/x-data-grid';
// import "../CSS/charts.css"
// import '@devexpress/dx-react-grid-bootstrap4/dist/dx-react-grid-bootstrap4.css';


// const columns = [
//   { field: 'id', headerName: 'ID', width: 120 },
  
//   {
//     field: 'accountno',
//     headerName: 'Account Number ',
//     width: 200,
//     editable: true,
//   },
//   {
//     field: 'firstName',
//     headerName: 'First name',
//     width: 200,
//     editable: true,
//   },
//   {
//     field: 'lastName',
//     headerName: 'Last name',
//     width: 200,
//     editable: true,
//   },
//   {
//     field: 'age',
//     headerName: 'Age',
//     type: 'number',
//     width: 200,
//     editable: true,
//   },
//   {
//     field: 'fullName',
//     headerName: 'Full name',
//     description: 'This column has a value getter and is not sortable.',
//     sortable: false,
//     width: 200,
//     valueGetter: (params) =>
//       `${params.getValue(params.id, 'firstName') || ''} ${
//         params.getValue(params.id, 'lastName') || ''
//       }`,
//   },
// ];

// const rows = [
//   { id: 1, accountno: '14648',lastName: 'Snow', firstName: 'Jon', age: 35 },
//   { id: 2, accountno: '63426',lastName: 'Lannister', firstName: 'Cersei', age: 42 },
//   { id: 3, accountno: '24456',lastName: 'Lannister', firstName: 'Jaime', age: 45 },
//   { id: 4, accountno: '86965',lastName: 'Stark', firstName: 'Arya', age: 16 },
//   { id: 5, accountno: '43637',lastName: 'Targaryen', firstName: 'Daenerys', age: null },
//   { id: 6, accountno: '32557',lastName: 'Melisandre', firstName: null, age: 150 },
//   { id: 7, accountno: '87962',lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
//   { id: 8, accountno: '64843',lastName: 'Frances', firstName: 'Rossini', age: 36 },
//   { id: 9, accountno: '73935',lastName: 'Roxie', firstName: 'Harvey', age: 65 },
// ];

// export default function DataGridTable() {
//   return (
//     <div style={{ height: 400, width: '100%' }}>
//       <DataGrid
//         rows={rows}
//         columns={columns}
//         pageSize={5}
//         rowsPerPageOptions={[5]}
//         checkboxSelection
//         disableSelectionOnClick
//         className="dataGrid"
        
//       />
//     </div> 
//   );
// }

// import React, { useState } from 'react';
// import Paper from '@material-ui/core/Paper';
// import {
//   Grid,
//   Table,
//   TableHeaderRow,
// } from '@devexpress/dx-react-grid-material-ui';
// import { fade } from '@material-ui/core/styles/colorManipulator';
// import { withStyles } from '@material-ui/core/styles';
// import {
//   generateRows,
//   globalSalesValues,
// } from '../data/generator';
// import '@devexpress/dx-react-grid-bootstrap4/dist/dx-react-grid-bootstrap4.css';
// import "../CSS/charts.css"

// const styles = theme => ({
//   tableStriped: {
//     '& tbody tr:nth-of-type(odd)': {
//       backgroundColor: fade(theme.palette.primary.main, 0.15),
//       marginTop:'60px'
//     },
//   },
// });

// const TableComponentBase = ({ classes, ...restProps }) => (
//   <Table.Table
//     {...restProps}
//     className={classes.tableStriped}
//   />
// );

// // export
//  const TableComponent = withStyles(styles, { name: 'TableComponent' })(TableComponentBase);

// export default function DataGridTable()  {
//   const [columns] = useState([
//     { name: 'region', title: 'Region' },
//     { name: 'sector', title: 'Sector' },
//     { name: 'customer', title: 'Customer' },
//     { name: 'product', title: 'Product' },
//     { name: 'amount', title: 'Sale Amount' },
//   ]);
//   const [rows] = useState(generateRows({ columnValues: globalSalesValues, length: 8 }));

//   return (
//     <Paper className="newGridClass">
//       <Grid
//         rows={rows}
//         columns={columns}
//       >
//         <Table
//           tableComponent={TableComponent}
//         />
//         <TableHeaderRow />
//       </Grid>
//     </Paper>
//   );
// };


import React, { useState } from 'react';
import Paper from '@material-ui/core/Paper';
import {
  Plugin, Template, TemplateConnector, TemplatePlaceholder,
} from '@devexpress/dx-react-core';
import { EditingState } from '@devexpress/dx-react-grid';
import {
  Grid,
  Table,
  TableHeaderRow,
  TableEditColumn,
} from '@devexpress/dx-react-grid-material-ui';
import TextField from '@material-ui/core/TextField';
import FormGroup from '@material-ui/core/FormGroup';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import MuiGrid from '@material-ui/core/Grid';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';
import {
  generateRows,
  employeeValues,
} from '../data/generator';
import "../CSS/charts.css"
/* eslint-disable no-shadow */
const Popup = ({
  row,
  onChange,
  onApplyChanges,
  onCancelChanges,
  open,
}) => (
  <Dialog open={open} onClose={onCancelChanges} aria-labelledby="form-dialog-title">
    <DialogTitle id="form-dialog-title">Employee Details</DialogTitle>
    <DialogContent>
      <MuiGrid container spacing={3}>
        <MuiGrid item xs={6}>
          <FormGroup>
            <TextField
              margin="normal"
              name="firstName"
              label="First Name"
              value={row.firstName || ''}
              onChange={onChange}
            />
            <TextField
              margin="normal"
              name="prefix"
              label="Title"
              value={row.prefix || ''}
              onChange={onChange}
            />
            <TextField
              margin="normal"
              name="position"
              label="Position"
              value={row.position || ''}
              onChange={onChange}
            />
          </FormGroup>
        </MuiGrid>
        <MuiGrid item xs={6}>
          <FormGroup>
            <TextField
              margin="normal"
              name="lastName"
              label="Last Name"
              value={row.lastName || ''}
              onChange={onChange}
            />
            <MuiPickersUtilsProvider utils={MomentUtils}>
              <KeyboardDatePicker
                label="Birth Date"
                margin="normal"
                value={row.birthDate}
                onChange={(_, value) => onChange({
                  target: { name: 'birthDate', value },
                })}
                format="DD/MM/YYYY"
              />
            </MuiPickersUtilsProvider>
            <TextField
              margin="normal"
              name="phone"
              label="Phone"
              value={row.phone || ''}
              onChange={onChange}
            />
          </FormGroup>
        </MuiGrid>
      </MuiGrid>
    </DialogContent>
    <DialogActions>
      <Button onClick={onCancelChanges} color="primary">
        Cancel
      </Button>
      <Button onClick={onApplyChanges} color="primary">
        Save
      </Button>
    </DialogActions>
  </Dialog>
);

const PopupEditing = React.memo(({ popupComponent: Popup }) => (
  <Plugin>
    <Template name="popupEditing">
      <TemplateConnector>
        {(
          {
            rows,
            getRowId,
            addedRows,
            editingRowIds,
            createRowChange,
            rowChanges,
          },
          {
            changeRow, changeAddedRow, commitChangedRows, commitAddedRows,
            stopEditRows, cancelAddedRows, cancelChangedRows,
          },
        ) => {
          const isNew = addedRows.length > 0;
          let editedRow;
          let rowId;
          if (isNew) {
            rowId = 0;
            editedRow = addedRows[rowId];
          } else {
            [rowId] = editingRowIds;
            const targetRow = rows.filter(row => getRowId(row) === rowId)[0];
            editedRow = { ...targetRow, ...rowChanges[rowId] };
          }

          const processValueChange = ({ target: { name, value } }) => {
            const changeArgs = {
              rowId,
              change: createRowChange(editedRow, value, name),
            };
            if (isNew) {
              changeAddedRow(changeArgs);
            } else {
              changeRow(changeArgs);
            }
          };
          const rowIds = isNew ? [0] : editingRowIds;
          const applyChanges = () => {
            if (isNew) {
              commitAddedRows({ rowIds });
            } else {
              stopEditRows({ rowIds });
              commitChangedRows({ rowIds });
            }
          };
          const cancelChanges = () => {
            if (isNew) {
              cancelAddedRows({ rowIds });
            } else {
              stopEditRows({ rowIds });
              cancelChangedRows({ rowIds });
            }
          };

          const open = editingRowIds.length > 0 || isNew;
          return (
            <Popup
              open={open}
              row={editedRow}
              onChange={processValueChange}
              onApplyChanges={applyChanges}
              onCancelChanges={cancelChanges}
            />
          );
        }}
      </TemplateConnector>
    </Template>
    <Template name="root">
      <TemplatePlaceholder />
      <TemplatePlaceholder name="popupEditing" />
    </Template>
  </Plugin>
));

const getRowId = row => row.id;
export default function DataGridTable() {
  const [columns] = useState([
    { name: 'firstName', title: 'First Name' },
    { name: 'lastName', title: 'Last Name' },
    { name: 'position', title: 'Position' },
    { name: 'phone', title: 'Phone' },
  ]);
  const [rows, setRows] = useState(generateRows({
    columnValues: { id: ({ index }) => index, ...employeeValues },
    length: 8,
  }));

  const commitChanges = ({ added, changed }) => {
    let changedRows;
    if (added) {
      const startingAddedId = rows.length > 0 ? rows[rows.length - 1].id + 1 : 0;
      changedRows = [
        ...rows,
        ...added.map((row, index) => ({
          id: startingAddedId + index,
          ...row,
        })),
      ];
    }
    if (changed) {
      changedRows = rows.map(row => (changed[row.id] ? { ...row, ...changed[row.id] } : row));
    }
    setRows(changedRows);
  };

  return (
    <Paper className="newGridClass">
      <Grid
        rows={rows}
        columns={columns}
        getRowId={getRowId}
      >
        <EditingState
          onCommitChanges={commitChanges}
        />
        <Table />
        <TableHeaderRow />
        <TableEditColumn
          showAddCommand
          showEditCommand
        />
        <PopupEditing popupComponent={Popup} />
      </Grid>
    </Paper>
  );
};

