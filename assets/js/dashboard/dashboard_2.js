//  biticon -------
var expensesOption = {
    series: [
      {
        name: 'series2',
        data: [6, 4, 10, 6, 5, 5, 4, 10, 6, 5, 8, 4, 7, 6, 4, 10, 6, 5],
      },
    ],
    colors: [ "rgba(98, 113, 235, 0.2)" , "rgba(98, 113, 235, 0.2)" , "rgba(98, 113, 235, 0.2)" , "rgba(98, 113, 235, 0.2)" , "rgba(98, 113, 235, 0.2)" , "rgba(98, 113, 235, 0.2)" , "rgba(98, 113, 235, 0.2)" , "rgba(98, 113, 235, 0.2)" , "rgba(98, 113, 235, 0.2)" , woolAdminConfig.primary , woolAdminConfig.primary ,woolAdminConfig.primary , woolAdminConfig.primary , woolAdminConfig.primary , "rgba(98, 113, 235, 0.2)" , "rgba(98, 113, 235, 0.2)", "rgba(98, 113, 235, 0.2)", "rgba(98, 113, 235, 0.2)" ],
    chart: {
      width: 380,
      height: 100,
      type: 'bar',
      offsetY: 3,
      sparkline: {
        enabled: true,
      },
    },
    dataLabels: {
      enabled: false,
    },
    // stroke: {
    //     width: 3,
    //     colors: '#fff',
    // },        
    plotOptions: {
      bar: {
        borderRadius: 8,
        distributed: true,
        columnWidth: "80%",
        barHeight: '10%',
        dataLabels: {
          position: 'top',
        },
      }
    },
    xaxis: {
      show: false,
    },
    responsive: [
      {
        breakpoint: 1855,
          options: {
            chart: {
              width: 350,
            },
          }
      },
      {
        breakpoint: 1794,
          options: {
            chart: {
              width: 310,
            },
          }
      },
      {
        breakpoint: 1751,
          options: {
            chart: {
              width: 370,
            },
          }
      },
      {
        breakpoint: 1644,
          options: {
            chart: {
              width: 310,
            },
          }
      },
      {
        breakpoint: 1524,
          options: {
            chart: {
              width: 270,
            },
          }
      },
      {
        breakpoint: 1445,
          options: {
            chart: {
              width: 240,
            },
          }
      },
      {
        breakpoint: 1384,
          options: {
            chart: {
              width: 198,
            },
          }
      },
      {
        breakpoint: 1300,
          options: {
            chart: {
              width: 180,
            },
          }
      },
      {
        breakpoint: 1280,
          options: {
            chart: {
              width: 180,
            },
          }
      },
      {
        breakpoint: 1200,
          options: {
            chart: {
              width: 200,
            },
          }
      },
      {
        breakpoint: 950,
          options: {
            chart: {
              width: 400,
            },
          }
      },
      {
        breakpoint: 850,
          options: {
            chart: {
              width: 300,
            },
          }
      },
      {
        breakpoint: 750,
          options: {
            chart: {
              width: 250,
            },
          }
      },
      {
        breakpoint: 647,
          options: {
            chart: {
              width: 200,
            },
          }
      },
      {
        breakpoint: 1200,
          options: {
            chart: {
              width: 100,
            },
          }
      },
      {
        breakpoint: 992,
          options: {
            chart: {
              width: 400,
            },
          }
      },
    ]
  };
  var expensesEl = new ApexCharts(document.querySelector('#profit-chart'), expensesOption);
  expensesEl.render();
// var options = {
//     series: [{
//         name: 'Active',
//         data: [18, 10, 65, 18, 28, 10]
//     },],
//     chart: {
//       type: 'bar',
//       height: 270,
//       toolbar: {
//         show: false
//       },
//     },
//   plotOptions: {
//     bar: {
//       horizontal: false,
//       columnWidth: '70%',
//     },
//   },
//   dataLabels: {
//     enabled: false
//   },
//   xaxis: { 
//     labels: {
//         show: false,
//     },
//   },
//   yaxis: { 
//     labels: {
//         show: false,
//     },
//   },
//   stroke: {
//     show: true,
//     width: 6,
//     colors: ['transparent']
//   },
//   grid: {
//     show: false,
//   },
//   colors: ["#FFA941", "var(--theme-deafult)"],

