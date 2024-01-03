import { Box, Grid } from "@mui/material"
import SectionHead from "../../../../components/section/sectionHead"
import SectionContent from "../../../../components/section/sectionContent";
import MetricCardOne from "../../../../components/Cards/MetricCardOne";



const metricData = [
    {
        label:'Defect Ratio',
        valueType:'percentage',
        value:'79%',
        upDown:4,
        tooltipText:'test tooltip',
        selectOptions:[{label:'26/100 pts',value:'26/100pts'}]
    },
    {
        label:'Throughput',
        // valueType:'day',
        value:'18',
        upDown:16,
        tooltipText:'test tooltip',

    },
    {
        label:'Velocity Delta',
        // valueType:'day',
        value:'18',
        upDown:-3,
        tooltipText:'test tooltip',

    },

    {
        label:'Avg Story Cyc Time',
        valueType:'day',
        value:'10',
        upDown:-7,
        tooltipText:'test tooltip',

    },

]

const QualityMetric = () => {


     return (
        <Box>
            <SectionHead 
              label='Qualtiy Metrics' 
              filterList={[{label:'26/100 pts',value:'26/100pts'}]}
            />
            <SectionContent>
                <Grid container  rowSpacing={2} columnSpacing={2} sx={{ maxHeight:'fit-content'}}>
                    {
                        metricData.map((metric,metricIndx)=>{
                           return (
                            <Grid item xs={12} sm={6} md={12} lg={6}    key={`qualityMetric-${metricIndx}`}  >
                                <MetricCardOne   {...metric}        />
                            </Grid>
                           )
                        })
                    }
                </Grid>
            </SectionContent>
        </Box>
     )
}

export default QualityMetric;