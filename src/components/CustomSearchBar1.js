import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import {Client1Groups} from"../data/Client1Groups"
import "../CSS/charts.css"

export default function CustomSearchBar1({data}) {
  return (
      <div> <span>

        <label  for="combo-box-demo" style={{marginLeft:"80px", fontWeight:"bold", marginTop:"70px"}}> Search Group</label>
          <Autocomplete
      id="combo-box-demo"
      options={data}
      getOptionLabel={(option) => option.title}
      style={{ width: 300, marginTop:"5px", justifyContent:"flex-end", marginLeft:"650px", borderRadius:"50%", padding:"10px" }}
      renderInput={(params) => <TextField {...params} label="Search Group" variant="outlined" />}
    />
    </span>
    {/* <span style={{marginLeft:"600px", marginTop:"-50px"}}>
    <a aria-haspopup="true" href="#" class="pr-0 nav-link" aria-expanded="false"><div class="align-items-center media"><span class="avatar avatar-sm rounded-circle"><img alt="..." src="/argon-dashboard-react/static/media/team-4-800x800.99c612eb.jpg"/></span><div class="ml-2 d-none d-lg-block media"><span class="mb-0 text-sm font-weight-bold">Jessica Jones</span></div></div></a>
     </span>  */}
     </div>
    
  );
}
