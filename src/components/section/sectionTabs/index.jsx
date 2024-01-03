import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

import Box from '@mui/material/Box';

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: ['14px',3], backgroundColor:'var(--background)' }}>
            {children}
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function SectionTabs({children,tabHeads=[] }) {
  const [value, setValue] = React.useState(3);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" sx={{minHeight:'35px','&>div':{overflow:['scroll!important','unset!important']}}} className='scrollFade'>
            {
                tabHeads.map((head,headIndx) => {
                    return (
                        <Tab key={`tabHead-${head}-${headIndx}`} label={head} {...a11yProps(headIndx)}  sx={{p:0,mx:2,minHeight:'35px'}}/>
                    )
                })
            }
        </Tabs>
      </Box> 
   
      {
        React.Children.map(children ,(child,childIndex) => {
            return (
                <CustomTabPanel key={childIndex} value={value} index={childIndex}>
                    {React.cloneElement(child)}
                </CustomTabPanel>
            )
            
        })
      }
    </Box>
  );
}