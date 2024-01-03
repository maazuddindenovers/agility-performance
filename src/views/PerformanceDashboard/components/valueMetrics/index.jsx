import { Box, Grid, } from "@mui/material"
import SectionHead from "../../../../components/section/sectionHead"
import SectionContent from "../../../../components/section/sectionContent";
import MetricCardThree from "../../../../components/Cards/MetricCardThree";



const metricData = [
  {
    id:'12',
    text:'Become a World Class Organization where People',
    progress:40,
    tags:['lending','claims','in discovery'],
    color:'var(--customColor7)', 
  },
  {
    id:'85',
    text:'Increase senior market share within the annuity product by',
    progress:62,
    tags:['Ready for Discover','Claim'],
    color:'var(--customColor8)', 
  },
  {
    id:'12',
    text:'Become a World Class Organization where People',
    progress:63,
    tags:['lending','claims','in discovery'],
    color:'var(--customColor7)', 
  },
  {
    id:'12',
    text:'Become a World Class Organization where People',
    progress:40,
    tags:['lending','claims','in discovery'],
    color:'var(--customColor7)', 
  }
]

const ValueMetrics = () => {


     return (
        <Box>
            <SectionHead 
              label='Value Metrics' 
              filterList={[{label:'last 90 days',value:'90'}]}
            />
            <SectionContent>
            <Grid container  rowSpacing={2} columnSpacing={2}>
                    {
                        metricData.map((metric,metricIndx)=>{
                           return (
                            <Grid item xs={12} sm={6} md={4} lg={3} alignItems={'stretch'}   key={`valueMetric-${metricIndx}`}  >
                                <MetricCardThree   {...metric}        />
                            </Grid>
                           )
                        })
                    }
                </Grid>
            </SectionContent>
        </Box>
     )
}

export default ValueMetrics;