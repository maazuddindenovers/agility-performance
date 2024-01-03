import { Box,  FormControl,  Hidden,  MenuItem, Select, Typography } from "@mui/material";
import agIcon from "../../../assets/images/ag-icon.svg"
import { useState } from "react";




const SectionHead = ({label='',filterList=[],extraComp=undefined}) => {

    const [filterValue, setFilterValue] = useState(filterList[0]?.value || '');

    const handleChange = (event) => {
        setFilterValue(event.target.value);
    };

    // const ExtraComp = extraComp

    return (
        <Box  sx={{display:'flex', gap:1 , alignItems:['center'], justifyContent:'space-between', my:2,}}>
            <Box sx={{display:'flex', gap:['0.6rem','1.5rem'], alignItems:['stretch','center'], flexDirection:['column','row'], width:['100%','auto']}}>
                <Box sx={{display:'flex', gap:['1rem','1.5rem'], alignItems:'center', justifyContent:['space-between','flex-start']}}>
                <Typography sx={{fontWeight:'600', fontSize:'clamp(20px,1.5vw,28px)'}}>
                    {label}
                </Typography>
            
                {!!extraComp &&
                    <Hidden smUp>
                    {extraComp}
                    </Hidden>
                }
            
                </Box>
                <Box sx={{display:'flex',width:'fit-content', gap:['1rem','1.5rem'], alignItems:'center', justifyContent:['space-between','flex-start']}}>
                <Box sx={{display:'flex',alignItems:'center',gap:'0.6rem'}}>
                    <Box sx={{width:'100%', minWidth:'25px', maxWidth:['34px','37px'], aspectRatio:'1/1'}}>
                        <img src={agIcon} width={'100%'}  />
                    </Box>
                    <Box sx={{fontWeight:600,fontSize:'clamp(15px,1vw,16px)', color:'primary.main'}}>
                        AI Insights
                    </Box>
                </Box>
                
                    {!!filterList.length && 
                    <Box sx={{ minWidth: ['auto',200], flex:'auto', flexGrow:'1' }}>
                    <FormControl fullWidth>
                    
                    <Select

                        
                        value={filterValue}
                
                        onChange={handleChange}
                    >
                        {
                            filterList.map((listValue)=> {
                            return <MenuItem key={`${label}-${listValue.value}`} value={listValue.value}>{listValue.label}</MenuItem>
                            })
                        }


                    </Select>
                    </FormControl>
                </Box>
                }
                </Box>
            
            </Box>
            {!!extraComp &&
                <Hidden smDown>
                    <Box sx={{width:'fit-content'}}>
                   {extraComp}
                   </Box>
                </Hidden>
            }
        </Box>
    )
}

export default SectionHead;