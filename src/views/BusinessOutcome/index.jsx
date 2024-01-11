import {  Container } from "@mui/material";
import BoardHeader from "./components/BoardHeader";
import BoardsSection from "./components/BoardsSection";
import BoardDialog from "./components/dialog/dialogBoard";




const BusinessOutcomes = () => {
    return (
        <Container maxWidth="xl" sx={{m:'auto', mt:2 }} >
            <BoardHeader />
            <BoardsSection />
            <BoardDialog />
        </Container>
    ) 
}
 

export default BusinessOutcomes;