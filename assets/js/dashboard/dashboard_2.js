// (function () {
//   var options = {
//     series: [
//       {
//         name: "Sales",
//         data: [23, 23, 20, 20, 32, 32, 40, 32, 32, 25, 30, 30],
//       },
//       {
//         name: "sales",
//         data: [22, 22, 19, 19, 31, 31, 39, 31, 31, 24, 29, 29],
//       },
//       {
//         name: "sales",
//         data: [21, 21, 18, 18, 30, 30, 38, 30, 30, 23, 28, 28],
//       },
//       {
//         name: "sales",
//         data: [20, 20, 17, 17, 29, 29, 37, 29, 29, 22, 27, 27],
//       },
//       {
//         name: "sales",
//         data: [19, 19, 16, 16, 28, 28, 36, 28, 28, 21, 26, 26],
//       },
//       {
//         name: "sales",
//         data: [18, 18, 15, 15, 27, 27, 35, 27, 27, 20, 25, 25],
//       },
//       {
//         name: "sales",
//         data: [17, 17, 14, 14, 26, 26, 34, 26, 26, 19, 24, 24],
//       },
//       {
//         name: "sales",
//         data: [16, 16, 13, 13, 25, 25, 33, 25, 25, 18, 23, 23],
//       },
//       {
//         name: "sales",
//         data: [16, 16, 13, 13, 25, 25, 33, 25, 25, 18, 23, 23],
//       },
//       {
//         name: "sales",
//         data: [15, 15, 12, 12, 24, 24, 32, 24, 24, 17, 22, 22],
//       },
//       {
//         name: "sales",
//         data: [14, 14, 11, 11, 23, 23, 31, 23, 23, 16, 21, 21],
//       },
//       {
//         name: "sales",
//         data: [13, 13, 10, 10, 22, 22, 30, 22, 22, 15, 20, 20],
//       },
//     ],
//     chart: {
//       height: 235,
//       type: "line",
//       toolbar: {
//         show: false,
//       },
//     },
//     colors: [
//       "#7064F5",
//       "#7064F5",
//       "#7064F5",
//       "#7064F5",
//       "#7064F5",
//       "#7064F5",
//       "#7064F5",
//       "#7064F5",
//       "#7064F5",
//       "#7064F5",
//       "#7064F5",
//       "#7064F5",
//     ],
//     fill: {
//       type: "gradient",
//       gradient: {
//         shade: "dark",
//         type: "horizontal",
//         shadeIntensity: 1,
//         gradientToColors: [
//           "#FF8BA7",
//           "#FF8BA7",
//           "#FF8BA7",
//           "#FF8BA7",
//           "#FF8BA7",
//           "#FF8BA7",
//           "#FF8BA7",
//           "#FF8BA7",
//           "#FF8BA7",
//           "#FF8BA7",
//           "#FF8BA7",
//           "#FF8BA7",
//         ],
//         inverseColors: true,
//         opacityFrom: 1,
//         opacityTo: 1,
//         colorStops: [
//           {
//             offset: 0,
//             color: "#e183b7",
//             opacity: 1,
//           },
//           {
//             offset: 20,
//             color: "#ff8ba7",
//             opacity: 1,
//           },
//           {
//             offset: 30,
//             color: "#b377d0",
//             opacity: 1,
//           },
//           {
//             offset: 65,
//             color: "#7064f5",
//             opacity: 1,
//           },
//           {
//             offset: 70,
//             color: "#b778cf",
//             opacity: 1,
//           },
//           {
//             offset: 80,
//             color: "#eb86b2",
//             opacity: 1,
//           },
//           {
//             offset: 100,
//             color: "#a873d7",
//             opacity: 1,
//           },
//         ],
//       },
//     },
//     dataLabels: {
//       enabled: false,
//     },
//     stroke: {
//       curve: "smooth",
//       width: 2,
//     },
//     grid: {
//       borderColor: "#e7e7e7",
//       yaxis: {
//         lines: {
//           show: false,
//         },
//       },
//       column: {
//         colors: ["transparent", "var(--light-background)"], // takes an array which will be repeated on columns
//         opacity: 0.5,
//       },
//     },
//     xaxis: {
//       categories: [
//         "01",
//         "03",
//         "05",
//         "07",
//         "09",
//         "10",
//         "11",
//         "12",
//         "15",
//         "16",
//         "18",
//       ],
//       tickAmount: 6,
//       tickPlacement: "between",
//       axisTicks: {
//         show: false,
//       },
//       axisBorder: {
//         show: false,
//       },
//       tooltip: {
//         enabled: false,
//       },
//     },
//     yaxis: {
//       min: 5,
//       max: 40,
//       axisBorder: {
//         show: true,
//         color: "var(--chart-border)",
//         offsetX: 12,
//         offsetY: 5,
//       },
//     },
//     legend: {
//       show: false,
//     },
//     tooltip: {
//       shared: false,
//     },
//     responsive: [
//       {
//         breakpoint: 1400,
//         options: {
//           chart: {
//             height: 230,
//           },
//         },
//       },
//     ],
//   };

