import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import {Client1Groups} from"../data/Client1Groups"
import "../CSS/charts.css"

export default function CustomSearchBar({data}) {
  return (
      <div>
          <Autocomplete
      id="combo-box-demo"
      options={data}
      getOptionLabel={(option) => option.title}
      style={{ width: 300, marginTop:"25px", justifyContent:"flex-end", marginLeft:"100px", borderRadius:"55px", padding:"10px" }}
      renderInput={(params) => <TextField {...params} label="Search Group" variant="outlined" />}
    />
      </div>
    
  );
}
