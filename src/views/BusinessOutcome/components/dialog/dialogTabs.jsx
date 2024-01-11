import { Box, Tab, Tabs } from "@mui/material";
import { useState } from "react";



function a11yProps(index) {
    return {
      id: `dialog-tab-${index}`,
      'aria-controls': `dialog-tab-${index}`,
    };
  }



  function DialogTabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`dialog-tab-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            {children}
          </Box>
        )}
      </div>
    );
  }
  

  const tabsNames = [
    'key result',
    'projects',
    'comments',
    'custom fields',
    'links'
  ]

const DialogTabs = ({active='projects'}) => {
    const [value, setValue] = useState('projects');

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
    return (
        <Box sx={{ width: '100%' }}>
        <Box sx={{ 
                borderBottom: 2, 
                borderColor: 'divider' ,
                '& .MuiTab-root':{
                        backgroundColor:"var(--customColor32)",
                        border:'0.5px solid var(--customColor27)',
                        borderBottom:0,
                        color:'var(--customColor29)',
                        textTransform:'uppercase',
                         fontWeight:600,
                         fontSize:'14px',
                         borderTopLeftRadius:'3px',
                         borderTopRightRadius:'3px',
                         px:'22px',
                },
                '& .MuiTab-root.Mui-selected':{
                    backgroundColor:'var(--background)'
                }
            }}>
          <Tabs value={`dialog-tab-${value}`} onChange={handleChange} indicatorColor={false}>
            {tabsNames.map((tn) => {
                return <Tab key={`dialog-tab-${tn}`} label={tn} {...a11yProps(tn)} />
            })}

          </Tabs>
        </Box>
        <DialogTabPanel>
            
        </DialogTabPanel>
      </Box>
    )
}

export default DialogTabs;