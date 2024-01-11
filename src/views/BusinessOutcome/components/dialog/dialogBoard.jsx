import Box from '@mui/material/Box';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';



import { useDispatch, useSelector } from 'react-redux';
import { dialogToggle } from '../../../../store/slice/boardSlice';
import DialogHead from './dialogHead';
import DialogEditor from './dialogEditor';
import DialogProgress from './dialogProgress';
import DialogTags from './dialogTags';
import DialogTabs from './dialogTabs';


export default function BoardDialog() {

  const dialogOpen = useSelector(state => state?.board?.dialogOpen)
  const dispatch = useDispatch();
  const handleClose = () =>   dispatch(dialogToggle())


  return (

      <Dialog
        fullWidth={'xl'}
        maxWidth="xl"
        open={dialogOpen}
        onClose={handleClose}
        sx={{'& .MuiDialog-paper':{height:'100%',m:['4px',1,1],width:['calc(100% - 25px)','calc(100% - 25px)','calc(100% - 64px)']}}}
      >
        <DialogContent sx={{padding:0}}>
          <DialogHead handleClose={handleClose} />
          <Box sx={{px:4, py:3}}>
            <Box sx={{display:'flex', flexDirection:['column', 'column','row'], gap:2}}>
                <Box sx={{width:['100%','100%','70%']}}>
                    <DialogEditor  />
                </Box >
                <Box sx={{width:['100%','100%','30%']}} >
                  <Box>
                    <DialogProgress progress={30} />
                  </Box>
                  <Box sx={{mt:2}}>
                    <DialogTags />
                  </Box>
                </Box>
            </Box>
            <Box>
             <DialogTabs />
            </Box>
          </Box>
         
        </DialogContent>

      </Dialog>

  );
}