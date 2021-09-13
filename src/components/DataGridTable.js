import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import "../CSS/charts.css"

const columns = [
  { field: 'id', headerName: 'ID', width: 120 },
  
  {
    field: 'accountno',
    headerName: 'Account Number ',
    width: 200,
    editable: true,
  },
  {
    field: 'firstName',
    headerName: 'First name',
    width: 200,
    editable: true,
  },
  {
    field: 'lastName',
    headerName: 'Last name',
    width: 200,
    editable: true,
  },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 200,
    editable: true,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 200,
    valueGetter: (params) =>
      `${params.getValue(params.id, 'firstName') || ''} ${
        params.getValue(params.id, 'lastName') || ''
      }`,
  },
];

const rows = [
  { id: 1, accountno: '14648',lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 2, accountno: '63426',lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, accountno: '24456',lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, accountno: '86965',lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, accountno: '43637',lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, accountno: '32557',lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, accountno: '87962',lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, accountno: '64843',lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, accountno: '73935',lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

export default function DataGridTable() {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
        className="dataGrid"
        
      />
    </div> 
  );
}
