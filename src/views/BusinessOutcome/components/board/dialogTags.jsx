import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Chip from '@mui/material/Chip';
import { IconButton, Typography } from '@mui/material';
import { Cancel } from '@mui/icons-material';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  'Oliver Hansen',
  'Van Henry',
  'April Tucker',
  'Ralph Hubbard',
  'Omar Alexander',
  'Carlos Abbott',
  'Miriam Wagner',
  'Bradley Wilkerson',
  'Virginia Andrews',
  'Kelly Snyder',
];

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function DialogTags() {
  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);

  const handleChange = (event) => {

    
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  return (
    <Box>
        <Typography sx={{fontWeight:600,mb:1, fontSize:'clamp(16.5px,1.4vw,18px)', color:'var(--customColor29)'}}>
           Outcome Tags
        </Typography>
      <FormControl  sx={{  width: '100%' }}>
      
        <Select
          variant='standard'
          multiple
          value={personName}
          onChange={handleChange}
          renderValue={(selected) => (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }} >
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
                        onMouseDown={(event) => {
                            event.stopImmediatePropagation();
                          }}
                       >
                            <Cancel sx={{fill:'var(--customColor31)'}}/>
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
              style={getStyles(name, personName, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
