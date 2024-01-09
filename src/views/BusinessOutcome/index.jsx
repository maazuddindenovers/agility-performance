import { Box } from "@mui/material";
import BoardHeader from "./components/BoardHeader";
import BoardsSection from "./components/BoardsSection";
import OutcomeDialog from "./components/outcomeDialog/outcomeDialog";



const BusinessOutcomes = () => {
    return (
        <Box sx={{mt:2 }} >
            <BoardHeader />
            <BoardsSection />
            <OutcomeDialog />
        </Box>
    ) 
}
 

export default BusinessOutcomes;