//   var chart = new ApexCharts(document.querySelector("#order-goal"), options);
//   chart.render();

//   // profit monthly
//   var optionsprofit = {
//     labels: ["Shoes", "Grocery", "other"],
//     series: [30, 55, 35],
//     chart: {
//       type: "donut",
//       height: 300,
//     },
//     dataLabels: {
//       enabled: false,
//     },
//     legend: {
//       position: "bottom",
//       fontSize: "14px",
//       fontFamily: "Outfit, sans-serif",
//       fontWeight: 500,
//       labels: {
//         colors: ["var(--chart-text-color)"],
//       },
//       markers: {
//         width: 6,
//         height: 6,
//       },
//       itemMargin: {
//         horizontal: 7,
//         vertical: 0,
//       },
//     },
//     stroke: {
//       width: 10,
//       colors: ["var(--light2)"],
//     },
//     plotOptions: {
//       pie: {
//         expandOnClick: false,
//         donut: {
//           size: "83%",
//           labels: {
//             show: true,
//             name: {
//               offsetY: 4,
//             },
//             total: {
//               show: true,
//               fontSize: "20px",
//               fontFamily: "Outfit, sans-serif",
//               fontWeight: 500,
//               label: "$ 34,098",
//               formatter: () => "Total Profit",
//             },
//           },
//         },
//       },
//     },
//     states: {
//       normal: {
//         filter: {
//           type: "none",
//         },
//       },
//       hover: {
//         filter: {
//           type: "none",
//         },
//       },
//       active: {
//         allowMultipleDataPointsSelection: false,
//         filter: {
//           type: "none",
//         },
//       },
//     },
//     colors: ["#54BA4A", "var(--theme-default)", "#FFA941"],
//     responsive: [
//       {
//         breakpoint: 1630,
//         options: {
//           chart: {
//             height: 360,
//           },
//         },
//       },
//       {
//         breakpoint: 1584,
//         options: {
//           chart: {
//             height: 400,
//           },
//         },
//       },
//       {
//         breakpoint: 1473,
//         options: {
//           chart: {
//             height: 250,
//           },
//         },
//       },
//       {
//         breakpoint: 1425,
//         options: {
//           chart: {
//             height: 270,
//           },
//         },
//       },
//       {
//         breakpoint: 1400,
//         options: {
//           chart: {
//             height: 320,
//           },
//         },
//       },
//       {
//         breakpoint: 480,
//         options: {
//           chart: {
//             height: 250,
//           },
//         },
//       },
//     ],
//   };

//   var chartprofit = new ApexCharts(
//     document.querySelector("#profitmonthly"),
//     optionsprofit
//   );
//   chartprofit.render();

