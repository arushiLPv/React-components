import React from 'react'
import "../CSS/charts.css"
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import CustomSearchBar1 from "./CustomSearchBar1";
import {AccWrtGroups} from "../data/AccWrtGroups"
import RemoveSharpIcon from '@material-ui/icons/RemoveSharp';

function RemoveAccount() {
     const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
    return (
        <div className="addacc">
            Remove Account
            <span onClick={handleClickOpen} style={{justifyContent:"end",paddingRight:"30px", marginLeft:"70px", marginTop:"35px", paddingTop:"30px"}}>
                <RemoveSharpIcon style={{justifyContent:"end",paddingRight:"30px", marginLeft:"3px", marginTop:"0px", paddingTop:"0px"}}/>
            </span>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Remove Account</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Type the Account number to get the matching searches of the linked Accounts.
          </DialogContentText>
          <CustomSearchBar1 data={AccWrtGroups}/>
          {/* <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
          /> */}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Remove
          </Button>
        </DialogActions>
      </Dialog>
        </div>
    )
}

export default RemoveAccount
