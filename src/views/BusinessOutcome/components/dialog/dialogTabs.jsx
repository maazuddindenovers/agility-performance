import { Box, Tab, Tabs } from "@mui/material";
import { Children,isValidElement,useState } from "react";



function a11yProps(index) {
    return {
      id: `dialog-tab-${index}`,
      'aria-controls': `dialog-tab-${index}`,
    };
  }



export  function DialogTabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`dialog-tab-${index}`}
        aria-labelledby={`dialog-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ py: 1 }}>
            {children}
          </Box>
        )}
      </div>
    );
  }
  


const  DialogTabs = ({children,activeTabIndex=0}) => {
    const [activeTab, setActiveTab] = useState(activeTabIndex);

    const handleChange = (event, newValue) => {
      setActiveTab(newValue);
    };

    return (
        <Box sx={{ width: '100%', py:2, pt:[4,2] }}>
        <Box sx={{ 
                borderBottom: 2, 
                borderColor: 'divider' ,
                '& .MuiTabs-root':{
                  minHeight:['40px','48px'],
                },
                '& .MuiTabs-scroller':{
                  overflow:'auto !important',
                },
                '& .MuiTab-root':{

                        backgroundColor:"var(--customColor32)",
                        border:'0.5px solid var(--customColor27)',
                        borderBottom:0,
                        color:'var(--customColor29)',
                        textTransform:'uppercase',
                         fontWeight:600,
                         fontSize:['12px','14px'],
                         borderTopLeftRadius:'3px',
                         borderTopRightRadius:'3px',
                         px:['18px','22px'],
                         py:['14px','22px'],
                         minHeight:['40px','48px']
                },
                '& .MuiTab-root.Mui-selected':{
                    backgroundColor:'var(--background)',
                    color:'currentcolor'
                }
            }}>
          <Tabs value={activeTab} onChange={handleChange}   indicatorColor={false}>
            {
                Children.map(children,(child,index) => {
                  if(!isValidElement(child)) return null;
                  const {tabLabel} = child.props;
                  return <Tab key={`dialog-tab-${tabLabel}`} label={tabLabel} {...a11yProps(index)} />
                })
            }    

          </Tabs>
        </Box>
       
       {
        Children.map(children,(child,index) => {
          return (
            <DialogTabPanel value={activeTab} index={index} >
              {child}
            </DialogTabPanel> 
          )
        })
       }

      </Box>
    )
}

export default DialogTabs;