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