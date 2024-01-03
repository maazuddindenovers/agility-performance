import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import { Chip, FormControl, MenuItem, Select } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useState } from 'react';
import { TrendingDown } from '@mui/icons-material';
import infoSvg from "../../assets/images/info-svg.svg"
import crossSvg from "../../assets/images/cross-svg.svg"
import { Icon } from '@iconify/react';


export default function MetricCardOne({label="",selectOptions=[],value,valueType,upDown=null}) {
  const [option, setOption] = useState(selectOptions[0]?.value || '');




  const handleChange = (event) => {
    setOption(event.target.value);
  };

  return (
    <Card sx={{ display: 'flex', aspectRatio:'1/0.5',minHeight:'110px', maxHeight:'170px',boxShadow:'none', borderWidth:'1px', borderStyle:'solid' }}>
        <CardContent sx={{width:'100%',p:[2,2],'&:last-child':{pb:[2,2]}, display:'flex', flexDirection:"column", justifyContent:"space-between"}} >
          <Box sx={{display:'flex', justifyContent:'space-between', alignItems:'center',gap:1}}>
            <Box sx={{display:'flex',alignItems:'center', gap:['0.1rem','0.2rem'], flex:2}}>
              <Typography component="div" variant="h5" sx={{wordWrap:'unset', textTransform:'capitalize', fontSize:["clamp(17px,4vw,20px)","clamp(17px,1.4vw,22px)"], lineHeight:'clamp(15px,2vw,20px)', fontWeight:400}}>
                {label}
              </Typography>
              {/* <HelpOutlineOutlinedIcon sx={{fontSize:['1.3rem','1.4rem','1.4rem','1.4rem','1.6rem']}} /> */}
              <Icon icon={'fa-regular:question-circle'} style={{fontSize:['clamp(1rem, 1vw,1.5rem)']}}  />
            </Box>
            {(!!selectOptions &&  !!selectOptions?.length )&&  
            <Box sx={{ minWidth: 40, display:'flex', justifyContent:'flex-end' }}>
              <FormControl  variant='standard' >
             
                <Select
                  IconComponent={KeyboardArrowDownIcon}
                  sx={{
                    fontSize:'clamp(14px,1.2vw,16px)',
                    '& .MuiSelect-select':{paddingTop:"0!important", paddingBottom:'0!important'},
                    '&:before':{display:"none"},
                    '&:after':{display:"none"},
                    '&:hover:not(.Mui-disabled, .Mui-error):before':{borderBottom:"none"},
                    '& .MuiSelect-select:focus':{backgroundColor:"unset"},
                  }}
                  value={option}
                  label="Age"
                  
                  onChange={handleChange}
                >
                  
                  {
                    selectOptions.map((opt,optInd) => {
                          return <MenuItem key={`${opt.value}-${optInd}`} value={opt.value}>{opt.label}</MenuItem>
                    })
                  }
                </Select>
              </FormControl>
            </Box>}
          </Box>
          <Box sx={{display:'flex', justifyContent:'space-between', alignItems:'flex-end'}}>
                <Box sx={{display:'flex', alignItems:'flex-end', gap:[1,1,1,1]}}>
                
                  <Box sx={{fontSize:"clamp(30px, 3vw, 35px)", lineHeight:'36px', color:"var(--customColor4)", }}>
                      {value}
                      {valueType == 'day' && 
                        <Box sx={{fontSize:"clamp(18px, 1.3vw, 20px)", lineHeight:'27px', color:"var(--customColor4)", display:'inline-block', marginLeft:'7px'}}>
                          Days
                        </Box>
                      }
                  </Box>
                 
                  {(upDown != undefined && upDown != null) && <Box sx={{}}>
                    <Chip label={`${upDown}%`}  icon={upDown > 0 ? <TrendingUpIcon /> : <TrendingDown />}  color={upDown > 0  ? "success" : 'warning'} 
                        sx={{p:'3px',fontSize:'clamp(10px,1.2vw,12px)', height:'26px','& .MuiChip-icon':{width:'0.7em', height:'0.7em'}, '& .MuiChip-label':{paddingLeft:'8px',paddingRight:'8px'}}}
                    />
                  </Box>}
                  <Box sx={{width:'25px', aspectRatio:'1/1', display:'flex', placeContent:"center", boxShadow:2 }} className='infoSvg' >
                    <img src={infoSvg} width={'70%'}  />
                  </Box>
                </Box>
                <Box>
                      <Box sx={{width:['30px','30px','35px'], aspectRatio:'1/1', display:'flex', placeContent:"center", borderRadius:"5px", border:'3px solid var(--customColor5)'}}>
                          <img src={crossSvg} width={'60%'} />
                      </Box>
                </Box>
          </Box>
        </CardContent>   
    </Card>
  );
}