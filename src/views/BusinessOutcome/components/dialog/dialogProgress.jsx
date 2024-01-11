import { Box, Typography } from "@mui/material"
import ProgressBar from "../../../../components/ProgressBar";




const DialogProgress = ({color='var(--customColor13)', progress=0}) => {
    return (
        <Box>
        <Typography sx={{fontWeight:600,mb:1, fontSize:'clamp(16.5px,1.4vw,18px)', color:'var(--customColor29)'}}>
           Overall Progress
        </Typography>
        <ProgressBar 
            progress={progress} 
            color={color} 
            barSx={{
                height:'36px',
                '&.MuiLinearProgress-root':{borderRadius:'4px !important'},
                '&.MuiLinearProgress-colorPrimary':{
                    '&::after':{
                        borderWidth:'3px !important',
                        borderRadius:'2px !important'
                    }
                }
            }} 
            valueSx={{fontWeight:700, color:'var(--customColor29)', fontSize:'24px', lineHeight:'15px'}}
        />
         </Box>
    )
}

export default DialogProgress;