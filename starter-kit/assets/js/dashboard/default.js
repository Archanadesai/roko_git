//  biticon -------
var expensesOption = {
    series: [
      {
        name: 'series2',
        data: [15, 30, 40, 30, 20, 15, 25, 35, 25, 30, 55, 50, 45, 40, 25, 15, 30, 40, 30, 40, 55, 45, 15, 25, 15, 30, 40, 30, 25, 15, 35, 40],
      },
    ],
    colors: [ "rgba(98, 113, 235, 0.2)" , "rgba(98, 113, 235, 0.2)" , "rgba(98, 113, 235, 0.2)" , "rgba(98, 113, 235, 0.2)" , "rgba(98, 113, 235, 0.2)" , "rgba(98, 113, 235, 0.2)" , "rgba(98, 113, 235, 0.2)" , "rgba(98, 113, 235, 0.2)" , "rgba(98, 113, 235, 0.2)" , "rgba(98, 113, 235, 0.2)" , "rgba(98, 113, 235, 0.2)" , "rgba(98, 113, 235, 0.2)" , "rgba(98, 113, 235, 0.2)" , "rgba(98, 113, 235, 0.2)" , "rgba(98, 113, 235, 0.2)" , "rgba(98, 113, 235, 0.2)", woolAdminConfig.primary, woolAdminConfig.primary, woolAdminConfig.primary, woolAdminConfig.primary, woolAdminConfig.primary, woolAdminConfig.primary, woolAdminConfig.primary, "rgba(98, 113, 235, 0.2)" , "rgba(98, 113, 235, 0.2)" , "rgba(98, 113, 235, 0.2)" , "rgba(98, 113, 235, 0.2)" , "rgba(98, 113, 235, 0.2)" , "rgba(98, 113, 235, 0.2)" , "rgba(98, 113, 235, 0.2)" , "rgba(98, 113, 235, 0.2)" , "rgba(98, 113, 235, 0.2)" ],
    chart: {
      height: 95,
      type: 'bar',
      offsetY: 3,
      sparkline: {
        enabled: true,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: 'smooth',
    },        
    plotOptions: {
      bar: {
        borderRadius: 3,
        distributed: true,
        columnWidth: "40%",
        barHeight: '38%',
        dataLabels: {
          position: 'top',
        },
      }
    },
    xaxis: {
      show: false,
    },
  };
  var expensesEl = new ApexCharts(document.querySelector('#income-chart'), expensesOption);
  expensesEl.render();

// ------ethereumchart

var expensesOption = {
  series: [
    {
      name: 'series2',
      data: [15, 30, 40, 30, 20, 15, 25, 35, 25, 30, 55, 50, 45, 40, 25, 15, 30, 40, 30, 40, 55, 45, 15, 25, 15, 30, 40, 30, 25, 15, 35, 40],
    },
  ],
  colors: [ "rgba(255, 133, 117, 0.2)" , "rgba(255, 133, 117, 0.2) " , "rgba(255, 133, 117, 0.2) " , "rgba(255, 133, 117, 0.2) " , "rgba(255, 133, 117, 0.2) " , "rgba(255, 133, 117, 0.2) " , "rgba(255, 133, 117, 0.2) " , "rgba(255, 133, 117, 0.2) " , woolAdminConfig.secondary , woolAdminConfig.secondary ,woolAdminConfig.secondary, woolAdminConfig.secondary , woolAdminConfig.secondary , woolAdminConfig.secondary , woolAdminConfig.secondary , "rgba(255, 133, 117, 0.2) ", "rgba(255, 133, 117, 0.2) ", "rgba(255, 133, 117, 0.2) ", "rgba(255, 133, 117, 0.2) ", "rgba(255, 133, 117, 0.2) ", "rgba(255, 133, 117, 0.2) ", "rgba(255, 133, 117, 0.2) ", "rgba(255, 133, 117, 0.2) ", "rgba(255, 133, 117, 0.2) " , "rgba(255, 133, 117, 0.2) " , "rgba(255, 133, 117, 0.2) " , "rgba(255, 133, 117, 0.2) " , "rgba(255, 133, 117, 0.2) " , "rgba(255, 133, 117, 0.2) " , "rgba(255, 133, 117, 0.2) " , "rgba(255, 133, 117, 0.2) " , "rgba(255, 133, 117, 0.2) " ],
  chart: {
    height: 95,
    type: 'bar',
    offsetY: 3,
    sparkline: {
      enabled: true,
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: 'smooth',
  },        
  plotOptions: {
    bar: {
      borderRadius: 3,
      distributed: true,
      columnWidth: "40%",
      barHeight: '38%',
      dataLabels: {
        position: 'top',
      },
    }
  },
  xaxis: {
    show: false,
  },
};
var expensesEl = new ApexCharts(document.querySelector('#ethereumchart'), expensesOption);
expensesEl.render();
 
// -------- litecoinchart

var expensesOption = {
  series: [
    {
      name: 'series2',
      data: [15, 30, 40, 30, 20, 15, 25, 35, 25, 30, 55, 50, 45, 40, 25, 15, 30, 40, 30, 40, 55, 45, 15, 25, 15, 30, 40, 30, 25, 15, 35, 40],
    },
  ],
  colors: [ "rgba(79, 167, 244, 0.2)" , "rgba(79, 167, 244, 0.2)" , "rgba(79, 167, 244, 0.2)" , "rgba(79, 167, 244, 0.2)" , "rgba(79, 167, 244, 0.2)" , "rgba(79, 167, 244, 0.2)" , "rgba(79, 167, 244, 0.2)" , "rgba(79, 167, 244, 0.2)" , "rgba(79, 167, 244, 0.2)" , "rgba(79, 167, 244, 0.2)" , "rgba(79, 167, 244, 0.2)" , "rgba(79, 167, 244, 0.2)" , "rgba(79, 167, 244, 0.2)" , "rgba(79, 167, 244, 0.2)" , "rgba(79, 167, 244, 0.2)" , "rgba(79, 167, 244, 0.2)", "rgba(79, 167, 244, 0.2)", "rgba(79, 167, 244, 0.2)", "rgba(79, 167, 244, 0.2)", "rgba(79, 167, 244, 0.2)", "rgba(79, 167, 244, 0.2)", "rgba(79, 167, 244, 0.2)", "#4FA7F4", "#4FA7F4" , "#4FA7F4" , "#4FA7F4" , "#4FA7F4" , "#4FA7F4" , "#4FA7F4" , "#4FA7F4" , "rgba(79, 167, 244, 0.2)" , "rgba(79, 167, 244, 0.2)" ],
  chart: {
    height: 95,
    type: 'bar',
    offsetY: 3,
    sparkline: {
      enabled: true,
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: 'smooth',
  },          
  plotOptions: {
    bar: {
      borderRadius: 3,
      distributed: true,
      columnWidth: "40%",
      barHeight: '38%',
      dataLabels: {
        position: 'top',
      },
    }
  },
  xaxis: {
    show: false,
  },
};
var expensesEl = new ApexCharts(document.querySelector('#litecoinchart'), expensesOption);
expensesEl.render();

// bitcoin widget charts
function priceChartOptions(data) {
  return {
    series: [
      {
        data: data.data,
      },
    ],
    chart: {
      type: 'line',
      width: '80',
      height: 15,
      sparkline: {
        enabled: true,
      },
    },
    fill: {
      opacity: 1,
    },
    colors: [data.color],
    stroke: {
      curve: 'smooth',
      width: 3,
    },

    tooltip: {
      enabled: false,
    },
  };
}

/*===== Table Sparkline 1 =====*/
const priceGraph1 = {
  data: [1,20,10,30,10,55,20,30],
  color:  woolAdminConfig.primary,
};
const priceChart1El = document.querySelector('#priceChart1');
if (priceChart1El) {
  var priceChart1 = new ApexCharts(priceChart1El, priceChartOptions(priceGraph1));
  priceChart1.render();
}

// /*===== Table Sparkline 2 =====*/
const priceGraph2 = {
  data: [1,25,10,25,25,18,25,10,30],
  color:  woolAdminConfig.secondary,
};
const priceChart2El = document.querySelector('#priceChart2');
if (priceChart2El) {
  var priceChart2 = new ApexCharts(priceChart2El, priceChartOptions(priceGraph2));
  priceChart2.render();
}

// /*===== Table Sparkline 3 =====*/
const priceGraph3 = {
  data: [1,25,10,25,25,10,25,18,30],
  color:  '#4FA7F4',
};
const priceChart3El = document.querySelector('#priceChart3');
if (priceChart3El) {
  var priceChart3 = new ApexCharts(priceChart3El, priceChartOptions(priceGraph3));
  priceChart3.render();
}

// /*===== Table Sparkline 4 =====*/
const priceGraph4 = {
  data: [1,25,10,25,25,18,25,10,30],
  color:  woolAdminConfig.primary,
};
const priceChart4El = document.querySelector('#priceChart4');
if (priceChart4El) {
  var priceChart4 = new ApexCharts(priceChart4El, priceChartOptions(priceGraph4));
  priceChart4.render();
}

// /*===== Table Sparkline 5 =====*/
const priceGraph5 = {
  data: [1,55,10,30,10,55,20,30],
  color:  woolAdminConfig.secondary,
};
const priceChart5El = document.querySelector('#priceChart5');
if (priceChart5El) {
  var priceChart5 = new ApexCharts(priceChart5El, priceChartOptions(priceGraph5));
  priceChart5.render();
}

// candlestick chart start
// var options = {
//   series: [{
//       data: [{
//               x: 'jan',
//               y: [6629.81, 6650.5, 6623.04, 6633.33]
//           },
//           {
//               x: new Date(1538780400000),
//               y: [6632.01, 6643.59, 6620, 6630.11]
//           },
//           {
//               x: new Date(1538782200000),
//               y: [6630.71, 6648.95, 6623.34, 6635.65]
//           },
//           {
//               x: new Date(1538784000000),
//               y: [6635.65, 6651, 6629.67, 6638.24]
//           },
//           {
//               x: new Date(1538785800000),
//               y: [6638.24, 6640, 6620, 6624.47]
//           },
//           {
//               x: new Date(1538787600000),
//               y: [6624.53, 6636.03, 6621.68, 6624.31]
//           },
//           {
//               x: new Date(1538789400000),
//               y: [6624.61, 6632.2, 6617, 6626.02]
//           },
//           {
//               x: new Date(1538791200000),
//               y: [6627, 6627.62, 6584.22, 6603.02]
//           },
//           {
//               x: new Date(1538793000000),
//               y: [6605, 6608.03, 6598.95, 6604.01]
//           },
//           {
//               x: new Date(1538794800000),
//               y: [6604.5, 6614.4, 6602.26, 6608.02]
//           },
//           {
//               x: new Date(1538796600000),
//               y: [6608.02, 6610.68, 6601.99, 6608.91]
//           },
//           {
//               x: new Date(1538798400000),
//               y: [6608.91, 6618.99, 6608.01, 6612]
//           },
//           {
//               x: new Date(1538800200000),
//               y: [6612, 6615.13, 6605.09, 6612]
//           },
//           {
//               x: new Date(1538802000000),
//               y: [6612, 6624.12, 6608.43, 6622.95]
//           },
//           {
//               x: new Date(1538803800000),
//               y: [6623.91, 6623.91, 6615, 6615.67]
//           },
//           {
//               x: new Date(1538805600000),
//               y: [6618.69, 6618.74, 6610, 6610.4]
//           },
//           {
//               x: new Date(1538807400000),
//               y: [6611, 6622.78, 6610.4, 6614.9]
//           },
//           {
//               x: new Date(1538809200000),
//               y: [6614.9, 6626.2, 6613.33, 6623.45]
//           },
//           {
//               x: new Date(1538811000000),
//               y: [6623.48, 6627, 6618.38, 6620.35]
//           },
//           {
//               x: new Date(1538812800000),
//               y: [6619.43, 6620.35, 6610.05, 6615.53]
//           },
//           {
//               x: new Date(1538814600000),
//               y: [6615.53, 6617.93, 6610, 6615.19]
//           },
//           {
//               x: new Date(1538816400000),
//               y: [6615.19, 6621.6, 6608.2, 6620]
//           },
//           {
//               x: new Date(1538818200000),
//               y: [6619.54, 6625.17, 6614.15, 6620]
//           },
//           {
//               x: new Date(1538820000000),
//               y: [6620.33, 6634.15, 6617.24, 6624.61]
//           },
//           {
//               x: new Date(1538821800000),
//               y: [6625.95, 6626, 6611.66, 6617.58]
//           },
//           {
//               x: new Date(1538823600000),
//               y: [6619, 6625.97, 6595.27, 6598.86]
//           },
//           {
//               x: new Date(1538825400000),
//               y: [6598.86, 6598.88, 6570, 6587.16]
//           },
//       ]
//   }],
//   chart: {
//       type: 'candlestick',
//       height: 320,
//       toolbar: {
//           show: false,
//       }
//   },

//   xaxis: {
//       type: 'datetime',
//       labels: {
//           style: {
//               colors: "#8E97B2",
//               fontWeight: 400,
//               fontSize: '10px',
//               fontFamily: 'roboto'
//           },
//       },
//       axisBorder: {
//           show: false,
         
//       },
//       axisTicks: {
//           show: false,
//       }
//   },
//   plotOptions: {
//       candlestick: {
//           colors: {
//               upward: woolAdminConfig.primary,
//               downward: woolAdminConfig.secondary
//           },
//           wick: {
//               useFillColor: true
//           }
//       }
//   },

//   grid: {
//       show: false,
     
//       padding: {
//           top: -20,
//           right: 0,
//           bottom: 0,
//           left: 0
//       },  
//   },    
//   yaxis: {
//       tooltip: {
//           enabled: true,
         
//       },
//       labels: {

//           style: {
//               colors: ["#1E2F65"],
//               fontWeight: 400,
//               fontSize: '12px',
//               fontFamily: 'roboto'
//           },
//           offsetX: 0,
//           offsetY: 0,
//       },
//   }
// };
// var chart = new ApexCharts(document.querySelector("#market-stickchart"), options);
// chart.render();

// var lastOrdersOption = {
//   series: [{
//     type: 'candlestick',  
//     data: [{
//         x: 'Jun',
//         y: [29, 23, 47, 34],
//       },
//       {
//         x: '',
//         y: [31, 25, 36, 33],
//       },
//       {
//         x: 'Fab',
//         y: [25, 25, 51, 38],
//       },
//       {
//         x: '',
//         y: [39, 35, 57, 43],
//       },
//       {
//         x: '',
//         y: [45, 38, 60, 49],
//       },
//       {
//         x: 'mar',
//         y: [45, 37, 60, 47],
//       },
//       {
//         x: '',
//         y: [44, 39, 60, 47],
//       },
//       {
//         x: 'Apr',
//         y: [40, 39, 60, 47],
//       },
//       {
//         x: '',
//         y: [43, 39, 60, 47],
//       },
//       {
//         x: '',
//         y: [29, 25, 48, 35],
//       },
//       {
//         x: 'May',
//         y: [16, 11, 33, 20],
//       },
//       {
//         x: '',
//         y: [19, 13, 33, 20],
//       },
//       {
//         x: 'Jun',
//         y: [14, 11, 33, 20],
//       },
//       {
//         x: '',
//         y: [25, 19, 41, 28],
//       },
//       {
//         x: 'jul',
//         y: [30, 10, 40, 50],
//       },
//       {
//         x: '',
//         y: [30, 10, 40, 50],
//       },
//       {
//         x: '',
//         y: [30, 10, 40, 50],
//       },
//       {
//         x: 'Aug',
//         y: [30, 10, 40, 50],
//       },
//       {
//         x: '',
//         y: [30, 10, 40, 50],
//       },
//       {
//         x: 'Sep',
//         y: [30, 10, 40, 50],
//       },
//       {
//         x: '',
//         y: [30, 10, 40, 50],
//       },
//       {
//         x: 'Oct',
//         y: [30, 10, 40, 50],
//       },
//       {
//         x: '',
//         y: [30, 10, 40, 50],
//       },
//       {
//         x: '',
//         y: [30, 10, 40, 50],
//       },
//       {
//         x: 'Nov',
//         y: [30, 10, 40, 50],
//       },
//       {
//         x: '  ',
//         y: [30, 10, 40, 50],
//       },
//       {
//         x: '',
//         y: [30, 10, 40, 50],
//       },
//     ]
//   }],
//     chart: {
//     type: 'candlestick',
//     height: 330,
//     toolbar: {
//       show: false,
//     } 
//   },
//   xaxis: {
//     labels: {
//       style: {
//         colors: 'var(--light)',
//         fontWeight: 400,
//       },
//     },
//     axisBorder: {
//       show: false,
//     },
//     axisTicks: {
//         show: false,
//     }
//   },
//   plotOptions: {
//     candlestick: {
//         colors: {
//             upward: woolAdminConfig.primary,
//             downward: woolAdminConfig.secondary
//         },
//         wick: {
//             useFillColor: true
//         }
//     }
//   },
//   yaxis: {
//     tooltip: {
//       enabled: true,      
//     },
//     labels: {
//         formatter: function(val) {
//             return val + "k";
//         },
//     },          
//   },

// };
// var lastOrdersChartEl = new ApexCharts(document.querySelector("#market-stickchart"), lastOrdersOption);
// lastOrdersChartEl.render();    

// candle stick
var lastOrdersOption = {
  series: [
    {
      data: [
        {
          x: "Jan",
          y: [6595.81, 6585.5, 6630.04, 6608.33],
        },
        {
          x: "Feb",
          y: [6603.01, 6590.59, 6620.1, 6608.11],
        },
        {
          x: "Mar",
          y: [6584.71, 6584.95, 6642.34, 6615.65],
        },
        {
          x: "Apr",
          y: [6617.65, 6611, 6655.67, 6627.24],
        },
        {
          x: "May",
          y: [6628.24, 6617, 6655, 6637.47],
        },
        {
          x: "Jun",
          y: [6627.53, 6611.03, 6655.68, 6634.31],
        },
        {
          x: "Jul",
          y: [6624.61, 6617.2, 6655, 6634.02],
        },
        {
          x: "Aug",
          y: [6618, 6617.62, 6655.22, 6634.02],
        },
        {
          x: "Sep",
          y: [6605, 6608.03, 6598.95, 6604.01],
        },
        {
          x: "Oct",
          y: [6604.5, 6614.4, 6602.26, 6608.02],
        },
        {
          x: "Nov",
          y: [6608.02, 6610.68, 6601.99, 6608.91],
        },
        {
          x: "Dec",
          y: [6608.91, 6618.99, 6608.01, 6612],
        },
        {
          x: "",
          y: [6612, 6615.13, 6605.09, 6612],
        },
        {
          x: "",
          y: [6612, 6624.12, 6608.43, 6622.95],
        },
        {
          x: "",
          y: [6623.91, 6623.91, 6615, 6615.67],
        },
        {
          x: "",
          y: [6618.69, 6618.74, 6610, 6610.4],
        },
        {
          x: "",
          y: [6611, 6622.78, 6610.4, 6614.9],
        },
        {
          x: "",
          y: [6614.9, 6626.2, 6613.33, 6623.45],
        },
        {
          x: "",
          y: [6623.48, 6627, 6618.38, 6620.35],
        },
        {
          x: "",
          y: [6619.43, 6620.35, 6610.05, 6615.53],
        },
        {
          x: "",
          y: [6615.53, 6617.93, 6610, 6615.19],
        },
        {
          x: "",
          y: [6615.19, 6621.6, 6608.2, 6620],
        },
        {
          x: "",
          y: [6619.54, 6625.17, 6614.15, 6620],
        },
        {
          x: "",
          y: [6620.33, 6634.15, 6617.24, 6624.61],
        },
        {
          x: "",
          y: [6625.95, 6626, 6611.66, 6617.58],
        },
        {
          x: "",
          y: [6619, 6625.97, 6595.27, 6598.86],
        },
        {
          x: "",
          y: [6598.86, 6598.88, 6570, 6587.16],
        },
      ],
    },
  ],
  chart: {
    type: "candlestick",
    height: 330,
    toolbar: {
      show: false,
    },
  },
  title: {
    text: undefined,
  },
  yaxis: {
    tooltip: {
      enabled: true,
    },
  },
  plotOptions: {
    candlestick: {
      colors: {
        upward: woolAdminConfig.primary,
        downward: woolAdminConfig.secondary,
      },
      wick: {
        useFillColor: true,
      },
    },
  },
};

var lastOrdersChartEl = new ApexCharts(
  document.querySelector("#market-stickchart"),
  lastOrdersOption
);
lastOrdersChartEl.render();


// var liveMarkCapBoxChartOption = {
//   series: [
//     {
//       name: 'box',
//       type: 'boxPlot',
//       data: [
//         {
//           x: 'Jan 2015',
//           y: [23, 30, 33, 36, 43],
//         },
//         {
//           x: 'Jan 2016',
//           y: [13, 24, 29, 33, 37],
//         },
//         {
//           x: 'Jan 2017',
//           y: [28, 33, 37, 42, 46],
//         },
//         {
//           x: 'Jan 2018',
//           y: [12, 15, 20, 25, 30],
//         },
//         {
//           x: 'Jan 2019',
//           y: [24, 32, 38, 42, 48],
//         },
//         {
//           x: 'Jan 2020',
//           y: [13, 17, 22, 25, 31],
//         },
//         {
//           x: 'Jan 2021',
//           y: [35, 37, 40, 42, 45],
//         },
//         {
//           x: 'Jan 2022',
//           y: [19, 24, 28, 34, 38],
//         },
//       ],
//     },
//   ],
//   chart: {
//     type: 'boxPlot',
//     height: 174,
//     width: '100%',
//     offsetY: 0,
//     offsetX: 0,
//     toolbar: {
//       show: false,
//     },
//   },

//   stroke: {
//     colors: '#000000',
//   },

//   plotOptions: {
//     boxPlot: {
//       colors: {
//         upper: woolAdminConfig.primary,
//         lower: woolAdminConfig.secondary,
//       },
//     },
//     bar: {
//       columnWidth: '50%',
//     },
//   },
//   tooltip: {
//     custom: function ({ series, seriesIndex, dataPointIndex, w }) {
//       var dataY = series[0][dataPointIndex];
//       var dataX = w.globals.initialSeries[seriesIndex].data[dataPointIndex].x;
//       return '<ul class="boxChartTooltip">' + '<li><b>Price</b>: ' + dataY + '</li>' + '<li><b>Date</b>: ' + dataX + '</li>' + '</ul>';
//     },
//   },

//   grid: {
//     borderColor: '#000',
//     padding: {
//       top: -20,
//       right: -20,
//       bottom: -10,
//     },
//   },

//   xaxis: {
//     labels: {
//       style: {
//         colors: '#000',
//         fontSize: '12px',
//       },
//       minHeight: 0,
//       maxHeight: 30,
//     },
//     axisBorder: {
//       show: false,
//     },

//     axisTicks: {
//       show: false,
//     },
//     tooltip: {
//       enabled: false,
//     },
//   },
//   yaxis: {
//     logBase: 10,
//     tickAmount: 4,
//     min: 10,
//     max: 50,
//     labels: {
//       style: {
//         colors: '#000',
//         fontSize: '12px',
//         fontWeight: 500,
//       },
//       minWidth: 0,
//       maxWidth: 22,
//       formatter: (value) => {
//         return `${value}K`;
//       },
//     },
//   },
// };

// const liveMarkCapBoxChartEl = document.querySelector('#liveMarkCapBoxChart');
// if (liveMarkCapBoxChartEl) {
//   var liveMarkCapBoxChart = new ApexCharts(liveMarkCapBoxChartEl, liveMarkCapBoxChartOption);
//   liveMarkCapBoxChart.render();
// }


var options = {
  series: [
  {
    type: 'boxPlot',
    data: [
      {
        x: 'Jan',
        y: [23, 30, 33, 36, 43],
      },
      {
        x: 'Feb',
        y: [13, 24, 29, 33, 37],
      },
      {
        x: 'Mar',
        y: [28, 33, 37, 42, 46],
      },
      {
        x: 'Apr',
        y: [12, 15, 20, 25, 30],
      },
      {
        x: 'May',
        y: [24, 32, 38, 42, 48],
      },
      {
        x: 'Jun',
        y: [13, 17, 22, 25, 31],
      },
      {
        x: 'Jul',
        y: [35, 37, 40, 42, 45],
      },
      {
        x: 'Aug',
        y: [19, 24, 28, 34, 38],
      },
    ]
  }
],
  chart: {
  type: 'boxPlot',
  height: 350,
  toolbar: {
    show: false,
  },
},
plotOptions: {
  boxPlot: {
    colors: {
      upper: woolAdminConfig.primary,
      lower: woolAdminConfig.secondary,
    }
  }
},
xaxis: { 
  labels: {
    style: {
      colors: "#848789",
    }
  }
},
yaxis: {
  labels: {
    formatter: function(val) {
        return val + "k";
    },
    style: {
      colors: "$black",
    },
  },          
},
};

var chart = new ApexCharts(document.querySelector("#liveMarkCapBoxChart"), options);
chart.render();