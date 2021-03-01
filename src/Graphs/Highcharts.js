import React, {useEffect } from 'react';
import Highcharts from 'highcharts';

const Histogram = () => {
  const renderChart = () => {
    const chart = Highcharts.chart("container", {
      chart: {
        type:'column'
      },
      series: [{
        data: [50, 28, 70]
      }],
    });
    return chart;
  };

  useEffect(() => {
    const call = renderChart();
  });
  return(
    <div id='container'>

    </div>
  )
}

export default Histogram;




// import React from "react";
// import {
//   Histogram,
//   DensitySeries,
//   BarSeries,
//   withParentSize,
//   XAxis,
//   YAxis
// } from "@data-ui/histogram";

// const ResponsiveHistogram = withParentSize(
//   ({ parentWidth, parentHeight, ...rest }) => (
//     <Histogram width={parentWidth} height={parentHeight} {...rest} />
//   )
// );

// const rawData = Array(100).fill().map(Math.random);

// export default function App() {
//   return (
//     <div className="App" style={{ height: 300 }}>
//       <ResponsiveHistogram
//         ariaLabel="histogram"
//         orientation="vertical"
//         cumulative={false}
//         normalized={true}
//         binCount={25}
//         valueAccessor={(datum) => datum}
//         binType="numeric"
//       >
//         <DensitySeries animated rawData={rawData} />
//         <XAxis />
//         <YAxis />
//       </ResponsiveHistogram>
//     </div>
//   );
// }





// import * as React from "react";
// import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Legend, Category, Tooltip, DataLabel, HistogramSeries } from '@syncfusion/ej2-react-charts';
// import { Browser } from '@syncfusion/ej2-base';
// import { SampleBase } from '../common/sample-base';
// export let chartData = [];
// let points = [5.250, 7.750, 0, 8.275, 9.750, 7.750, 8.275, 6.250, 5.750,
//     5.250, 23.000, 26.500, 27.750, 25.025, 26.500, 26.500, 28.025, 29.250, 26.750, 27.250,
//     26.250, 25.250, 34.500, 25.625, 25.500, 26.625, 36.275, 36.250, 26.875, 40.000, 43.000,
//     46.500, 47.750, 45.025, 56.500, 56.500, 58.025, 59.250, 56.750, 57.250,
//     46.250, 55.250, 44.500, 45.525, 55.500, 46.625, 46.275, 56.250, 46.875, 43.000,
//     46.250, 55.250, 44.500, 45.425, 55.500, 56.625, 46.275, 56.250, 46.875, 43.000,
//     46.250, 55.250, 44.500, 45.425, 55.500, 46.625, 56.275, 46.250, 56.875, 41.000, 63.000,
//     66.500, 67.750, 65.025, 66.500, 76.500, 78.025, 79.250, 76.750, 77.250,
//     66.250, 75.250, 74.500, 65.625, 75.500, 76.625, 76.275, 66.250, 66.875, 80.000, 85.250,
//     87.750, 89.000, 88.275, 89.750, 97.750, 98.275, 96.250, 95.750, 95.250
// ];
// points.map((value) => {
//     chartData.push({
//         y: value
//     });
// });
// const SAMPLE_CSS = `
//     .control-fluid {
// 		padding: 0px !important;
//     }`;
// export class Histogram extends SampleBase {
//     render() {
//         return (<div className='control-pane'>
//                 <style>
//                     {SAMPLE_CSS}
//                 </style>
//                 <div className='control-section'>
//                     <ChartComponent id='charts' style={{ textAlign: "center" }} load={this.load.bind(this)} primaryXAxis={{ majorGridLines: { width: 0 }, title: 'Score of Final Examination', minimum: 0, maximum: 100 }} primaryYAxis={{
//             title: 'Number of Students',
//             minimum: 0, maximum: 50, interval: 10,
//             majorTickLines: { width: 0 }, lineStyle: { width: 0 }
//         }} chartArea={{ border: { width: 0 } }} tooltip={{ enable: true }} width={Browser.isDevice ? '100%' : '60%'} legendSettings={{ visible: false }} title='Examination Result' loaded={this.onChartLoad.bind(this)}>
//                         <Inject services={[HistogramSeries, Legend, Tooltip, Category, DataLabel]}/>
//                         <SeriesCollectionDirective>
//                             <SeriesDirective dataSource={chartData} yName='y' name='Score' type='Histogram' marker={{ dataLabel: { visible: true, position: 'Top', font: { fontWeight: '600', color: '#ffffff' } } }} showNormalDistribution={true} columnWidth={0.99} binInterval={20}>
//                             </SeriesDirective>
//                         </SeriesCollectionDirective>
//                     </ChartComponent>
//                 </div>
//             </div>);
//     }
//     onChartLoad(args) {
//         let chart = document.getElementById('charts');
//         chart.setAttribute('title', '');
//     }
//     ;
// }




// import React from 'react';
// import ReactApexChart from 'react-apexcharts'
// class SampleChart extends React.Component {
//     constructor(props) {
//       super(props);

//       this.state = {
      
//         series: [{
//           name: 'PRODUCT A',
//           data: [44, 55, 41, 67, 22, 43]
//         }, {
//           name: 'PRODUCT B',

          
//           data: [13, 23, 20, 8, 13, 27]
//         }, {
//           name: 'PRODUCT C',
//           data: [11, 17, 15, 15, 21, 14]
//         }, {
//           name: 'PRODUCT D',
//           data: [21, 7, 25, 13, 22, 8]
//         }],
//         options: {
//           chart: {
//             type: 'bar',
//             height: 350,
//             stacked: true,
//             toolbar: {
//               show: true
//             },
//             zoom: {
//               enabled: true
//             }
//           },
//           responsive: [{
//             breakpoint: 480,
//             options: {
//               legend: {
//                 position: 'bottom',
//                 offsetX: -10,
//                 offsetY: 0
//               }
//             }
//           }],
//           plotOptions: {
//             bar: {
//               horizontal: false,
//             },
//           },
//           xaxis: {
//             type: 'datetime',
//             categories: ['01/01/2011 GMT', '01/02/2011 GMT', '01/03/2011 GMT', '01/04/2011 GMT',
//               '01/05/2011 GMT', '01/06/2011 GMT'
//             ],
//           },
//           legend: {
//             position: 'right',
//             offsetY: 40
//           },
//           fill: {
//             opacity: 1
//           }
//         },
//       };
//     }

//     render() {
//       return (
        

//   <div id="chart">
// <ReactApexChart options={this.state.options} series={this.state.series} type="bar" height={350} />
// </div>


//       );
//     }
// }

// export default SampleChart;

