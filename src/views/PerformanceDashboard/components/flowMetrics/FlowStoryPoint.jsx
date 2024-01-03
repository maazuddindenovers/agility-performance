import { Box } from "@mui/material";
import Linechart from "../../../../components/charts/linechart";
import Highcharts from "highcharts";
// import { render } from "react-dom";




const options = [{
    customTitle:'Story Points Delivered',
    customSubTitle:'Q2 - 2022',
    chart: {
      type: "areaspline",
      height:300,
      styleMode:true,

     
    },
  
    title: {
        text:'' 
    },

    tooltip: {
      borderRadius:10,
      formatter: function () {
   
          return `<div> <div class="tooltipdot" style="color:${this.color};" >●</div> Target Point: ${this.y}</div>`;

        

      }
    },
    legend:{
        enabled:false,  
        align:'right',
        verticalAlign:'top',
        itemMarginBottom:30,
        y:-30
    },
    yAxis:{
        title:'',
   
        visible: true,
        // tickInterval:1,
        // categories:[0,10,20,30,40,50,60,70,80,90]
        lineWidth:1,
        tickWidth:1,
        tickColor:'#655B96',
        lineColor:'#655B96',
    },
    xAxis:{
      
        title:'',
        
        // tickInterval:1,
        visible: true,
        categories:['Iteration 1', 'Iteration 2', 'Iteration 3', 'Iteration 4', 'Iteration 5', 'Iteration 6', 'Iteration 7',],
        tickWidth:1,
        tickmarkPlacement:'on',
        tickColor:'#655B96',
        lineColor:'#655B96',
    },
    plotOptions:{
      areaspline: {
        pointPlacement:'on',
        
        
        // stacking:'normal',
        fillOpacity: 0,
        dataLabels: {
          className:'flowpointChartDataLabels',
          enabled: true,
          // padding:5,
          backgroundColor:'#EFEFEF',
          borderRadius:6,
          verticalAlign:'top',
          style:{
            textShadow:'none',
            
          },
          textPath:{
            enabled:false,
            attributes:{
              strokeWidth: 0,
            }
          },
          y:8,
  
      },
      //   fillColor: {
      //     linearGradient: [0, 0, 0, 400],
      //     stops: [
      //         [0, Highcharts.getOptions().colors[0]],
      //         [0.5, Highcharts.color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
      //     ]
      // },
        lineWidth:3,
        marker:{
          radius:6,
          symbol:'circle',
          fillColor: '#FFFFFF',
        
          lineColor:null,
          lineWidth:2.5,
        }
    },
      
    },
    
    series: [
      {
        name:"Total Actual Points",
        color:'#E33223',
        data: [70,60, 80, 50 ,60, 80, 55],
          fillColor: {
              linearGradient: { x1: 0, x2: 0, y1: 0, y2: 1 },
              stops: [
                  [0, Highcharts.color('#E33223').setOpacity(0.2).get('rgba')],
                  // [0.2, Highcharts.color('#E33223').setOpacity(0.2).get('rgba')],
                  [0.8, Highcharts.color('#E33223').setOpacity(0).get('rgba')]
              ]
          },
      },
      {
        color:'#55A5DD',
        name:"Total Target Points",
        data: [0,50, 10, 30, 10, 50, 77,],
        fillColor: {
          linearGradient: { x1: 0, x2: 0, y1: 0, y2: 1 },
          stops: [
              [0, Highcharts.color('#55A5DD').setOpacity(0.2).get('rgba')],
              // [0.2, Highcharts.color('#55A5DD').setOpacity(0.2).get('rgba')],
              [0.8, Highcharts.color('#55A5DD').setOpacity(0).get('rgba')]
          ]
      },
      },
      {
        color:'#64B35D',
        name:"Total Target Scope",
        data: [20, 40, 10, 4, 60, 40,  20,],
        fillColor: {
          linearGradient:  { x1: 0, x2: 0, y1: 0, y2: 1 },
          stops: [
              [0, Highcharts.color('#64B35D').setOpacity(0.2).get('rgba')],
              // [0.2, Highcharts.color('#64B35D').setOpacity(0.2).get('rgba')],
              [0.8, Highcharts.color('#64B35D').setOpacity(0).get('rgba')]
          ]
      },
      }
    ]
  },
  {
    customTitle:'Story Points Delivered 1',
    customSubTitle:'Q2 - 2022 1',
    chart: {
      type: "areaspline",
      height:300,
      styleMode:true,

     
    },
  
    title: {
        text:'' 
    },

    tooltip: {
      borderRadius:10,
      formatter: function () {
   
          return `<div> <div class="tooltipdot" style="color:${this.color};" >●</div> Target Point: ${this.y}</div>`;

        

      }
    },
    legend:{
        enabled:false,  
        align:'right',
        verticalAlign:'top',
        itemMarginBottom:30,
        y:-30
    },
    yAxis:{
        title:'',
   
        visible: true,
        // tickInterval:1,
        // categories:[0,10,20,30,40,50,60,70,80,90]
        lineWidth:1,
        tickWidth:1,
        tickColor:'#655B96',
        lineColor:'#655B96',
    },
    xAxis:{
      
        title:'',
        
        // tickInterval:1,
        visible: true,
        categories:['Iteration 1', 'Iteration 2', 'Iteration 3', 'Iteration 4', 'Iteration 5', 'Iteration 6', 'Iteration 7',],
        tickWidth:1,
        tickmarkPlacement:'on',
        tickColor:'#655B96',
        lineColor:'#655B96',
    },
    plotOptions:{
      areaspline: {
        pointPlacement:'on',
        
        
        // stacking:'normal',
        fillOpacity: 0,
        dataLabels: {
          className:'flowpointChartDataLabels',
          enabled: true,
          // padding:5,
          backgroundColor:'#EFEFEF',
          borderRadius:6,
          verticalAlign:'top',
          style:{
            textShadow:'none',
            
          },
          textPath:{
            enabled:false,
            attributes:{
              strokeWidth: 0,
            }
          },
          y:8,
  
      },
      //   fillColor: {
      //     linearGradient: [0, 0, 0, 400],
      //     stops: [
      //         [0, Highcharts.getOptions().colors[0]],
      //         [0.5, Highcharts.color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
      //     ]
      // },
        lineWidth:3,
        marker:{
          radius:6,
          symbol:'circle',
          fillColor: '#FFFFFF',
        
          lineColor:null,
          lineWidth:2.5,
        }
    },
      
    },
    
    series: [
      {
        name:"Total Actual Points",
        color:'#E33223',
        data: [70,60, 80, 50 ,60, 80, 55],
          fillColor: {
              linearGradient: { x1: 0, x2: 0, y1: 0, y2: 1 },
              stops: [
                  [0, Highcharts.color('#E33223').setOpacity(0.2).get('rgba')],
                  // [0.2, Highcharts.color('#E33223').setOpacity(0.2).get('rgba')],
                  [0.8, Highcharts.color('#E33223').setOpacity(0).get('rgba')]
              ]
          },
      },
      {
        color:'#55A5DD',
        name:"Total Target Points",
        data: [0,50, 10, 30, 10, 50, 77,],
        fillColor: {
          linearGradient: { x1: 0, x2: 0, y1: 0, y2: 1 },
          stops: [
              [0, Highcharts.color('#55A5DD').setOpacity(0.2).get('rgba')],
              // [0.2, Highcharts.color('#55A5DD').setOpacity(0.2).get('rgba')],
              [0.8, Highcharts.color('#55A5DD').setOpacity(0).get('rgba')]
          ]
      },
      },
      {
        color:'#64B35D',
        name:"Total Target Scope",
        data: [20, 40, 10, 4, 60, 50,  20,],
        fillColor: {
          linearGradient:  { x1: 0, x2: 0, y1: 0, y2: 1 },
          stops: [
              [0, Highcharts.color('#64B35D').setOpacity(0.2).get('rgba')],
              // [0.2, Highcharts.color('#64B35D').setOpacity(0.2).get('rgba')],
              [0.8, Highcharts.color('#64B35D').setOpacity(0).get('rgba')]
          ]
      },
      }
    ]
  }
];
  

const FlowStoryPoint = () => {

    return (
      <Box>
        <Box className="flowstorypoint">

            <Linechart  options={options}/>


        </Box>
      </Box>  
    )
}

export default FlowStoryPoint;