//   // overview chart
//   var optionsoverview = {
//     series: [
//       {
//         name: "Earning",
//         type: "area",
//         data: [44, 55, 35, 50, 67, 50, 55, 45, 32, 38, 45],
//       },
//       {
//         name: "Order",
//         type: "area",
//         data: [35, 30, 23, 40, 50, 35, 40, 52, 67, 50, 55],
//       },
//       {
//         name: "Refunds",
//         type: "area",
//         data: [25, 20, 15, 25, 32, 20, 30, 35, 23, 30, 20],
//       },
//     ],
//     chart: {
//       height: 300,
//       type: "line",
//       stacked: false,
//       toolbar: {
//         show: false,
//       },
//       dropShadow: {
//         enabled: true,
//         top: 2,
//         left: 0,
//         blur: 4,
//         color: "#000",
//         opacity: 0.08,
//       },
//     },
//     stroke: {
//       width: [2, 2, 2],
//       curve: "smooth",
//     },
//     grid: {
//       show: true,
//       borderColor: "var(--chart-border)",
//       strokeDashArray: 0,
//       position: "back",
//       xaxis: {
//         lines: {
//           show: true,
//         },
//       },
//       padding: {
//         top: 0,
//         right: 0,
//         bottom: 0,
//         left: 0,
//       },
//     },
//     plotOptions: {
//       bar: {
//         columnWidth: "50%",
//       },
//     },
//     colors: ["#7064F5", "#54BA4A", "#F07EB5"],
//     fill: {
//       type: "gradient",
//       gradient: {
//         shade: "light",
//         type: "vertical",
//         opacityFrom: 0.4,
//         opacityTo: 0,
//         stops: [0, 100],
//       },
//     },
//     labels: [
//       "Jan",
//       "Feb",
//       "Mar",
//       "Apr",
//       "May",
//       "Jun",
//       "Jul",
//       "Aug",
//       "Sep",
//       "Oct",
//       "Nov",
//     ],
//     markers: {
//       discrete: [
//         {
//           seriesIndex: 0,
//           dataPointIndex: 2,
//           fillColor: "#7064F5",
//           strokeColor: "var(--white)",
//           size: 5,
//           sizeOffset: 3,
//         },
//         {
//           seriesIndex: 1,
//           dataPointIndex: 2,
//           fillColor: "#54BA4A",
//           strokeColor: "var(--white)",
//           size: 5,
//         },
//         {
//           seriesIndex: 2,
//           dataPointIndex: 2,
//           fillColor: "#F07EB5",
//           strokeColor: "var(--white)",
//           size: 5,
//         },
//         {
//           seriesIndex: 0,
//           dataPointIndex: 5,
//           fillColor: "#7064F5",
//           strokeColor: "var(--white)",
//           size: 5,
//           sizeOffset: 3,
//         },
//         {
//           seriesIndex: 1,
//           dataPointIndex: 5,
//           fillColor: "#54BA4A",
//           strokeColor: "var(--white)",
//           size: 5,
//         },
//         {
//           seriesIndex: 2,
//           dataPointIndex: 5,
//           fillColor: "#F07EB5",
//           strokeColor: "var(--white)",
//           size: 5,
//         },
//         {
//           seriesIndex: 0,
//           dataPointIndex: 9,
//           fillColor: "#7064F5",
//           strokeColor: "var(--white)",
//           size: 5,
//           sizeOffset: 3,
//         },
//         {
//           seriesIndex: 1,
//           dataPointIndex: 9,
//           fillColor: "#54BA4A",
//           strokeColor: "var(--white)",
//           size: 5,
//         },
//         {
//           seriesIndex: 2,
//           dataPointIndex: 9,
//           fillColor: "#F07EB5",
//           strokeColor: "var(--white)",
//           size: 5,
//         },
//       ],
//       hover: {
//         size: 5,
//         sizeOffset: 0,
//       },
//     },
//     xaxis: {
//       type: "category",
//       tickAmount: 4,
//       tickPlacement: "between",
//       tooltip: {
//         enabled: false,
//       },
//       axisBorder: {
//         color: "var(--chart-border)",
//       },
//       axisTicks: {
//         show: false,
//       },
//     },
//     legend: {
//       show: false,
//     },
//     yaxis: {
//       min: 0,
//       tickAmount: 6,
//       tickPlacement: "between",
//     },
//     tooltip: {
//       shared: false,
//       intersect: false,
//     },
//     responsive: [
//       {
//         breakpoint: 1200,
//         options: {
//           chart: {
//             height: 250,
//           },
//         },
//       },
//     ],
//   };

//   var chartoverview = new ApexCharts(
//     document.querySelector("#orderoverview"),
//     optionsoverview
//   );
//   chartoverview.render();

