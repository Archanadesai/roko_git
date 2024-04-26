var options = {
  series: [{
  name: 'TEAM A',
  type: 'column',
  data: [220,, 250, , 210, , 210, , 270, , 220, , 250, , 260, , 210, , 230]
},{
  name: 'TEAM B',
  type: 'area',
  data: [210,170, 240, 160, 200, 170, 200, 150, 260, 170, 210,170,240, 160, 250, 140, 200, 140,220,220]
}],
  chart: {
  height: 335,
  type: 'area',
  stacked: false,
  toolbar: {
    show: false,
  }
},
stroke: {
  width: [0, 2, 5],
  curve: 'stepline'
},
plotOptions: {
  bar: {
    columnWidth: '100px'
  }
},
colors: [ '#bebebe' , RokoAdminConfig.primary],
dropShadow: {
  enabled: true,
  top: 5,
  left: 6,
  bottom: 5,
  blur: 2,
  color: RokoAdminConfig.primary,
  opacity: 0.5,
},
fill: {
    type: "gradient",
    gradient: {
      shadeIntensity: 1,
      opacityFrom: 0.5,
      opacityTo: 0.1,
      stops: [0, 90, 100]
    }
  },    
grid :{
  show: true,
  strokeDashArray: 3,
  xaxis: {
    lines: {
      show: true,
    }
  },
  yaxis: {
    lines: {
      show: true,
    }
  },
},
xaxis: {
  categories: ["Jan", "", "feb", "", "Mar", "", "Apr", "", "May", "", "Jun" ,"" , "July" , "" , "Aug" , "" , "Sep" , "" , "Oct" , ""],
  labels: {
    style: {
        fontFamily: 'Outfit, sans-serif',
        fontWeight: 500,
        colors: '#8D8D8D',
    },
  },
},
dataLabels: {
  enabled: false,
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
legend:{
  show: false,
},
tooltip: {
  custom: function ({ series, seriesIndex, dataPointIndex,}) {
    return '<div class="apex-tooltip p-2">' + '<span>' + '<span class="bg-primary">' + '</span>' + 'Project Created' + '<h3>' + '$'+ series[seriesIndex][dataPointIndex] + '<h3/>'  + '</span>' + '</div>';
  },
},
};
var chart = new ApexCharts(document.querySelector("#revenuegrowth-1"), options);
chart.render();

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

var growthchart = new ApexCharts(document.querySelector("#monthlychart-1"), growthoptions);
growthchart.render();

var optionssalessummary = {
  series: [
    {
      name: "Activity",
      data: [42, 44, 55, 66, 55, 86, 52, 44, 44, 66, 55, 86, 52, 44, 44],
    },
  ],
  chart: {
    height: 130,
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
  responsive: [
    {
      breakpoint: 1262,
      options: {
        chart: {
          height: 110,
        },
      },
    },
  ],
  colors: ['#d6e5fd', '#d6e5fd', '#d6e5fd', '#d6e5fd', '#d6e5fd', RokoAdminConfig.primary, '#d6e5fd', '#d6e5fd', '#d6e5fd', '#d6e5fd', '#d6e5fd' , '#d6e5fd' , '#d6e5fd' , '#d6e5fd' , '#d6e5fd'],
};
var chartasalessummary = new ApexCharts(
  document.querySelector("#online-chart-1"),
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
  height: 190,
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
  responsive: [
    {
      breakpoint: 1262,
      options: {
        chart: {
          height: 170,
        },
      },
    },
  ],
};
var chart = new ApexCharts(document.querySelector("#offline-chart-1"), options);
chart.render();

  // growth chart
  var followersoptions = {
    series: [
      {
        name: "Growth",
        // data: [10, 5, 25, 35, 15, 25, 5],
        data: [21, 10, 40, 20, 40, 10, 20],
      },
    ],
    chart: {
      height: 85,
      type: "line",
      toolbar: {
        show: false,
      },
      dropShadow: {
        enabled: true,
        enabledOnSeries: undefined,
        top: 5,
        left: 0,
        blur: 4,
        color: "#7366ff",
        opacity: 0.22,
      },
    },
    grid: {
      yaxis: {
        lines: {
          show: false,
        },
      },
    },
    colors: ["#5527FF"],
    stroke: {
      width: 3,
      curve: "smooth",
    },
    xaxis: {
      tickAmount: 10,
      labels: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
      tooltip: {
        enabled: false,
      },
    },
    fill: {
      type: "gradient",
      gradient: {
        shade: "dark",
        gradientToColors: [RokoAdminConfig.primary],
        shadeIntensity: 1,
        type: "horizontal",
        opacityFrom: 1,
        opacityTo: 1,
        colorStops: [
          {
            offset: 0,
            color: RokoAdminConfig.primary,
            opacity: 1,
          },
          {
            offset: 100,
            color: RokoAdminConfig.secondary,
            opacity: 1,
          },
        ],
      },
    },
    yaxis: {
      min: -10,
      max: 40,
      labels: {
        show: false,
      },
    },
    responsive: [
      {
        breakpoint: 1601,
        options: {
          chart: {
            height: 100,
          },
        },
      },
      {
        breakpoint: 992,
        options: {
          chart: {
            height: 80,
          },
        },
      },
    ],
  };

  var followersgrowth = new ApexCharts(
    document.querySelector("#followers-growth"),
    followersoptions
  );
  followersgrowth.render();

  // temperature chart
var optionsoverview = {
  series: [
    {
      name: "view",
      data: [30, 35, 30, 35],
    },
  ],
  chart: {
    height: 350,
    type: "line",
    stacked: false,
    toolbar: {
      show: false, 
    },
  },
  stroke: {
    width: 3,  
    curve: "smooth",
  },
  grid: {
    show: true,
    borderColor: "#D6D6D6", 
    strokeDashArray: 3,
    position: "back",
    xaxis: {
      lines: {
        show: true,
      },
    },
    yaxis: {
      lines: {
        show: false,
      },
    },
  },
  colors: [RokoAdminConfig.primary ,RokoAdminConfig.secondary],
  fill: {
    opacity: 1,
    type: "gradient",
    gradient: {
      shade: "light",
      type: "vertical",
      shadeIntensity: 1,
      opacityFrom: 0.95,
      opacityTo: 1,
      colorStops: [
        {
          offset: 0,
          color: RokoAdminConfig.primary,
          opacity: 0.05,
        },
        {
          offset: 30,
          color: RokoAdminConfig.primary,
          opacity: 1,
        },
        {
          offset: 80,
          color: RokoAdminConfig.primary,
          opacity: 1,
        },
        {
          offset: 100,
          color: RokoAdminConfig.primary,
          opacity: 0.1,
        },
      ],
    },
  },
  labels: [
    "Morning",
    "Afternon",
    "Evening",
    "Night",
  ],
  markers: {
    size: 6,
    colors: "#fff",
    strokeColor: RokoAdminConfig.primary,
    strokeWidth: 3,
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
          fontWeight: 600,
          colors: '#1F2F3E',
      },
    },
  },
  legend: {
    show: false,
  },
  yaxis: {
    tickAmount: 4,
    min: 10,
    max: 60,
    show: true,
    min: 0,
    labels: {
      show: false,
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
  responsive: [
    {
      breakpoint: 992,
      options: {
        chart: {
          height: 300,
        },
      },
    },
    {
      breakpoint: 768,
      options: {
        chart: {
          height: 280,
        },
      },
    },
  ],
};

var temperaturechart = new ApexCharts(
  document.querySelector("#temperature-chart"),
  optionsoverview
);
temperaturechart.render();

// monthly sales
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
              }
          ],
      },
  ],
  chart: {
      type: 'rangeBar',
      height: 310,
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
      categories: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15' ,'16', '17', '18', '19', '20'],
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
};

const ChartEl = new ApexCharts(document.querySelector('#salse-overview'), Option);
ChartEl.render();