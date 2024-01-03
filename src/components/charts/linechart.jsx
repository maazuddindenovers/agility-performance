import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts"
import { Box } from "@mui/material";
import { useMemo, useState } from "react";
import { Icon } from "@iconify/react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';



const ChartHead = ({title, subTitle}) => {
    return (
        <Box sx={{display:'flex', flexWrap:'wrap', gap:2, alignItems:'center'}}>
            <Box sx={{fontSize:"clamp(20px, 2vw, 24px)", fontWeight:400,textTransform:'capitalize'}}>
                {title}
            </Box>
            <Box sx={{borderRadius:'4px',backgroundColor:"var(--customColor9)", padding:'6px 10px', fontSize:'clamp(14px, 1vw, 16px)', fontWeight:400}}>
                {subTitle}
            </Box>
        </Box>
    )
}

const ChartLegend = ({legends=[]}) => {

    return (
        <Box sx={{backgroundColor:'var(--customColor9)', borderRadius:'4px', px:2, py:'5px', fontSize:'clamp(12px, 2vw, 14px)',}}>
            {
                legends.map((leg,legKey)=>{
                    return(
                        <Box sx={{display:'inline-flex', mr:2,'&:last-child':{mr:0}, alignItems:'center',gap:1}} key={`legKey${legKey}`}>
                            <Box sx={{backgroundColor:leg.color,width:'100%', minWidth:'30px', maxWidth:'40px', height:'3px', borderRadius:'4px'}}/>
                            <Box sx={{textTransform:'capitalize',whiteSpace:'pre' }}>{leg.label}:</Box>
                            <Box sx={{fontWeight:600}}>{leg.value}</Box>
                        </Box>
                    )
                })
            }
        </Box>
    )
}





const Linechart = ({options,}) => {

    const [active, setActive] = useState(0);
    const legendData = useMemo(() => {
       
        let legData = []
        if(options[active]?.series){
            options[active]?.series?.forEach(element => {
                legData.push({color:element.color,label:element?.name || '',value:element?.data.reduce((v1,v2) => v1+v2)|| 0})
            });
        }

        return legData
    },[options,active])



    return (
        <Box>
            <Box sx={{display:'flex', justifyContent:'space-between', flexDirection:['column', 'column', 'row'], gap:2, alignItems:['flex-start','flex-start','center'],mb:3,pr:[0,0,3], position:'relative'}}>
                    <Box sx={{position:'absolute', top:'8px', right:0}}>
                        <Icon icon='fa-solid:ellipsis-v' color="var(--customColor4)" />
                    </Box>
                <Box>
                    <ChartHead title={options[active].customTitle} subTitle={options[active].customSubTitle} />
                </Box>
                <Box>
                    <ChartLegend legends={legendData} />
                  
                </Box>
            </Box>
            <Box>
            <Swiper
                // spaceBetween={50}
                modules={[Navigation, Pagination,]}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                onSlideChange={(swiper) => setActive(swiper.realIndex)}
            >
            {options.map((_,optInd) => {
                return (
                <SwiperSlide key={`linechartslide-${optInd}`}>
                    <Box sx={{width:'100%', aspectRatio:['1/0.5','unset'], '&>div':{margin:'auto',width:'93%',marginBottom:"3%"}}}>
                        <HighchartsReact highcharts={Highcharts} options={options[optInd]}  />
                    </Box>
                </SwiperSlide>
                )
            })}
           


        </Swiper>
            </Box>

        </Box>        
    )
}


export default Linechart;