//   fill: {
//     opacity: 1
//   },
//   legend: {
//     position: 'top',
//     horizontalAlign: 'left', 
//     fontFamily: "Nunito Sans, sans-serif",
//     fontSize: '14px',
//     fontWeight: 500,
//     labels: {
//         colors: "var(--chart-text-color)",
//     },
//     markers: {
//       width: 6,
//       height: 6,
//       radius: 12,
//     },
//     itemMargin: {
//       horizontal: 10,
//     }
//   },
// };

//   var chart = new ApexCharts(document.querySelector("#profit-chart"), options);
//   chart.render();

// var options1 = {
//     chart: {
//         height: 350,
//         type: 'area',
//         toolbar:{
//           show: false
//         }
//     },
//     dataLabels: {
//         enabled: false
//     },
//     stroke: {
//         curve: 'smooth'
//     },
//     series: [{
//         name: 'series1',
//         data: [31, 40, 28, 51, 42, 109, 100]
//     }, {
//         name: 'series2',
//         data: [11, 32, 45, 32, 34, 52, 41]
//     }],

//     xaxis: {
//         type: 'datetime',
//         categories: ["2018-09-19T00:00:00", "2018-09-19T01:30:00", "2018-09-19T02:30:00", "2018-09-19T03:30:00", "2018-09-19T04:30:00", "2018-09-19T05:30:00", "2018-09-19T06:30:00"],
//     },
//     tooltip: {
//         x: {
//             format: 'dd/MM/yy HH:mm'
//         },
//     },
//     colors:[ woolAdminConfig.primary , woolAdminConfig.secondary ]
// }

// var chart1 = new ApexCharts(
//     document.querySelector("#sales-analytics"),
//     options1
// );
// chart1.render();

//=============================

var growthoptions = {
  series: [
    {
      name: "Growth",
      data: [22, 55, 40, 30, 50, 40, 42],
    },
    {
      name: "Growth",
      data: [28, 42, 25, 45, 29, 32, 55],
    },
  ],
  chart: {
    height: 285,
    type: "area",
    toolbar: {
      show: false,
    },
    dropShadow: {
      enabled: true,
      enabledOnSeries: undefined,
      top: 5,
      left: 0,
      blur: 4,
      opacity: 0.22,
    },
  },
  grid: {
    xaxis: {
      lines: {
        show: true,
      },
    },
  },
  stroke: {
    width: 3,
    curve: "smooth",
  },
  dataLabels: {
    enabled: false, 
  },
  fill: {
    type: ['gradient', 'gradient'],
    gradient: {
      shade: 'dark',
      type: "vertical",
      shadeIntensity: 1,
      gradientToColors: [ woolAdminConfig.primary, woolAdminConfig.secondary ],
      inverseColors: true,
      opacityFrom: 0.3,
      opacityTo: 0.1,
      stops: [0, 100, 100, 100],
    }
  },
  xaxis: {
    type: "category",
    categories: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul"
    ],
    tickAmount: 10,
    axisTicks: {
      show: false,
    },
    axisBorder: {
      show: false,
    },
    tooltip: {
      enabled: false,
    },
    style: {
      fontFamily: "Nunito Sans, sans-serif",
    }
  },
  yaxis: {
    show: true,
    labels: {
      formatter: function (val) {
        return "$" + val + "00";
      },
      style: {
        fontSize: "14px",
        colors: "$theme-body-sub-title-color",
        fontFamily: "Nunito Sans, sans-serif",
      },
    },
  },
  legend: {
    show: false,
  }, 
  colors: [woolAdminConfig.primary , woolAdminConfig.secondary],
};

