import { Box, Divider, Grid, Typography, useTheme, } from "@mui/material"
import SectionHead from "../../../../components/section/sectionHead"
import SectionContent from "../../../../components/section/sectionContent";
import MetricCardTwo from "../../../../components/Cards/MetricCardTwo";
import { Fragment } from "react";


const metricdata = [
  {
    label:'Team',
    confidence:{
      label:'confidence',
      value:'44%',
      upDown:4, 
    },
    happiness:{
      label:'Happiness',
      value:'26%',
      upDown:6,
    }
  },
  {
    label:'Stackholder',
    confidence:{
      label:'confidence',
      value:'10%',
      upDown:4, 
    }
  },
  {
    label:'Product',
    confidence:{
      label:'confidence',
      value:'45%',
      upDown:4, 
    }
  }
]



const HappinessMetrics = () => {

  const theme = useTheme()

     return (
        <Box >
            <SectionHead 
              label='Happiness Metrics' 

            />
            <SectionContent>
                <Box   >
                  {
                    metricdata.map((data,dataInd) => {
                      return (
                        <Fragment key={`hapinesmetricbox-${dataInd}`} >
                        <Grid container  rowSpacing={2} columnSpacing={[1,1,1,2]}>
                        <Grid item xs={12} sm={4} >
                              <Typography
                                sx={{fontSize:"clamp(14px,2vw,16px)", marginLeft:['0','5%'], mb:['3%','5%'], mt:[0,'5%']}}
                              >
                                {data.label}
                              </Typography>

                          </Grid>
                          {!!data?.confidence &&
                           <Grid item xs={12} sm={4}>
                             <MetricCardTwo 
                                label={data.confidence.label} 
                                value={data.confidence.value}
                                upDown={data.confidence.upDown}
                                labelIcon={'fa-regular:thumbs-up'}
                                labelIconColor={theme.palette.success.contrastText}
                              />
                          </Grid>
                          }
                          {!!data?.happiness &&  <Grid item xs={12} sm={4}>
                            <MetricCardTwo 
                                label={data.happiness.label} 
                                value={data.happiness.value}
                                upDown={data.happiness.upDown}
                                labelIcon={'fa-regular:smile'}
                                labelIconColor={theme.palette.primary.main}
                              />
                            </Grid>
                            }
                         </Grid>
                        {!!(dataInd < metricdata.length - 1)&& <Divider sx={{my:[3,'2.3%','2.3%','2%']}}  />}
                      </Fragment>
                      )
                    })
                  }
                  <Box>
                  </Box>                  
                </Box>
            </SectionContent>
        </Box>
     )
}

export default HappinessMetrics;