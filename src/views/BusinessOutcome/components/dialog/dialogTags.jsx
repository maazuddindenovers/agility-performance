import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';

import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import { Chip,  Stack, Typography } from '@mui/material';
import { Cancel } from '@mui/icons-material';
// import { ClickAwayListener } from '@mui/base';

// const ITEM_HEIGHT = 48;
// const ITEM_PADDING_TOP = 8;
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
  // const [selectOpen, setSelectOpen] = React.useState(false)
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
             paddingRight:'45px',
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
                right:'2%',
               
              }
          }}
          variant='standard'
          multiple
          value={tags}
          onChange={handleChange}
          IconComponent={() => <KeyboardArrowDownRoundedIcon sx={{position:'absolute', color:'var(--customColor31)'}}/>}
          onClick={(e) =>e.stopPropagation() } 
          renderValue={(selected) => (
      
            <Stack gap={'5px'} direction="row" flexWrap="wrap">
            {selected.map((value) => (
              <Chip
                key={value}
                label={value}
                sx={{
                    display:'flex', 
                    alignItems:'center',
                    border:'1px solid var(--customColor31)', 
                    lineHeight:'20px', 
                    fontSize:"14px", 
                    borderRadius:'4px', 
                    padding:'0px 0px',
                    isolation:'isolate',
                    height:'30px',
                    backgroundColor:'transparent',
                    '& .MuiChip-label':{
                      pl:'8px',
                    }
                }}
                onDelete={() =>
                  setTags(
                    tags.filter((item) => item !== value)
                  )
                }
                deleteIcon={
                  <Cancel
                    onMouseDown={(event) => event.stopPropagation()}
                  />
                }
              />
            ))}
          </Stack>
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
