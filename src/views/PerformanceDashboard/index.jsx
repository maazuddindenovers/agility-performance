import { Box } from "@mui/material"

import FlowMetrics from "./components/flowMetrics";
import ValueMetrics from "./components/valueMetrics";
import QualityMetric from "./components/qualtiyMetrics";
import HappinessMetrics from "./components/happinessMetric";



const PerformanceDashboard = () => {
    return (
        <Box >
            <FlowMetrics />
            <ValueMetrics />
            <Box sx={{display:'flex', gap:2,flexDirection:['column','column','row']}}>
                <Box sx={{flex:1,}} >
                    <QualityMetric />  
                </Box>
                <Box sx={{flex:1}}>
                    <HappinessMetrics />
                </Box>
            </Box>
        </Box>
    )
}

export default PerformanceDashboard;