var growthchart = new ApexCharts(
  document.querySelector("#sales-analytics"),
  growthoptions
);
growthchart.render();

// var options = {
//   series: [35],
//   chart: {
//   height: 345,
//   type: 'radialBar',
//   toolbar: {
//     show: false
//   }
// },
// plotOptions: {
//   radialBar: {
//     // startAngle: -135,
//     // endAngle: 135,
//     // hollow: {
//     //   size: '78%',
//     //   dropShadow: {
//     //     enabled: false,
//     //   }
//     // },
//     dataLabels: {
//       show: true,
//       name: {
//         show: false,
//       },
//       value: {
//         color: woolAdminConfig.primary,
//         fontSize: '36px',
//         fontWeight: '700',
//         show: true,
//       }
//     }
//   }
// },
// colors: [woolAdminConfig.primary],
// stroke: {
//   lineCap: 'round'
// },
// tooltip: {
//   enabled: false
// }
// };
// var chart = new ApexCharts(document.querySelector("#goal"), options);
// chart.render();

// var options = {
//   series: [70],
//   chart: {
//   height: 350,
//   type: 'radialBar',
// },
// plotOptions: {
//   radialBar: {
        // endAngle: 225,
//     hollow: {
//       size: '50%',
//     }
//   },
// },
// colors: [woolAdminConfig.primary],
// labels: ['Cricket'],
// };

// var chart = new ApexCharts(document.querySelector("#rate-chart"), options);
// chart.render();

var options = {
  series: [75],
  chart: {
  height: 350,
  type: 'radialBar',
  },
  plotOptions: {
    radialBar: {
      startAngle: -135,
      endAngle: 225,
      track: { 
        show: true,
        // strokeWidth: "120%",
        background: ["rgba(98, 113, 235, 0.2)"],
        opacity: 1,
        margin: 3,
      },
      hollow: {
        margin: 0,
        size: '60%',
      },
      dataLabels: {
        show: true,
        name: {
          offsetY: -20,
          show: true,
          color: '#888',
          fontSize: '17px'
        },
        value: {
          formatter: function(val) {
            return parseInt(val);
          },
          color: '#111',
          fontSize: '36px',
          show: true,
        }
      }
    }
  },
  colors: [woolAdminConfig.primary],

  labels: ['Percent'],
  responsive: [
    {
      breakpoint: 1840,
        options: {
          chart: {
            height: 330,
            offsetX: 30,
          },
        }
    },
    {
      breakpoint: 1710,
        options: {
          chart: {
            height: 250,
            offsetX: 50,
          },
        }
    },
    {
      breakpoint: 1750,
        options: {
          chart: {
            height: 280,
          },
        }
    },
    {
      breakpoint: 1680,
        options: {
          chart: {
            height: 250,
          },
        }
    },
    {
      breakpoint: 1601,
        options: {
          chart: {
            height: 300,
            offsetX: -10,
          },
        }
    },
    {
      breakpoint: 1380,
        options: {
          chart: {
            height: 280,
            offsetX: 20,
          },
        }
    },
    {
      breakpoint: 1290,
        options: {
          chart: {
            height: 250,
          },
        }
    },
    {
      breakpoint: 1220,
        options: {
          chart: {
            height: 210,
          },
        }
    },
    {
      breakpoint: 1200,
        options: {
          chart: {
            height: 300,
          },
        }
    },
    {
      breakpoint: 992,
        options: {
          chart: {
            height: 350,
          },
        }
    },
    {
      breakpoint: 683,
        options: {
          chart: {
            height: 300,
            offsetX: 40,
          },
        }
    },
    {
      breakpoint: 630,
        options: {
          chart: {
            height: 280,
          },
        }
    },
    {
      breakpoint: 600,
        options: {
          chart: {
            height: 290,
            offsetY: 120,
            offsetX: 20,
          },
        }
    },
  ]
};

var chart = new ApexCharts(document.querySelector("#rate-chart"), options);
chart.render();
