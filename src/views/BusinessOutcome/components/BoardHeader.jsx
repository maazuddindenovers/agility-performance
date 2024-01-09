
import { Box, Button, FormControl, MenuItem, Select } from "@mui/material";
import { useState } from "react";
import { dialogToggle } from "../../../store/slice/outcomeSlice";
import { useDispatch } from "react-redux";




const BoardHeader = () => {
    const [data1, setData1] = useState('outcomes');
    const [data2, setData2] = useState('kanban');
    const dispatch = useDispatch();
 


    return (
        <Box sx={{ display:'flex', justifyContent:'space-between' }}>
            <Box></Box>
            <Box sx={{display:'flex', alignItems:'center', gap:4}}>
                <FormControl variant="standard" sx={{ minWidth: 200 }}>
                
                    <Select
                
                
                    value={data1}
                    onChange={(event) => {  setData1(event.target.value) }}
                
                    >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={'outcomes'}>Outcomes</MenuItem>
                    <MenuItem value={"projects"}>Projects</MenuItem>
                    <MenuItem value={'deliverables'}>Deliverables</MenuItem>
                    </Select>
                </FormControl>   
                <FormControl variant="standard" sx={{ minWidth: 200 }}>
                
                    <Select              
                        value={data2}
                        onChange={(event) => {  setData2(event.target.value) }}
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={'kanban'}>Outcomes by kanban</MenuItem>
                        <MenuItem value={'status'}>Outcomes by Status</MenuItem>
                        <MenuItem value={'timelines'}>Outcomes by Timelines</MenuItem>
                        <MenuItem value={'tagabc'}>Outcomes by TagABC</MenuItem>
                    </Select>
                </FormControl>    
                <Button variant="text" sx={{textTransform:'capitalize',px:0}} onClick={() =>   dispatch(dialogToggle())}>
                    Create
                </Button>
            </Box> 
        </Box>
    )
}

export default BoardHeader;