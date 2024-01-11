import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';

import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import { IconButton, Typography } from '@mui/material';
import { Cancel } from '@mui/icons-material';
import { ClickAwayListener } from '@mui/base';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {

  // PaperProps: {
  //   style: {
  //     maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
  //     width: 250,
  //   },
  // },
};

const names = [
  'In Discovery',
  'Insurence',
  'Lending',
  'Q2-2020',
];

function getStyles(name, tags, theme) {
  return {
    fontWeight:
      tags.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function DialogTags() {
  const theme = useTheme();
  const [tags, setTags] = React.useState([]);
  const [selectOpen, setSelectOpen] = React.useState(false)
  const handleChange = (event) => {

    
    const {
      target: { value },
    } = event;
    setTags(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  return (
    <Box>
        <Typography sx={{fontWeight:600,mb:1, fontSize:'clamp(16.5px,1.4vw,18px)', color:'var(--customColor29)'}}>
           Outcome Tags
        </Typography>
   
      <FormControl  sx={{  width: '100%', }}  >

        <Select
          sx={{
                '&>div::before':{
                content:'" "',
                position:'absolute',
                backgroundColor:'rgba(0, 0, 0, 0.42)',
                width:'1px',
                top:'15%',
                bottom:'15%',
                right:'10%',
                transform:'scale(1)',
              },
              '& .MuiSvgIcon-root':{
                right:'2%'
              }
          }}
          variant='standard'
          multiple
          // open={selectOpen}
          value={tags}
          onChange={handleChange}
          
        
          IconComponent={() => <KeyboardArrowDownRoundedIcon onClick={() => setSelectOpen(true)} />}
          renderValue={(selected) => (
            <Box  sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }} >
              {selected.map((value) => (
                <Box 
                    key={value}
                    sx={{
                        display:'flex', 
                        alignItems:'center',
                        border:'1px solid var(--customColor31)', 
                        lineHeight:'20px', 
                        fontSize:"14px", 
                        borderRadius:'4px', 
                        padding:'4px 6px',
                    }}
                >
                       <Box> {value}</Box>
                       <IconButton sx={{py:0,px:0, ml:1}}
            
                        // onMouseDown={(event) => {
                        //     event.preventDefault()
                        //   }}
                       >
                            <Cancel sx={{fill:'var(--customColor31)', pointerEvents:'none'}}/>
                       </IconButton>
                </Box>   
              ))}
            </Box>
          )}
          MenuProps={MenuProps}
        
        >
      
          {names.map((name) => (
            <MenuItem
              key={name}
              value={name}
              style={getStyles(name, tags, theme)}
              
            >
              {name}
            </MenuItem>
          ))}
        
        </Select>
  
      </FormControl>

    </Box>
  );
}
