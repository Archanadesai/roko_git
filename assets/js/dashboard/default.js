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
      gradientToColors: [RokoAdminConfig.primary , RokoAdminConfig.secondary],
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
  colors: [RokoAdminConfig.primary , RokoAdminConfig.secondary],
};

var growthchart = new ApexCharts(
  document.querySelector("#sales-analytics"),
  growthoptions
);
growthchart.render();


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
  color:  RokoAdminConfig.primary,
};
const priceChart1El = document.querySelector('#priceChart1');
if (priceChart1El) {
  var priceChart1 = new ApexCharts(priceChart1El, priceChartOptions(priceGraph1));
  priceChart1.render();
}

// /*===== Table Sparkline 2 =====*/
const priceGraph2 = {
  data: [1,25,10,25,25,18,25,10,30],
  color:  RokoAdminConfig.secondary,
};
const priceChart2El = document.querySelector('#priceChart2');
if (priceChart2El) {
  var priceChart2 = new ApexCharts(priceChart2El, priceChartOptions(priceGraph2));
  priceChart2.render();
}

// /*===== Table Sparkline 3 =====*/
const priceGraph3 = {
  data: [1,25,10,25,25,10,25,18,30],
  color: RokoAdminConfig.tertiary ,
};
const priceChart3El = document.querySelector('#priceChart3');
if (priceChart3El) {
  var priceChart3 = new ApexCharts(priceChart3El, priceChartOptions(priceGraph3));
  priceChart3.render();
}

// /*===== Table Sparkline 4 =====*/
const priceGraph4 = {
  data: [1,25,10,25,25,18,25,10,30],
  color:  RokoAdminConfig.primary,
};
const priceChart4El = document.querySelector('#priceChart4');
if (priceChart4El) {
  var priceChart4 = new ApexCharts(priceChart4El, priceChartOptions(priceGraph4));
  priceChart4.render();
}

// /*===== Table Sparkline 5 =====*/
const priceGraph5 = {
  data: [1,55,10,30,10,55,20,30],
  color:  RokoAdminConfig.secondary,
};
const priceChart5El = document.querySelector('#priceChart5');
if (priceChart5El) {
  var priceChart5 = new ApexCharts(priceChart5El, priceChartOptions(priceGraph5));
  priceChart5.render();
}


const monthlyChartOption = {
  series: [
    {
      name: 'Good',
      data: [170, 250, 350, 150, 230, 120, 330, 350, 280, 300, 250, 110],
    },
    {
      name: 'Very Good',
      data: [290, 180, 120, 290, 370, 250, 230, 200, 140, 220, 220, 330],
    },
  ],
  colors: [RokoAdminConfig.primary , RokoAdminConfig.secondary],
  chart: {
    type: 'bar',
    height: 230,
    width: '100%',
    offsetY: 10,
    offsetX: 0,
    toolbar: {
      show: false,
    },
  },
  plotOptions: {
    bar: {
      horizontal: false,
      dataLabels: {
        position: 'top',
      },
    },
  },

  grid: {
    show: false,
    padding: {
      left: -8,
      right: 0,
    },
  },
  dataLabels: {
    enabled: false,
  },
  plotOptions: {
    bar: {
      horizontal: false,
      borderRadius: 8,
      columnWidth: '45%',
      barHeight: '100%',
      s̶t̶a̶r̶t̶i̶n̶g̶S̶h̶a̶p̶e̶: 'rounded',
      e̶n̶d̶i̶n̶g̶S̶h̶a̶p̶e̶: 'rounded',
    },
  },

  stroke: {
    show: true,
    width: 1,
    colors: ['#fff'],
  },
  tooltip: {
    shared: true,
    intersect: false,
    x: {
      show: true,
      format: 'dd MMM',
      formatter: undefined,
    },
    y: {
      show: false,
    },
  },
  yaxis: {
    show: false,
    min: 0,
    max: 400,
    logBase: 100,
    tickAmount: 4,
  },
  xaxis: {
    show: false,
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
  legend: {
    show: false,
  },
};

const monthlyChartChartEl = new ApexCharts(document.querySelector('#monthlyChart'), monthlyChartOption);
monthlyChartChartEl.render();


var options = {
  series: [{
    name: "Product Sales",
    data: [5, 15, 70, 45, 38, 53, 38, 40, 53, 45, 95, 53, 60, 65, 60, 53, 20,    67 , 20 , 69, 65, 75, 72, 65, 72, 95, 50 , 45 , 57 , 54 , 48 , 53 , 60 , 25, 30]
}],
  chart: {
  height: 320,
  type: 'area',
  zoom: {
    enabled: false
  },
  toolbar:{
    show: false,
  },  
},
dataLabels: {
  enabled: false
},
stroke: {
  curve: 'straight',
  width: 3,
},
colors:[ RokoAdminConfig.primary ],
fill: {
  type: "gradient",
  gradient: {
    shadeIntensity: 1,
    opacityFrom: 0.4,
    opacityTo: 0.2,
    stops: [0, 100, 100]
  }
},
grid: {
  row: {
    colors: ['transparent'], // takes an array which will be repeated on columns
    opacity: 0.5
  },
},
xaxis: {
  categories: [' ', ' ', '12:00', ' ', ' ', ' ', '', ' ', '15:00' , ' ' , ' ' , ' ' , ' ' , ' ' , '18:00', ' ', ' ', ' ', ' ', ' ', '21:00', ' ', ' ' , ' ' , ' ' , ' ' , '03:00' , ' ' , ' ', ' ', ' ', ' ' , '04:00' , ' ' , ' ' ],
  labels: {
    style: {
      fontSize: "13px",
      colors: "#959595",
      fontFamily: "Lexend, sans-serif",
    },
  },
  axisBorder: {
    show: false
  },
},
yaxis: {
  labels: {
    formatter: function (val) {
      return "$" + val + "" + "k";
    },
    style: {
      fontSize: "14px",
      colors: "#171829",
      fontWeight: "500",
      fontFamily: "Lexend, sans-serif",
    },
  },
},
tooltip: {
  custom: function ({ series, seriesIndex, dataPointIndex,}) {
    return '<div class="apex-tooltip p-2">' + '<span>' + '<span class="bg-primary">' + '</span>' + 'Product Sales' + '<h3>' + '$'+ series[seriesIndex][dataPointIndex] + '<h3/>'  + '</span>' + '</div>';
  },
},
responsive: [
  {
    breakpoint: 1200,
    options: {
      chart: {
        height: 320,
      },
    },
  },
]
};
var chart = new ApexCharts(document.querySelector("#product-sales"), options);
chart.render();

// temperature chart
var optionsoverview = {
  series: [
    {
      name: "view",
      data: [40, 45, 40, 45],
    },
  ],
  chart: {
    height: 340,
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
};

var temperaturechart = new ApexCharts(
  document.querySelector("#temperature-chart"),
  optionsoverview
);
temperaturechart.render();