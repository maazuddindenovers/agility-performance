import {  Grid } from "@mui/material"
import MetricCardOne from "../../../../components/Cards/MetricCardOne";
import { memo } from "react";



const metricData = [
    {
        label:'Predictability',
        valueType:'percentage',
        value:'79%',
        upDown:4,
        tooltipText:'test tooltip',
        selectOptions:[{value:'story',label:'Story Level'}]
    },
    {
        label:'Throughput',
        // valueType:'day',
        value:'18',
        upDown:16,
        tooltipText:'test tooltip',
        selectOptions:[{value:'feature',label:'Feature Level'}]
    },
    {
        label:'Velocity Delta',
        // valueType:'day',
        value:'18',
        upDown:-3,
        tooltipText:'test tooltip',
        selectOptions:[{value:'sprint',label:'sprint'}]
    },

    {
        label:'Avg Story Cyc Time',
        valueType:'day',
        value:'10',
        upDown:-7,
        tooltipText:'test tooltip',
        selectOptions:[{value:'sprint',label:'sprint'}]
    },

]

// eslint-disable-next-line react/display-name
const FlowStatsData = memo(() => {

     return (
            <Grid container  rowSpacing={2} columnSpacing={2}>
                {
                    metricData.map((metric,metricIndx)=>{
                        return (
                        <Grid item xs={12} sm={6} md={4} lg={3}    key={`flowMetric-${metricIndx}`}  >
                            <MetricCardOne   {...metric}        />
                        </Grid>
                        )
                    })
                }
            </Grid>
    
     )
})

export default FlowStatsData;