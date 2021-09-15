import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import {Client1Groups} from"../data/Client1Groups"
import "../CSS/charts.css"

export default function CustomSearchBar1({data}) {
  return (
      <div> 
        <label  for="combo-box-demo" style={{marginLeft:"80px", fontWeight:"bold", marginTop:"70px"}}> Search Group</label>
          <Autocomplete
      id="combo-box-demo"
      options={data}
      getOptionLabel={(option) => option.title}
      style={{ width: 300, marginTop:"5px", justifyContent:"flex-end", marginLeft:"650px", borderRadius:"50%", padding:"10px" }}
      renderInput={(params) => <TextField {...params}  variant="outlined" />}
    />
      </div>
    
  );
}
