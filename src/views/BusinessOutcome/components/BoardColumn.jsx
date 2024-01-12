import { Box } from "@mui/material"
import AddCircleIcon from '@mui/icons-material/AddCircle';


const Header = ({color='', text=''}) => {
    return (
        <Box sx={{
            display:'flex', 
            gap:1,
            alignItems:'center',
            fontWeight:"500", 
            backgroundColor:color,
            borderTopLeftRadius:'5px', borderTopRightRadius:'5px',
            p:1,
            color:'white',
        }}>
            <AddCircleIcon />
            <Box sx={{}}>
                {text} 
            </Box>
        </Box>
    )
}


const BoardColumn = ({headerData=null}) => {
    
    return (
        <Box sx={{minHeight:100, borderTopLeftRadius:'5px', borderTopRightRadius:'5px', backgroundColor:'var(--customColor25)' }} >
          { !!headerData &&  <Header color={headerData.color} text={headerData.text} /> } 
          <Box sx={{p:1}}>

          </Box>
        </Box>
    )
}


export default BoardColumn;