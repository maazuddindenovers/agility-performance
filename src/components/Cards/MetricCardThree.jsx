import styled from "@emotion/styled";
import { Icon } from "@iconify/react";
import { Box, Card, CardContent, Divider,  LinearProgress,  Typography, linearProgressClasses } from "@mui/material";




const StyledLinearProgress = styled(LinearProgress)(({ theme,customcolor }) => ({
    height: 24,
    borderRadius: 3,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
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
  
  

const MetricCardThree = ({id='',text='',tags=[],progress,color=''}) => {

    return (<Card sx={{ display: 'flex',boxShadow:'none',height:'100%', borderWidth:'1px', borderStyle:'solid',borderRadius:0, borderTopRightRadius:"3px",borderBottomRightRadius:"3px"}}>
        <CardContent sx={{width:'100%', display:'flex', flexDirection:'column', justifyContent:'space-between', position:'relative', p:0, pl:'6px','&:last-child':{pb:[0,0]},}} >
                <Box sx={{position:'absolute', top:0, bottom:0, left:0, width:'6px', backgroundColor:color}} />
                <Box sx={{p:[2,2],pb:[1,1]}}>
                    <Typography sx={{color:'var(--customColor6)', fontSize:'clamp(14, 2vw, 16px)', marginBottom:1}}>
                       ID {id}
                    </Typography>
                    <Typography sx={{display:' -webkit-box','--webkit-line-clamp':1,  overflow: 'hidden', 'WebkitBoxOrient': 'vertical',  color:'var(--customColor6)', fontSize:'clamp(14px, 2vw, 19px)',  marginBottom:1}}>
                        {text}
                    </Typography>
                    {/* <LinearProgress /> */}
                    <Box sx={{display:'flex', alignItems:'center',gap:2}}>
                        <StyledLinearProgress variant="determinate" customcolor={color}   value={progress} sx={{width:'90%'}}/>
                        <Typography sx={{width:'10%'}}>
                            {progress}%
                        </Typography>
                    </Box>
                </Box>
                <Divider />
                <Box sx={{display:'flex', flexWrap:"wrap", gap:1, py:1, px:[1,1,1,2]}}>
                    {tags.map((tag,tagInd) => {
                        return (
                            <Box key={`tagInd-${tagInd}`} sx={{fontSize:'clamp(12px, 1vw, 14px)',borderRadius:'4px', border:'1px solid var(--customColor3)', padding:'2px 12px'}}>
                                {tag}
                            </Box>
                        )
                    })}
                </Box>
                <Divider />
                <Box sx={{display:'flex', justifyContent:'space-between'}}>
                    <Box sx={{display:'flex', alignItems:'center', gap:1, py:1, px:[2,2,2,2]}}>
                        <Icon icon='fa-solid:chevron-down' sx={{fontSize:'clamp(14px, 1vw, 16px)'}} />
                        <Box sx={{fontSize:'clamp(14px, 1vw, 16px)'}}>
                            (4 KRs)
                        </Box>
                    </Box>
                    <Box sx={{display:'flex', gap:1, py:1, pr:[3,3,3,3]}}>

                        <Icon icon='fa-regular:copy' sx={{fontSize:'clamp(14px, 1vw, 16px)'}} />
                        <Icon icon='fa-solid:link' sx={{fontSize:'clamp(14px, 1vw, 16px)'}} />
                    
                    </Box>
                </Box>
        </CardContent>
    </Card>)
}

export default MetricCardThree;