//   // bar overview chart
//   var optionsorder = {
//     series: [
//       {
//         name: "Revenue",
//         data: [
//           30, 40, 18, 25, 18, 10, 20, 35, 22, 40, 30, 38, 20, 35, 11, 28, 40,
//           11, 28, 40, 11, 28, 40, 11, 28, 40, 11,
//         ],
//       },
//     ],
//     chart: {
//       type: "bar",
//       height: 180,
//       toolbar: {
//         show: false,
//       },
//     },
//     plotOptions: {
//       bar: {
//         horizontal: false,
//         columnWidth: "55%",
//       },
//     },
//     colors: ["var(--light-bg)"],
//     grid: {
//       show: false,
//     },
//     dataLabels: {
//       enabled: false,
//     },
//     stroke: {
//       show: true,
//       width: 2,
//       colors: ["transparent"],
//     },
//     xaxis: {
//       categories: [
//         "Feb",
//         "Mar",
//         "Apr",
//         "May",
//         "Jun",
//         "Jul",
//         "Aug",
//         "Sep",
//         "Oct",
//       ],
//       labels: {
//         show: false,
//       },
//       axisBorder: {
//         show: false,
//       },
//       axisTicks: {
//         show: false,
//       },
//     },
//     yaxis: {
//       labels: {
//         show: false,
//       },
//       axisBorder: {
//         show: false,
//       },
//       axisTicks: {
//         show: false,
//       },
//     },
//     fill: {
//       opacity: 0.7,
//     },
//     tooltip: {
//       enabled: false,
//     },
//     states: {
//       normal: {
//         filter: {
//           type: "none",
//         },
//       },
//       hover: {
//         filter: {
//           type: "none",
//         },
//       },
//       active: {
//         allowMultipleDataPointsSelection: false,
//         filter: {
//           type: "none",
//         },
//       },
//     },
//     responsive: [
//       {
//         breakpoint: 405,
//         options: {
//           chart: {
//             height: 150,
//           },
//         },
//       },
//     ],
//   };

//   var chartorder = new ApexCharts(
//     document.querySelector("#order-bar"),
//     optionsorder
//   );
//   chartorder.render();

//   // visitor chart
//   var optionsvisitor = {
//     series: [
//       {
//         name: "Active",
//         data: [18, 10, 65, 18, 28, 10],
//       },
//       {
//         name: "Bounce",
//         data: [25, 50, 30, 30, 25, 45],
//       },
//     ],
//     chart: {
//       type: "bar",
//       height: 270,
//       toolbar: {
//         show: false,
//       },
//     },
//     plotOptions: {
//       bar: {
//         horizontal: false,
//         columnWidth: "50%",
//       },
//     },
//     dataLabels: {
//       enabled: false,
//     },
//     stroke: {
//       show: true,
//       width: 6,
//       colors: ["transparent"],
//     },
//     grid: {
//       show: true,
//       borderColor: "var(--chart-border)",
//       xaxis: {
//         lines: {
//           show: true,
//         },
//       },
//     },
//     colors: ["#FFA941", "var(--theme-default)"],
//     xaxis: {
//       categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
//       tickAmount: 4,
//       tickPlacement: "between",
//       labels: {
//         style: {
//           fontFamily: "Outfit, sans-serif",
//         },
//       },
//       axisBorder: {
//         show: false,
//       },
//       axisTicks: {
//         show: false,
//       },
//     },
//     yaxis: {
//       min: 0,
//       max: 100,
//       tickAmount: 5,
//       tickPlacement: "between",
//       labels: {
//         style: {
//           fontFamily: "Outfit, sans-serif",
//         },
//       },
//     },
//     fill: {
//       opacity: 1,
//     },
//     legend: {
//       position: "top",
//       horizontalAlign: "left",
//       fontFamily: "Outfit, sans-serif",
//       fontSize: "14px",
//       fontWeight: 500,
//       labels: {
//         colors: "var(--chart-text-color)",
//       },
//       markers: {
//         width: 6,
//         height: 6,
//         radius: 12,
//       },
//       itemMargin: {
//         horizontal: 10,
//       },
//     },
//     responsive: [
//       {
//         breakpoint: 1366,
//         options: {
//           plotOptions: {
//             bar: {
//               columnWidth: "80%",
//             },
//           },
//           grid: {
//             padding: {
//               right: 0,
//             },
//           },
//         },
//       },
//       {
//         breakpoint: 992,
//         options: {
//           plotOptions: {
//             bar: {
//               columnWidth: "70%",
//             },
//           },
//         },
//       },
//       {
//         breakpoint: 576,
//         options: {
//           plotOptions: {
//             bar: {
//               columnWidth: "60%",
//             },
//           },
//           grid: {
//             padding: {
//               right: 5,
//             },
//           },
//         },
//       },
//     ],
//   };

