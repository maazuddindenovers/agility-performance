import { Box, Button,} from "@mui/material"
import SectionHead from "../../../../components/section/sectionHead"
import SectionContent from "../../../../components/section/sectionContent";
import FlowStatsData from "./FlowStatsData";
import FlowStoryPoint from "./FlowStoryPoint";
import FlowFeature from "./FlowFeature";
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';



const FlowMetrics = () => {


    // const ExtraComp = ()

     return (
        <Box>
            <SectionHead 
              label='Flow Metrics' 
              filterList={[{label:'last 90 days',value:'90'}]}
              extraComp={<Button variant="text" startIcon={<SettingsOutlinedIcon />} sx={{textTransform:"capitalize"}}>Dashboard Settings</Button>}
            />
            <SectionContent>
                <Box>
                    <FlowStatsData />
                </Box>
                <Box>
                    <FlowStoryPoint />
                </Box>
                <Box>
                    <FlowFeature />
                </Box>
            </SectionContent>
          
        </Box>
     )
}

export default FlowMetrics;