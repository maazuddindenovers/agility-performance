import styled from "@emotion/styled";
import { Box, LinearProgress, Typography, linearProgressClasses } from "@mui/material";


const StyledLinearProgress = styled(LinearProgress)(({ customcolor }) => ({
    
    borderRadius: 3,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor: 'var(--background)',
      border:`1px solid ${customcolor}`,
    '&::after':{
        content:'" "',
        position:'absolute',
        inset:0,
        border:'1.5px solid var(--background)'
    }
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 3,
      backgroundColor: customcolor,
 
    },
  }));
  


  const ProgressBar = ({progress,color,allowValue=true,barSx={},valueSx={}}) => {
    return (
        <Box sx={{display:'flex', alignItems:'center',gap:2}}>
          <StyledLinearProgress variant="determinate" customcolor={color}   value={progress} sx={{width:'90%',height: 24,...barSx}}/>
         {!!allowValue && <Typography sx={{width:'10%',...valueSx}}>
              {progress}%
          </Typography>}
        </Box>
    )
  }

  export default ProgressBar;