//   var chartvisitor = new ApexCharts(
//     document.querySelector("#visitor-chart"),
//     optionsvisitor
//   );
//   chartvisitor.render();
// })();


//  Sales Summary chart start
var optionssalessummary = {
  series: [
    {
      name: "Activity",
      data: [42, 44, 55, 66, 55, 86, 52, 44, 44, 66, 55, 86, 52, 44, 44],
    },
  ],
  chart: {
    height: 100,
    type: "bar",
    toolbar: {
      show: false,
    },
    sparkline: {
      enabled: true,
    },
  },
  plotOptions: {
    bar: {
      distributed: true,
      borderRadius: 3,
      columnWidth: "40%",
    },
  },
  dataLabels: {
    enabled: false,
  },
  grid: {
    show: false,
  },
  xaxis: {
    labels: {
        show: false
    },
  },
  legend: {
    show: false,
  },
  yaxis: {
    labels: {
        show: false
    },
  },
  colors: ['#d6e5fd', '#d6e5fd', '#d6e5fd', '#d6e5fd', '#d6e5fd', RokoAdminConfig.primary, '#d6e5fd', '#d6e5fd', '#d6e5fd', '#d6e5fd', '#d6e5fd' , '#d6e5fd' , '#d6e5fd' , '#d6e5fd' , '#d6e5fd'],
};
var chartasalessummary = new ApexCharts(
  document.querySelector("#online-chart"),
  optionssalessummary
);
chartasalessummary.render();

