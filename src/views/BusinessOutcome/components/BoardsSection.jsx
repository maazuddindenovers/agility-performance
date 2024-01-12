import {  Grid } from "@mui/material";
import BoardColumn from "./BoardColumn";

import useBoard from "../hook/useBoard";





const BoardsSection = () => {


    const {columnHeadData} = useBoard()

       


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