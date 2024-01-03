


import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import { Chip, } from '@mui/material';
import { TrendingDown } from '@mui/icons-material';
import { Icon } from '@iconify/react';





export default function MetricCardTwo({label="",value,upDown=null,labelIcon=null,labelIconColor}) {



  return (
    <Card sx={{ display: 'flex',     aspectRatio:['1/0.35','1/0.44','1/0.43','1/0.454',],boxShadow:'none', borderWidth:'1px', borderStyle:'solid',}}>
        <CardContent sx={{width:'100%',pt:[2,1,1,1,2],'&:last-child':{pb:[2,1]}, display:'flex', flexDirection:"column", justifyContent:"space-between", alignItems:"stretch"}} >
          <Box sx={{display:'flex', justifyContent:'space-between', alignItems:'center',gap:1, marginBottom:1}}>
            <Box sx={{display:'flex',alignItems:'center', gap:['0.1rem','0.2rem'], flex:2}}>
                {!!labelIcon && <Icon icon={labelIcon} style={{fontSize:'1.2rem'}} color={labelIconColor || ''} />}
              <Typography component="div" variant="h5" sx={{marginLeft:1,wordWrap:'unset',textTransform:'capitalize' ,fontSize:["clamp(17px,4vw,20px)","clamp(16px,1.3vw,18px)"], lineHeight:'clamp(15px,2vw,20px)', fontWeight:400}}>
                {label}
              </Typography>
            </Box>
         
          </Box>
          <Box sx={{display:'flex', justifyContent:'space-between', alignItems:'flex-end'}}>
                <Box sx={{display:'flex', alignItems:'flex-end', gap:[1,1,1,1]}}>
                
                  <Box sx={{fontSize:"clamp(23px, 2vw, 25px)", lineHeight:'25px', color:"var(--customColor4)", }}>
                      {value}
                  </Box>

                 
                  {(upDown != undefined && upDown != null) && <Box sx={{}}>
                    <Chip label={`${upDown}%`}  icon={upDown > 0 ? <TrendingUpIcon /> : <TrendingDown />}  color={upDown > 0  ? "success" : 'warning'} 
                        sx={{p:'3px',fontSize:'clamp(8px,1vw,10px)', height:'22px','& .MuiChip-icon':{width:'0.7em', height:'0.7em'}, '& .MuiChip-label':{paddingLeft:'6px',paddingRight:'6px'}}}
                    />
                  </Box>}
                </Box>
                
          </Box>
        </CardContent>   
    </Card>
  );
}