var options = {
  series: [{
    name: "Desktops",
    data: [ 50, 50, 50, 25, 25, 25, 2, 2, 2, 25, 25, 25, 62, 62, 62, 35, 35, 35, 66, 66],
}],
  chart: {
  type: 'area',
  offsetY: 30,
  height: 140,
  zoom: {
    enabled: false
  },
  toolbar: {
    show: false,
  }, 
  dropShadow: {
    enabled: true,
    top: 5,
    left: 0,
    bottom: 3,
    blur: 2,
    color: RokoAdminConfig.secondary,
    opacity: 0.2,
  },
},
colors: [RokoAdminConfig.secondary],
fill: {
  type: "gradient",
  gradient: {
    shadeIntensity: 1,
    opacityFrom: 0.5,
    opacityTo: 0.1,
    stops: [0, 90, 100]
  }
},
dataLabels: {
  enabled: false
},
grid: {
  show: false,
},
  xaxis: {
    labels: {
      show: false,
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  yaxis: {
    show: false,
  },
  stroke: {
    curve: 'straight',
    width: 2,
  },
  markers: {
    discrete: [{
      seriesIndex: 0,
      dataPointIndex: 12,
      fillColor: RokoAdminConfig.secondary,
      strokeColor:'#fff',
      size: 5,
      shape: "circle"
    }],
  },
  responsive: [{
    breakpoint: 1661,
    options: {
        chart: {
            height: 140
        },
    },
  }
],
};
var chart = new ApexCharts(document.querySelector("#offline-chart"), options);
chart.render();

// var income = {
//   series: [46],
//   chart: {
//   type: 'radialBar',
//   offsetY: 0,
//   sparkline: {
//     enabled: false,
//   }
// },
// plotOptions: {
//   radialBar: {
//     startAngle: -90,
//     endAngle: 90,
//     track: {
//       background: "rgba(255, 97, 80, 0.12)",
//       strokeWidth: '120%',
//       margin: 5,
//     },
//     dataLabels: {
//       name: {
//         show: true
//       },
//       value: {
//         offsetY: 5,
//         fontSize: '18px'
//       }
//     }
//   },
//   bar: {
//     horizontal: false,
//     dataLabels: {
//       position: 'bottom'
//     }
//   }
// },
// labels: ['Visitors'],
// stroke: {
//   lineCap: 'round'
// },
// grid: {
//   padding: {
//     top: -10
//   }
// },
// colors: [RokoAdminConfig.secondary],
// };
// var IncomechrtchartEl = new ApexCharts(document.querySelector("#Revenue-chart"), income);
// IncomechrtchartEl.render();


var income = {
  series: [78],
  chart: {
    type: 'radialBar',
    offsetY: 30,
    height: 188, 
    sparkline: {
      enabled: false,
    },
  },
  plotOptions: {
    radialBar: {
      startAngle: -90,
      endAngle: 90,
      hollow: {
        size: '55%',
      },
      track: {
        background: "rgba(255, 97, 80, 0.12)",
        strokeWidth: '120%',
      },
      dataLabels: {
        name: {
          show: false,
          color: 'var(--title)',
          fontSize: '17px',
        },
        value: {
          offsetY: -2,
          fontSize: '22px',
        }
      }
    }
  },
  xaxis: {
  },
  stroke: {
    lineCap: 'round'
  },
  colors: ['#FC4438 '],
  responsive: [
    // {
    //   breakpoint: 1300,
    //   options: {
    //     chart: {
    //       height: 220,
    //     },
    //   },
    // },
    // {
    //   breakpoint: 1200,
    //   options: {
    //     chart: {
    //       height: 260,
    //     },
    //   },
    // },
  ]
};
var IncomechrtchartEl = new ApexCharts(document.querySelector("#Revenue-chart"), income);
IncomechrtchartEl.render();

var options1 = {
  series: [52, 35, 15, 45],
  chart: {
    type: 'donut',
    height: 200,
  },
  dataLabels:{
    enabled: false
  },
  legend:{
    show: false
  },
  responsive: [{
    breakpoint: 1700,
    options: {
        chart: {
            height: 150
        },
    },
  },{
    breakpoint: 1441,
    options: {
        chart: {
            height: 205
        },
    },
  },{
    breakpoint: 421,
    options: {
        chart: {
            height: 170
        },
    },
  }
],
  plotOptions: {
    pie: {
        expandOnClick: false,
        donut: {
            size: "70%",
            labels: {
                show: true,
                value: {
                  offsetY: 5,
                },
                total: {
                    show: true,
                    fontSize: "14px",
                    color: "#9B9B9B", 
                    fontFamily: "Outfit', sans-serif",
                    fontWeight: 400,
                    label: "Total",
                    formatter: () => "60%",
                },
            },
        },
    },
},
  yaxis: {
    labels: {
        formatter: function(val) {
            return val / 100 + "$";
        },
    },          
  },
  colors:[ RokoAdminConfig.primary, '#FC4438 ' , '#f4f4f4', RokoAdminConfig.secondary],
};
var chart1 = new ApexCharts(document.querySelector("#Categories-chart"), options1);
chart1.render();

var options = {
  series: [{
    name: "Desktops",
    data: [ 50, 50, 50, 25, 25, 25, 2, 2, 2, 25, 25, 25, 62, 62],
}],
  chart: {
  type: 'area',
  height: 200,
  // offsetY: -20,
  zoom: {
    enabled: false
  },
  toolbar: {
    show: false,
  }, 
  dropShadow: {
    enabled: true,
    top: 5,
    left: 0,
    bottom: 3,
    blur: 2,
    color: RokoAdminConfig.primary,
    opacity: 0.2,
  },
},
colors: [RokoAdminConfig.primary],
fill: {
  type: "gradient",
  gradient: {
    shadeIntensity: 1,
    opacityFrom: 0.6,
    opacityTo: 0.2,
    stops: [0, 100, 100]
  }
},
dataLabels: {
  enabled: false
},
grid: {
  show: false,
},
  xaxis: {
    labels: {
      show: false,
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  yaxis: {
    show: false,
  },
  stroke: {
    curve: 'smooth',
    width: 2,
  },
};
var chart = new ApexCharts(document.querySelector("#Earned-chart"), options);
chart.render();

var options = {
  series: [{
      name: 'Web App Design',
      data: [150, 100, 100, 100, 70, 70, 70 , 270, 50, 100]
  }, {
      name: 'Website Design',
      data: [320, 210, 290, 200, 230, 230, 230, 350, 230, 300]
  }, {
      name: 'App Design',
      data: [150, 165, 165, 165, 280, 155, 155, 140, 170, 130]
  }],
  colors: [RokoAdminConfig.primary, '#78A6ED', '#4F5875'],
  chart: {
      type: 'bar',
      height: 320,
      stacked: true,

      toolbar: {
          show: false,
          tools: {
              download: false,
          }
      },
      zoom: {
          enabled: true
      }
  },
  responsive: [{
    breakpoint: 1661,
    options: {
      chart: {
        height: 340
      },
    },
  }],
  grid: {
    strokeDashArray: 3,
    position: "back",
    row: {
      opacity: 0.5,
    },
    column: {
      opacity: 0.5,
    },
  },
  plotOptions: {
      bar: {
          horizontal: false,
          // borderRadius: 6,
          columnWidth: '20%',
      },
  },
  dataLabels: {
      enabled: false,
  },
  xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'July' , 'Aug' , 'Sep', 'Oct'],
      labels: {
        style: {
            fontFamily: 'Outfit, sans-serif',
            fontWeight: 500,
            colors: '#8D8D8D',
        },
    },
  },
  yaxis: {
    labels: {
      style: {
          fontFamily: 'Outfit, sans-serif',
          fontWeight: 500,
          colors: '#8D8D8D',
      },
    },
  },
  legend: {
      show: false,
  },
  fill: {
      opacity: 1
  }
};

var statisticschart = new ApexCharts(document.querySelector("#total-project"), options);
statisticschart.render();


var growthoptions = {
  series: [{
      name: 'Growth',
      data: [0, 14, 5, 20, 14, 30]
  }],
  chart: {
      height: 120,
      type: 'line',
      stacked: true,
      offsetY: 40,
      toolbar: {
          show: false
      },
  },
  grid: {
      show: false,
      borderColor: '#000000',
      strokeDashArray: 0,
      position: 'back',
      xaxis: {
          lines: {
              show: false,
          },
      },
      yaxis: {
          lines: {
              show: true,
          },
      },
  },

  colors: [RokoAdminConfig.primary],
  stroke: {
      width: 3,
      curve: 'smooth'
  },
  xaxis: {
    labels: {
        show: false
    },
  },
  yaxis: {
      min: -10,
      max: 40,
      labels: {
          show: false
      }
  },
  markers: {
    discrete: [{
      seriesIndex: 0,
      dataPointIndex: 0,
      fillColor: RokoAdminConfig.primary,
      strokeColor: RokoAdminConfig.primary,
      size: 4,
      shape: "circle"
    },
    {
      seriesIndex: 0,
      dataPointIndex: 1,
      fillColor: RokoAdminConfig.primary,
      strokeColor: RokoAdminConfig.primary,
      size: 4,
      shape: "circle"
    },
    {
      seriesIndex: 0,
      dataPointIndex: 2,
      fillColor: RokoAdminConfig.primary,
      strokeColor: RokoAdminConfig.primary,
      size: 4,
      shape: "circle"
    },
    {
      seriesIndex: 0,
      dataPointIndex: 3,
      fillColor: RokoAdminConfig.primary,
      strokeColor: RokoAdminConfig.primary,
      size: 4,
      shape: "circle"
    },
    {
      seriesIndex: 0,
      dataPointIndex: 4,
      fillColor: RokoAdminConfig.primary,
      strokeColor: RokoAdminConfig.primary,
      size: 4,
      shape: "circle"
    },
    {
      seriesIndex: 0,
      dataPointIndex: 5,
      fillColor: "#fff",
      strokeColor: RokoAdminConfig.primary,
      size: 5,
      shape: "circle"
    },
    ],
  },
};

var growthchart = new ApexCharts(document.querySelector("#monthlychart"), growthoptions);
growthchart.render();

(function ($) {
  "use strict";
  //product box
  var owl_carousel_custom = {
    init: function () {
  $("#owl-carousel-dashboard").owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    responsive:{
      1000:{
          items:1
      },
      0:{
        items: 1
      }
    }
  })
},
};
})(jQuery);