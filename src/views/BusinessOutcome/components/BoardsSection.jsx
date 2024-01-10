import {  Grid } from "@mui/material";
import BoardColumn from "./BoardColumn";
import { useSelector } from "react-redux";
import { useMemo } from "react";





const BoardsSection = () => {


    const boardType = useSelector((state) => state.board.boardType); 
    
    const columnHeadData = useMemo(() => {
        switch (boardType){
            case 'outcomes':
                return [
                    {color:'primary.main', text:'3 Year Outcomes'},
                    {color:'primary.main', text:'1 Year Outcomes'},
                    {color:'var(--customColor24)', text:'Hr, Payroll and Training'},
                    {color:'var(--customColor24)', text:'Wealthnation'},
                ]
            case 'projects':
            case 'deliverables':
                return [
                    {color:'primary.main', text:'idea'},
                    {color:'primary.main', text:'opportunity assessment'},
                    {color:'primary.main', text:'approved'},
                    {color:'primary.main', text:'fund'},
                ]
           
            default:
                return []
        }

    },[boardType])


    return (
     
        <Grid container spacing={2} sx={{my:1}}>
            <Grid item xs={12} sm={6} md={3}>
                <BoardColumn headerData={columnHeadData[0] }/>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
                <BoardColumn headerData={columnHeadData[1]} />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
                <BoardColumn headerData={columnHeadData[2]} />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
                <BoardColumn headerData={columnHeadData[3]} />
            </Grid>
        </Grid>
    )
}

export default BoardsSection;