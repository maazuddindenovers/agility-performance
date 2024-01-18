import {useMemo} from "react"
import Box from '@mui/material/Box';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import { useDispatch, useSelector } from 'react-redux';
import { dialogToggle, createNewData, updateActiveData } from '../../../../store/slice/boardSlice';
import DialogHead from './dialogHead';
import DialogEditor from './dialogEditor';
import DialogProgress from './dialogProgress';
import DialogTags from './dialogTags';
import DialogTabs from './dialogTabs';
import BoardProject from '../BoardProjects';
import { setActiveData } from "../../../../store/slice/boardSlice";
import { useRef } from "react";
import { useState } from "react";

export default function BoardDialog() {

  const dialogOpen = useSelector(state => state?.board?.dialogOpen)
  const dispatch = useDispatch();


  const data = useSelector((state) => state.board.data)
  const cardData = useSelector((state) => state.board.activeData)
  const colors = useSelector(state => state.board.colors)

  const [activeSave,setActiveSave] = useState(false);
  
  const isNew = useMemo(() => {
    console.log(cardData)
    return !!cardData ? !data.find(dl => dl.ID == cardData.ID) : false
  },[cardData?.ID,data.length]) 
  
  
  const handleChange = (key,value) => {
    
    setActiveSave(true)
    dispatch(setActiveData({
      ...cardData,
        [key]:value
    }))
  }

  const handleSave = () => {
    
    if(!isNew){
      dispatch(updateActiveData())
    }else{

      dispatch(createNewData())
    }
    setActiveSave(false)

  }
  const handleClose = () => { 
    dispatch(setActiveData(null));  
    dispatch(dialogToggle());
    setActiveSave(false)
  }
  


  return (

      <Dialog
        maxWidth="xl"
        open={dialogOpen}
        onClose={handleClose}
        sx={{'& .MuiDialog-paper':{height:'100%',m:['4px',1,1],width:['calc(100% - 25px)','calc(100% - 25px)','calc(100% - 64px)']}}}
      >
       {!!cardData &&
        <DialogContent sx={{padding:0}}>
          <DialogHead 
           handleChange={handleChange}
            handleClose={handleClose}
            ID={cardData.ID} 
            text1={cardData.columnData.label}
            text2={cardData.extraTopTags}
            mainText={cardData.text}
            handleSave={handleSave}
            color={cardData.cardColor}
            disabledSave={!(isNew || activeSave)}
            isNew={isNew}
            colorList={colors}
          />
          <Box sx={{px:4, py:3}}>
            <Box sx={{display:'flex', flexDirection:['column', 'column','row'], gap:2}}>
                <Box sx={{width:['100%','100%','70%']}}>
                    <DialogEditor handleChange={handleChange} defaultContent={cardData.description} />
                </Box >
                <Box sx={{width:['100%','100%','30%']}} >
                  <Box>
                    <DialogProgress color={cardData.cardColor} progress={cardData.progress} />
                  </Box>
                  <Box sx={{mt:2}}>
                    <DialogTags handleTagsChange={handleChange} defaultTags={cardData?.tags || []}/>
                  </Box>
                </Box>
            </Box>
            <Box>
              <DialogTabs activeTabIndex={1}>
                <Box tabLabel="key results">Key results</Box>
                <BoardProject tabLabel="Projects" />  
                <Box tabLabel="Comments">comments</Box>
                <Box tabLabel="custom fields">custom fields</Box>
                <Box tabLabel="checklist">checklist</Box>
                <Box tabLabel="links">links</Box>
              </DialogTabs>
            </Box>
          </Box>
         
        </DialogContent>
        }

      </Dialog>

  );
}