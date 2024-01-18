import { Box, IconButton, Typography } from "@mui/material"
import DialogTable from "./dialog/dialogTable"
import ProgressBar from "../../../components/ProgressBar";
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';


const AddProject = () => {
    return (
        <Box sx={{display:'flex', alignItems:'center'}}>
            <IconButton>
                <AddCircleRoundedIcon color="primary" fontSize="20px" />
            </IconButton>
            <Typography sx={{fontSize:'16px', lineHeight:'21px', fontWeight:500, textTransform:"capitalize" }}>Add Project</Typography>
        </Box>
    )
}

const SimpleHead = ({label}) => {
    return <Typography sx={{fontSize:'16px', lineHeight:'21px', fontWeight:500, textTransform:"capitalize" }}>{label}</Typography>
}



const heads = [
    <AddProject key="addProjectKey" />,
    <SimpleHead key="stage" label="Stage" />,
    <SimpleHead key="Tags" label="Tags" />,
    <SimpleHead key="owner Team" label="owner Team" />,
    <SimpleHead key="Supporting Teams" label="Supporting Teams" />,
    <SimpleHead key="Progress" label="Progress" />,
    <SimpleHead key="Actions" label="Actions" />
]







const BoardProject = () => {

    return (
        <Box>
            <Box sx={{maxWidth:'280px',my:1, ml:['unset','auto','auto']}}>
                <Typography sx={{color:'var(--customColor29)', fontWeight:600, mb:1, fontSize:'14px'}}>
                    Overall Initiative Progress
                </Typography> 
                <ProgressBar progress={40} />               
            </Box>
            <DialogTable 
                heads={heads}
                rowData={[]}
            />
        </Box>

    )
}

export default BoardProject;