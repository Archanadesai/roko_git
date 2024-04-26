const Option = {
  series: [
      {
          data: [
              {
                  x: '01',
                  y: [140, 360],
              },
              {
                  x: '02',
                  y: [180, 400],
              },
              {
                  x: '03',
                  y: [160, 400],
              },
              {
                  x: '04',
                  y: [180, 420],
              },
              {
                  x: '05',
                  y: [160, 480],
              },
              {
                  x: '06',
                  y: [160, 300],
              },
              {
                  x: '07',
                  y: [190, 400],
              },
              {
                  x: '08',
                  y: [140, 300],
              },
              {
                  x: '09',
                  y: [200, 420],
              },
              {
                  x: '10',
                  y: [180, 280],
              },
              {
                  x: '11',
                  y: [170, 410],
              },
              {
                  x: '12',
                  y: [160, 380],
              },
              {
                  x: '13',
                  y: [200, 450],
              },
              {
                  x: '14',
                  y: [170, 470],
              },
              {
                  x: '15',
                  y: [180, 420],
              },
              {
                  x: '16',
                  y: [140, 360],
              },
              {
                  x: '17',
                  y: [180, 400],
              },
              {
                  x: '18',
                  y: [160, 400],
              },
              {
                  x: '19',
                  y: [180, 420],
              },
              {
                  x: '20',
                  y: [160, 480],
              },
              {
                  x: '21',
                  y: [160, 300],
              },
              {
                  x: '22',
                  y: [190, 400],
              },
              {
                  x: '23',
                  y: [140, 300],
              },
              {
                  x: '24',
                  y: [200, 420],
              },
              {
                  x: '25',
                  y: [180, 280],
              }
          ],
      },
  ],
  chart: {
      type: 'rangeBar',
      height: 300,
      toolbar: {
          show: false,
      },
  },
  legend: {
      show: false,
  },
  grid: {
      show: true,
      borderColor: 'rgba(106, 113, 133, 0.30)',
      strokeDashArray: 3,
  },
  fill: {
      type: 'gradient',
      gradient: {
          shade: 'dark',
          type: 'vertical',
          shadeIntensity: 0.5,
          gradientToColors: [RokoAdminConfig.primary],
          inverseColors: true,
          opacityFrom: 1,
          opacityTo: 1,
          stops: [65, 35]
      }
  },
  tooltip: {
      enabled: false,
  },
  colors: [RokoAdminConfig.secondary],
  plotOptions: {
      bar: {
          horizontal: false,
          columnWidth: '40%',
          borderRadius: 4,
      },
  },
  dataLabels: {
      enabled: false,
  },

  yaxis: {
      logBase: 100,
      tickAmount: 4,
      min: 100,
      max: 600,
      labels: {
          show: true,
          align: 'right',
          minWidth: 0,
          maxWidth: 34,
          formatter: function (val) {
              return "$" + val + "" + "";
            },

          style: {
              fontFamily: 'Outfit, sans-serif',
              fontWeight: 500,
              colors: '#3D434A',
          },
      },
  },
  xaxis: {
      categories: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15' ,'16', '17', '18', '19', '20', '21', '22', '23', '24', '25'],
      labels: {
          minHeight: undefined,
          maxHeight: 24,
          offsetX: 0,
          offsetY: 0,

          style: {
              fontFamily: 'Outfit, sans-serif',
              fontWeight: 500,
              colors: '#8D8D8D',
          },
      },
      axisTicks: {
          show: false
      },
      axisBorder: {
          show: false
      },
      tooltip: {
          enabled: false,
      },
  },
  responsive: [
    {
      breakpoint: 576,
      options: {
        xaxis: {
          categories: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10'],
        },
        series: [
          {
            data: [
              {
                x: '01',
                y: [140, 360],
              },
              {
                x: '02',
                y: [180, 400],
              },
              {
                x: '03',
                y: [160, 400],
              },
              {
                x: '04',
                y: [180, 420],
              },
              {
                x: '05',
                y: [160, 480],
              },
              {
                x: '06',
                y: [160, 300],
              },
              {
                x: '07',
                y: [190, 400],
              },
              {
                x: '08',
                y: [140, 300],
              },
              {
                x: '09',
                y: [200, 420],
              },
              {
                x: '10',
                y: [180, 280],
              },
            ],
          },
        ],
      },
    },
  ]
};

const ChartEl = new ApexCharts(document.querySelector('#salse-overview'), Option);
ChartEl.render();


