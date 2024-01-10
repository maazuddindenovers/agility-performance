
import { Box, Button, FormControl, MenuItem, Select } from "@mui/material";
import { dialogToggle, updateBoardType } from "../../../store/slice/boardSlice";
import { useDispatch, useSelector } from "react-redux";





const BoardHeader = () => {
    const boardType = useSelector((state) => state.board.boardType); 
    const boardSubType = useSelector((state) => state.board.boardSubType);

    const dispatch = useDispatch();

    const handleChange = (key,data) => {
        dispatch(updateBoardType({key,data})) 
        if(key == 'boardType' && data == ''){
            dispatch(updateBoardType({key:'boardSubType',data:''})) 
        }
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
                <Button variant="outlined" sx={{textTransform:'capitalize',px:0}} onClick={() =>   dispatch(dialogToggle())}>
                    Create
                </Button>
            </Box> 
        </Box>
    )
}

export default BoardHeader;