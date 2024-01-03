import { Icon } from "@iconify/react";
import { Box, Grid, Typography } from "@mui/material";




const Bar = ({value=0}) => {

    return (
        <Box sx={{borderRadius:'8px 8px 0px 0px', height:'100%', backgroundColor:'var(--customColor20)', display:'flex', alignItems:'flex-end', overflow:'hidden'}}>
            <Box sx={{borderRadius:'8px 8px 0px 0px', backgroundColor:'var(--customColor21)', height:`${(value / 100) * 100 }%`, width:'100%'}} />
        </Box>
    )
}


const CompareBar = ({value1=0,value2=0}) => {
    
    const percent1 = (value1  / 100) * 100;
    const percent2 = (value2 / 100) * 100;
    
    return (
        <Box sx={{clipPath: `polygon(100% ${(percent2 > 0 ? 100-(percent2 - 1) : percent2 )}%, 100% 100%, 0 100%, 0 ${(percent1 > 0  ? 100-( percent1 - 1 ): percent1) }%)`,borderRadius:'8px 8px 0px 0px', height:'100%', backgroundColor:'success.main', display:'flex', alignItems:'flex-end', overflow:'hidden'}}>
        </Box>
    )
}


const BarText = ({value=0}) => {
    return (
        <Box sx={{textAlign:'center', mb:2}}>
            <Typography sx={{fontSize:"clamp(20px, 2vw, 24px)", fontWeight:600,}}>
                    {value}
            </Typography>
            <Typography sx={{color:'var(--customColor22)', fontSize:'clamp(8px, 2vw, 11px)', fontWeight:400}}>
                Number of Days
            </Typography>
        </Box>
    )
}

const BarCompare = ({data1=75,data2=26}) => {
    return (
        <Box sx={{width:"100%", aspectRatio:['1/1.2','1/2'], maxHeight:'400px',display:'flex', flexDirection:'column', }}>
            <Grid container spacing={1} >
                <Grid item xs={4}><BarText value={data1} /></Grid>
                <Grid item xs={4}></Grid>
                <Grid item xs={4}><BarText value={data2} /></Grid>
            </Grid>
            <Grid container spacing={1} flex={1} >
                <Grid item xs={4}><Bar value={data1} /></Grid>
                <Grid item xs={4} sx={{position:'relative'}}>
                        <CompareBar  value1={data1} value2={data2} />
                        <Icon 
                            icon='fa6-solid:arrow-right' 
                            style={{    
                                fontSize:'1.2rem',
                                color:'var(--customColor22)', 
                                position:'absolute',
                                zIndex:2,
                                top:'15%',
                                left:'50%'
                            }} 
                        />
                </Grid>
                <Grid item xs={4}><Bar value={data2} /></Grid>
            </Grid>
        </Box>
    )
}


export default BarCompare;
