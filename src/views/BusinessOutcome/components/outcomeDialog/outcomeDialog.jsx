import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';


import { useDispatch, useSelector } from 'react-redux';
import { dialogToggle } from '../../../../store/slice/outcomeSlice';

export default function OutcomeDialog() {

  const dialogOpen = useSelector(state => state?.outcomeDialog?.dialogOpen)
  const dispatch = useDispatch();
//   const handleClickOpen = () => {
//     setOpen(true);
//   };

    const handleClose = () =>   dispatch(dialogToggle())


  return (

      <Dialog
        fullWidth={'xl'}
        maxWidth="xl"
        open={dialogOpen}
        onClose={handleClose}
        sx={{'& .MuiDialog-paper':{height:'100%'}}}
      >
        <DialogTitle>Optional sizes</DialogTitle>
        <DialogContent>
          <DialogContentText>
            You can set my maximum width and whether to adapt or not.
          </DialogContentText>
          <Box
            noValidate
            component="form"
            sx={{
              display: 'flex',
              flexDirection: 'column',
              m: 'auto',
              width: 'fit-content',
            }}
          >
          
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>

  );
}