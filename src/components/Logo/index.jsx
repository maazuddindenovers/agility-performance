import { Box } from "@mui/material";
import logoImg from "../../assets/images/logo.svg"



const Logo = () => {
    return (
        <Box 
            sx={{
                width:'100%',
                maxWidth:'180px',
                display:'flex',
                placeItems:'center',
            }}
        >
            <img src={logoImg} width={'100%'} />
        </Box>
    )
}


export default Logo;