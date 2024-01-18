import { Box, IconButton, Menu, MenuItem, Select } from "@mui/material"
import { useState } from "react";
import ColorLensIcon from '@mui/icons-material/ColorLens';
import { useSelector } from "react-redux";



const ColorPicker = ({handleChange=null,color=null,colorList=[]}) => {
    const [anchorEl, setAnchorEl] = useState(null);


    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };



    
    const handleSelect = (color) => {
        if(!!handleChange) handleChange('cardColor',color)
        handleClose()
    }

    return (
    <Box>
        <IconButton
             id="basic-button"
             aria-controls={open ? 'basic-menu' : undefined}
             aria-haspopup="true"
             aria-expanded={open ? 'true' : undefined}
             onClick={handleClick}
        >
                        <ColorLensIcon sx={{fontWeight:600, fontSize:'2rem', fill:color || 'var(--customColor6)'}} />
         </IconButton> 
       
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
          sx={{
            '& .MuiList-root':{
                display:'flex',
            },
            '& .MuiList-root>li':{
                p:'5px',
                lineHeight:'normal',
                width:'20px',
                height:'20px',
                minHeight:'unset',
                borderRadius:"100%",
                mx:'8px',
                position:'relative'   
            }
          }}
        >
            {
                colorList.map((colorValue) => {
                  return(  
                        <MenuItem 
                            sx={{

                                border:`${colorValue == color ? 2 : 0}px solid var(--customColor17)`,
                                // '&:hover':{
                                //     backgroundColor:`${color}`
                                // },
                                "&:after":{
                                    content:"' '",
                                    position:'absolute',
                                    inset:'2px',
                                    backgroundColor:`${colorValue}`,
                                    borderRadius:'100%',
                                },
                                
                            }} 
                            onClick={() => handleSelect(colorValue)}
                            key={`colorPicker-${colorValue}`}
                        ></MenuItem>
                    )
                })
            }
        </Menu>
      </Box>
    )
}

export default ColorPicker;