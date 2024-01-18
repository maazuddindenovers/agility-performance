import { ArrowDropDownRounded, Close,  } from "@mui/icons-material";
import { Box, Button, FormControl, IconButton,  MenuItem,  Select,  Typography } from "@mui/material"
import DeleteSvg from "../../../../assets/images/deleteSvg.svg"
import SaveIcon from '@mui/icons-material/Save';
import { memo, useState } from "react";
import useBoard from "../../hook/useBoard";
import ColorPicker from "../../../../components/ColorPicker";






const ColumnSelect = ({handleChange}) => {
    const {columnHeadData} = useBoard('outcomes','kanban')
    const [column, setColumn] = useState(columnHeadData[0]?.id);
   
    const handleChangeCol = (event) => {
        setColumn(event.target.value);
        handleChange('columnData',columnHeadData.find(clhd => clhd.id == event.target.value))
    };

    // const menuData = useMemo(() => {
    //     return columnHeadData.map((clhd) => {labelclhd.label})
    // },[columnHeadData])

    // console.log(columnHeadData)
    return (
      <div>
        <FormControl  
            variant="standard" 
            sx={{ 
                minWidth: 120 , 
                '& .MuiSelect-select':{py:0},
                '& .MuiInput-input:focus':{backgroundColor:'transparent'}
            }}>

          <Select
           
            value={column}
            onChange={handleChangeCol}
          >
            {/* <MenuItem value="">
              <em>None</em>
            </MenuItem> */}
            {
                columnHeadData.map((clhd) => (
                <MenuItem key={`columnhead-${clhd}`} value={clhd.id}>{clhd.label}</MenuItem>
                ))
            }
   
          </Select>
        </FormControl>
       
      </div>
    );
  }


const DialogHead = memo(({
    text1="3 Years Outcomes",
    text2='Arrested Development',
    ID='ID27',
    mainText='Ensure seamless Customer Success experience so that we exceed customer expectations',
    created={ date:'11/23/2023', by:'Muzammil Kesarni'},
    updated={ date:'11/23/2023', by:'Muzammil Kesarni'},
    color='var(--customColor27)',
    handleClose,
    handleSave=() => {},
    handleChange,
    disabledSave=false,
    isNew,
    colorList=[],
}) => {


     


    return (
        <Box sx={{position:'relative', pt:3,pr:3,pb:2, pl:[3,3,4],borderBottom:`1px solid ${color}`}} >
            <Box sx={{position:'absolute', top:0, bottom:0, left:0, width:'14px', backgroundColor: color }} />
            <Box sx={{position:'absolute', right:[0,8,12], top:[4,7,10], display:'flex', alignItems:['flex-start','flex-start','center'], gap:1}}>
                <Box>
                    <Button 
                        variant="contained" 
                        onClick={handleSave}
                        disabled={disabledSave}
                        startIcon={<SaveIcon />}
                        endIcon={<ArrowDropDownRounded />}
                        sx={{
                            mt:['5px','5px',0],
                            overflow:'hidden',
                            color:'var(--background)',
                            borderRadius:'6px',
                            px:'10px',
                            lineHeight:'normal',
                            textTransform:'capitalize',
                            fontSize:'15px',
                            '& .MuiButton-startIcon':{
                                marginRight:'5px'
                            },
                            '& .MuiButton-endIcon':{
                                position:'relative',
                                paddingLeft:'5px',
                                "&:after":{
                                    transform:'scaleY(1.6)',
                                    content:'" "',
                                    position:'absolute',
                                    backgroundColor:'currentcolor',
                                    width:'1px',
                                    left:0,
                                    bottom:0,
                                    top:0,                                    
                                }

                            }
                        }} 
                    >
                       Save

                    </Button>
                </Box>
                <Box sx={{display:'flex', flexDirection:['column-reverse', 'column-reverse', 'row' ], gap:[0,1], alignItems:'center'}}>
                   
                    <ColorPicker color={color} colorList={colorList} handleChange={handleChange} />
                    <IconButton disabled={isNew}>
                        <img src={DeleteSvg} width={21} />
                    </IconButton>
                  
                    
                    <IconButton onClick={handleClose}>
                        <Close sx={{fontWeight:600, fontSize:'1.7rem', fill:'var(--customColor6)'}}/>
                    </IconButton>
                  
                </Box>
            </Box>
        
            <Box sx={{mt:[3,0]}} >
                <Typography sx={{ width:['90%', '70%', '70%'],color:'var(--customColor29)',pl:1,fontSize:"15px", lineHeight:'19px', fontWeight:500, display:'flex',flexWrap:'wrap', columnGap:2}}>
                    <span style={{textTransform:'capitalize'}}>{isNew? <ColumnSelect handleChange={handleChange} /> : text1}</span>
                    <span>|</span> 
                    <span>{text2}</span> 
                    <span>|</span>
                    <span>{ID}</span>
                </Typography>
                <Typography 
                    sx={{
                        width:['92%','92%','100%'],
                        pl:1, pt:[3,3,3], pb:'5px',
                        borderBottom:'2px solid var(--customColor28)', 
                        fontSize:'clamp(18px,1.5vw,20px)', 
                        fontWeight:600,
                        color:'var(--customColor29)',
                        lineHeight:'1.2',
                    }}
                >
                    {mainText}
                </Typography>
                <Typography 
                    sx={{
                        width:'92%',
                        pl:1, pt:1,
                        display:'flex',
                        flexWrap:'wrap',
                        alignItems:'center', 
                        columnGap:1, 
                        textTransform:'capitalize',
                        fontSize:['13px','14px']
                    }}
                >
                    <span>Created on: {created.date} by {created.by}</span>
                    <Box sx={{display:['none','inline']}}>|</Box>
                    <span>Last Updated on: {updated.date} by {updated.by}</span>
                </Typography>

            </Box>
        </Box>  
    )
})

export default DialogHead;