var options = {
  series: ["84"],
  chart: {
  type: 'radialBar',
  offsetY: -20,
  sparkline: {
    enabled: true
  }
},
colors: [RokoAdminConfig.primary],
plotOptions: {
  radialBar: {
    startAngle: -90,
    endAngle: 90,
    track: {
      background: "#F4F9FF",
      strokeWidth: '97%',
      margin: 5, 
      dropShadow: {
        enabled: true,
        top: 2,
        left: 0,
        color: '#999',
        opacity: 0.2,
        blur: 8,
      },
    },
    hollow: {
      size: '55%',
    },
    dataLabels: {
      name: {
        show: true,
      },
      value: {
        offsetY: -40,
        fontSize: '30px',
        fontWeight: 600,
        color: "1F2F3E",
      },
      total: {
          show: true,
          label: 'Total Transaction',
          color: '#848789',
          fontSize: '18px',
          fontWeight: 500,
        }
    }
  }
},
responsive: [
  {
    breakpoint: 1500,
    options: {
      plotOptions: {
        radialBar: {
          dataLabels: {
            total: {
              fontSize: '16px',
            }
          }
        }
      },
    },
  },
  {
    breakpoint: 1366,
    options: {
      chart: {
        height: 250,
      },
    },
  },
],
grid: {
  padding: {
    top: -30
  }
},
labels: ['Average Results'],
};
var chart = new ApexCharts(document.querySelector("#transaction-chart"), options);
chart.render();

var options = {
  series: [42,  52,58, 80,  65 ],
  chart: {
  width: 230,
  type: 'polarArea',
  offsetY: -20,
  offsetX: -30,
},
fill: {
  opacity: 1,
  colors: ["#16C7F9", RokoAdminConfig.secondary, "#D6D16D", RokoAdminConfig.primary , "#795ebd6b"],
},
stroke: {
  width: 1,
  colors: ["#ffffff"]
},
yaxis: {
  show: false
},    
legend: {
  show: false,
  position: 'bottom',
},
grid: {
  padding: {
    bottom: -20
  }
},
plotOptions: {
  polarArea: {
    rings: {
      strokeWidth: 0
    },
    spokes: {
      strokeWidth: 0
    },
  }
},
theme: {
  monochrome: {
    enabled: true,
    shadeTo: 'light',
    shadeIntensity: 0.6
  }
},
responsive: [
  {
    breakpoint: 992,
    options: {
      chart: {
        height: 180,
      },
    },
  },
  {
    breakpoint: 381,
    options: {
      chart: {
        height: 200,
        offsetY: -10,
        offsetX: 0,
      },
    },
  },
]
};

var chart = new ApexCharts(document.querySelector("#pipeline-chart"), options);
chart.render();

var optionsoverview = {
  series: [
    {
      name: "Successfully Sold",
      type: "area",
      data: [45, 30, 28, 35, 25, 30, 40],
    },
    {
      name: "Product Viewer", 
      type: "area", 
      data: [30, 42, 37, 25, 34, 38, 27],
    },
  ],
  chart: {
    height: 315,
    type: "line",
    stacked: false,
    toolbar: {
      show: false, 
    },
    dropShadow: {
      enabled: true,
      top: 2,
      left: 0,
      blur: 4,
      color: "#000",
      opacity: 0.08,
    },
  },
  stroke: {
    width: [2, 2, 2],  
    curve: "straight",
  },
  grid: {
    show: true,
    borderColor: "var(--chart-border)", 
    strokeDashArray: 0,
    position: "back",
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
  colors: [RokoAdminConfig.primary ,RokoAdminConfig.secondary],
  fill: {
    type: "gradient",
    gradient: {
      shade: "light",
      type: "vertical",
      opacityFrom: 0.4,
      opacityTo: 0, 
      stops: [0, 100],
    },
  }, 
  labels: [
    "Sun",
    "Mon",
    "Tue",
    "Wed",
    "Thu",
    "Fri",
    "Sat",
  ],
  markers: {
    size: 5
  },
  xaxis: {
    type: "category",
    tickAmount: 4,
    tickPlacement: "between",
    tooltip: {
      enabled: false,
    },
    axisTicks: {
      show: false,
    },
    labels: {
      style: {
          fontFamily: 'Outfit, sans-serif',
          fontWeight: 500,
          colors: '#8D8D8D',
      },
  },
  },
  legend: {
    show: true,
  },
  yaxis: {
    tickAmount: 4,
    min: 10,
    max: 60,
    show: true,
    min: 0,
    labels: {
      formatter: function (val) {
        return "$" + val + "k" + "";
      },
      style: {
        fontFamily: 'Outfit, sans-serif',
        fontWeight: 500,
        colors: '#3D434A',
     },
    },
  },
  tooltip: {
    shared: false,
    intersect: false,
  },
};

var chartoverview = new ApexCharts(
  document.querySelector("#orderoverview"),
  optionsoverview
);
chartoverview.render();