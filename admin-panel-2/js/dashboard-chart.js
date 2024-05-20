// area-chart

var options = {
    series: [
    {
      data: [
        {
          x: '2002',
          y: [2800, 4500]
        },
        {
          x: '2003',
          y: [3200, 4100]
        },
        {
          x: '2004',
          y: [2950, 7800]
        },
        {
          x: '2005',
          y: [3000, 4600]
        },
        {
          x: '2006',
          y: [3500, 4100]
        },
        {
          x: '2007',
          y: [4500, 6500]
        },
        {
          x: '2008',
          y: [2000, 3500]
        },
        {
          x: '2009',
          y: [2300, 7500]
        },
        {
          x: '2010',
          y: [3450, 7800]
        },
        {
          x: '2011',
          y: [4000, 4600]
        },
        {
          x: '2012',
          y: [4600, 6500]
        },
        {
          x: '2013',
          y: [4500, 6500]
        },
        {
          x: '2014',
          y: [8600, 7600]
        },
        {
          x: '2015',
          y: [6400, 8600]
        },
        {
          x: '2016',
          y: [5400, 9400]
        },
        {
          x: '2017',
          y: [2200, 6100]
        },
        {
          x: '2018',
          y: [6200, 4100]
        },
        {
          x: '2019',
          y: [2200, 3100]
        },
        {
          x: '2020',
          y: [5400, 9400]
        },
        {
          x: '2021',
          y: [2200, 6100]
        },
        {
          x: '2022',
          y: [1600, 3200]
        },
        {
          x: '2023',
          y: [2200, 4400]
        },
      ]
    }
  ],
    chart: {
    height: 580,
    type: 'rangeBar',
    zoom: {
      enabled: false
    }
  },
  plotOptions: {
    bar: {
      isDumbbell: true,
      columnWidth: 3,
      dumbbellColors: [['#23B7E5', '#B289FF']]
    }
  },
  legend: {
    show: true,
    showForSingleSeries: true,
    position: 'top',
    horizontalAlign: 'left',
    customLegendItems: ['Product A', 'Product B']
  },
  fill: {
    type: 'gradient',
    gradient: {
      type: 'vertical',
      gradientToColors: ['#B289FF'],
      inverseColors: true,
      stops: [0, 100]
    }
  },
  grid: {
    xaxis: {
      lines: {
        show: true
      }
    },
    yaxis: {
      lines: {
        show: false
      }
    }
  },
  xaxis: {
    tickPlacement: 'on'
  }
  };
  
  var chart = new ApexCharts(document.querySelector("#myChart"), options);
  chart.render();
  