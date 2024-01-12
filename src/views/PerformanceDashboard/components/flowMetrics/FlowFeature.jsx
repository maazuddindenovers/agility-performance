import { Box, MenuItem,  Select,  } from "@mui/material";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import crossSvg from "../../../../assets/images/cross-svg.svg"
import { Icon } from "@iconify/react";
import { useMemo, useState } from "react";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import CustomTabel from "../../../../components/Tabel";
import BarCompare from "../../../../components/charts/barCompare";


const FeatureOptions = () => {
    return (
        <FormControl>
        <RadioGroup
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="feature-options-group"
          sx={{'& .MuiButtonBase-root.MuiRadio-root':{py:'5px'},'& svg':{ width:'0.9em', height:'0.9em',  },'& .MuiTypography-root':{fontSize:'clamp(0.8rem,1.5vw,1.2rem)' }}}
        >
          <FormControlLabel  value="featureLeadTime" control={<Radio />} label="Feature Lead Time" />
          <FormControlLabel  value="featureCycleTime" control={<Radio />} label="Feature Cycle Time" />          
        </RadioGroup>
      </FormControl>
    )
}

const selectOptions = [{label:'Days', value:'days'}]

const FeatureExtra = () => {



    const [option, setOption] = useState(selectOptions[0]?.value || '');




    const handleChange = (event) => {
      setOption(event.target.value);
    };
    return(
        <Box sx={{display:'flex', alignItems:'center', gap:1}}>
            <Box sx={{width:['30px','30px','35px'], aspectRatio:'1/1', display:'flex', placeContent:"center", borderRadius:"5px", border:'3px solid var(--customColor5)'}}>
                <img src={crossSvg} width={'60%'} />
            </Box>
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
            </Box>



        </Box>
    )
}




const ParentTag = ({text}) => {
  const tagColor = useMemo(() => {
    switch (text){
      case 'process': return 'var(--customColor10)';
      case 'reports': return 'var(--customColor11)';
      case 'dashboard':  return 'var(--customColor12)';
      case 'people': return 'var(--primaryColor)';
      case 'detail': return 'var(--customColor13)';
      default:
        return ''
    }



  },[text])
  return (
    <Box sx={{textTransform:'capitalize', display:'flex', alignItems:'center', gap:1}}>
      <Box  sx={{width:'14px',aspectRatio:'1/1', backgroundColor:tagColor, borderRadius:'2px', whiteSpace:'pre'}} />
      {text}
    </Box>
  )
}

const StatusTag = ({text}) => {
  
  const tagColors = useMemo(() => {
    switch (text){
      case 'completed': return {fore:'var(--customColor15)',back:'var(--customColor14)'};
      case 'in discovery': return {fore:'var(--customColor17)',back:'var(--customColor16)'};
      case 'in progress': return {fore:'var(--customColor19)',back:'var(--customColor18)'};

      // case 'reports': return 'var(--customColor11)';
      // case 'dashboard':  return 'var(--customColor12)';
      // case 'people': return 'var(--primaryColor)';
      // case 'detail': return 'var(--customColor13)';
      default:
        return  {fore:'',back:''}
    } 
  },[text])
  
  return (
    <Box sx={{width:'fit-content',whiteSpace:'pre', textTransform:'capitalize', color:tagColors.fore, backgroundColor:tagColors.back, borderRadius:'4px', px:['10px'], py:['2px']}}>
        {text}
    </Box>
    )
}



  
  const rows = [
    {
      feature:'Agile Talent and HR Rollup',
      parent:<ParentTag text='process' />,
      status:<StatusTag text='completed' />,
      cycleTime:'55',
    },
    {
      feature:'Agile Team View',
      parent:<ParentTag text='reports' />,
      status:<StatusTag text='in discovery' />, 
      cycleTime:'55',
    },
    {
      feature:'All Talent Dev Radars',
      parent:<ParentTag text='reports' />,
      status:<StatusTag text='completed' />,
      cycleTime:'55',
    },
    {
      feature:'All Talent Dev Radars',
      parent:<ParentTag text='dashboard' />,
      status:<StatusTag text='in progress' />,
      cycleTime:'55',
    },
    {
      feature:'All Talent Dev Radars',
      parent:<ParentTag text='people' />,
      status:<StatusTag text='in discovery' />,
      cycleTime:'55',
    },
    {
      feature:'All Talent Dev Radars',
      parent:<ParentTag text='detail' />,
      status:<StatusTag text='in progress' />,
      cycleTime:'55',
    }
    // createData('Agile Talent and HR Rollup', 'Process', 6.0, 24, ),
    // createData('Agile Team View', 'Reports', 9.0, 37),
    // createData('All Talent Dev Radars', 'Reports', 16.0, 24),
    // createData('Arrested Development', 'People', 3.7, 67),
    // createData('Enterprise Level', 'Dasboard', 16.0, 49),
    // createData('Assessments / Scheduler', 'Detail', 16.0, 49),
  ];

  

const FlowFeature = () => {
    return (
        <Box >
            <Box sx={{display:'flex', alignItems:['flex-start','flex-start','center'], flexDirection:['column', 'row'], justifyContent:"space-between", position:'relative', pr:[0,3],gap:[2,1]}}>
                    <Box sx={{position:'absolute', top:'8px', right:0}}>
                        <Icon icon='fa-solid:ellipsis-v' color="var(--customColor4)" />
                    </Box>
                <Box>
                     <FeatureOptions />   
                </Box>
                <Box>
                    <FeatureExtra />
                </Box>
            </Box>

            <Box sx={{display:'flex', flexDirection:['column', 'row'], gap:3, mt:3}}>
                <Box sx={{width:['100%','27%']}}>
                    <BarCompare data1={75} data2={30} />
                </Box>
                <Box sx={{width:['100%','73%'],pt:3}}>
                <CustomTabel 
                  heads={['Top Features','Parent','Status','Cycle Time']} 
                  rowData={rows}
                />
           
                </Box>
            </Box>

        </Box>
    )
}

export default FlowFeature;