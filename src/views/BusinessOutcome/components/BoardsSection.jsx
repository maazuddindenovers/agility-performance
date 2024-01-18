import {  Grid } from "@mui/material";
import BoardColumn from "./BoardColumn";

import useBoard from "../hook/useBoard";





const BoardsSection = () => {


    const {columnHeadData,filteredData} = useBoard()

       


    return (
     
        <Grid container spacing={2} sx={{my:1}}>
            <Grid item xs={12} sm={6} md={3}>
                <BoardColumn headerData={columnHeadData[0] } columnData={filteredData[columnHeadData[0]?.id]}/>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
                <BoardColumn headerData={columnHeadData[1]}  columnData={filteredData[columnHeadData[1]?.id]} />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
                <BoardColumn headerData={columnHeadData[2]} columnData={filteredData[columnHeadData[2]?.id]} />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
                <BoardColumn headerData={columnHeadData[3]}  columnData={filteredData[columnHeadData[3]?.id]}/>
            </Grid>
        </Grid>
    )
}

export default BoardsSection;