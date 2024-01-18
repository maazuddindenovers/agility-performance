
import { Box, Button, FormControl, MenuItem, Select } from "@mui/material";
import { dialogToggle,createNewData, updateBoardType, setActiveData } from "../../../store/slice/boardSlice";
import { useDispatch, useSelector } from "react-redux";
import {businessOutcomeColumnData} from "../../../utils/data"
import { useMemo } from "react";




const BoardHeader = () => {
    const boardType = useSelector((state) => state.board.boardType); 
    const boardSubType = useSelector((state) => state.board.boardSubType);
    const data = useSelector(state => state.board.data)


    const dispatch = useDispatch();

    const handleChange = (key,data) => {
        dispatch(updateBoardType({key,data})) 
        if(key == 'boardType' && data == ''){
            dispatch(updateBoardType({key:'boardSubType',data:''})) 
        }
    }

    const newDataID = () => {
        let largest = 0;
        data.forEach(element => {
            if (element.ID > largest){
                largest = element.ID 
            }
        });
        return largest + 1
    }

    const handleCreateNew = () => {
        dispatch(setActiveData({
                type:boardType,
                subType:boardSubType,
                columnData:businessOutcomeColumnData[0], 
                extraTopTags:'Arrested Development',
                ID:newDataID(),
                text:'Ensure seamless Customer Success experience so that',
                description:'We believe that by focusing efforts around the creation of annuity products within the senior market we establish a foothold to create additional opportunities in this market.',
                progress:74,
                tags:['lending','claims','in discovery'],
                cardColor:'var(--customColor13)',
        }))
        dispatch(dialogToggle())
    }
    return (
        <Box sx={{ display:'flex', justifyContent:'space-between' }}>
            <Box></Box>
            <Box sx={{display:'flex',flexWrap:'wrap', alignItems:'center', columnGap:4, rowGap:1}}>
                <FormControl variant="standard" sx={{ minWidth: 200 }}>
                
                    <Select              
                        value={boardType}
                        onChange={(event) => {handleChange('boardType',event.target.value)}}
                    >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={'outcomes'}>Outcomes</MenuItem>
                    <MenuItem value={"projects"}>Projects</MenuItem>
                    <MenuItem value={'deliverables'}>Deliverables</MenuItem>
                    </Select>
                </FormControl>   
                <FormControl disabled={!boardType} variant="standard" sx={{ minWidth: 200, textTransform:'capitalize' }} >
                
                    <Select              
                        value={boardSubType}
                        onChange={(event) => {handleChange('boardSubType',event.target.value)}}
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={'kanban'} sx={{textTransform:'capitalize'}}>{boardType} by kanban</MenuItem>
                        <MenuItem value={'status'} sx={{textTransform:'capitalize'}}>{boardType} by Status</MenuItem>
                        <MenuItem value={'timelines'} sx={{textTransform:'capitalize'}}>{boardType} by Timelines</MenuItem>
                        <MenuItem value={'tagabc'} sx={{textTransform:'capitalize'}}>{boardType} by TagABC</MenuItem>
                    </Select>
                </FormControl>    
                <Button variant="outlined" sx={{textTransform:'capitalize',px:0}} onClick={handleCreateNew}>
                    Create
                </Button>
            </Box> 
        </Box>
    )
}

export default BoardHeader;