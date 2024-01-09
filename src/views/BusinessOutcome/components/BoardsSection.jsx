import {  Grid } from "@mui/material";
import BoardColumn from "./BoardColumn";





const BoardsSection = () => {

    return (
        <Grid container spacing={2} sx={{my:1}}>
            <Grid item xs={12} sm={6} md={3}>
                <BoardColumn headerData={{color:'primary.main', text:'3 Year Outcomes'}}/>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
                <BoardColumn headerData={{color:'primary.main', text:'1 Year Outcomes'}} />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
                <BoardColumn headerData={{color:'var(--customColor24)', text:'Hr, Payroll and Training'}} />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
                <BoardColumn headerData={{color:'var(--customColor24)', text:'Wealthnation'}} />
            </Grid>
        </Grid>
    )
}

export default BoardsSection;