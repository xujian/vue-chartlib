var contrastColor = '#000'
var axisCommon = function () {
  return {
    axisLine: {
      lineStyle: {
        color: contrastColor
      }
    },
    axisTick: {
      lineStyle: {
        color: contrastColor
      }
    },
    axisLabel: {
      textStyle: {
        color: contrastColor
      }
    },
    splitLine: {
      lineStyle: {
        type: 'dashed',
        color: '#aaa'
      }
    },
    splitArea: {
      areaStyle: {
        color: contrastColor
      }
    }
  }
}

var colorPalette: string[] = [
]
var theme = {
  color: colorPalette,
  backgroundColor: 'rgba(0,0,0,.2)',
  tooltip: {
    axisPointer: {
      lineStyle: {
        color: contrastColor
      },
      crossStyle: {
        color: contrastColor
      }
    }
  },
  legend: {
    textStyle: {
      color: contrastColor
    }
  },
  textStyle: {
    color: contrastColor
  },
  title: {
    textStyle: {
      color: contrastColor
    }
  },
  toolbox: {
    iconStyle: {
      normal: {
        borderColor: contrastColor
      }
    }
  },
  dataZoom: {
    textStyle: {
      color: contrastColor
    }
  },
  timeline: {
    lineStyle: {
      color: contrastColor
    },
    itemStyle: {
      normal: {
      }
    },
    label: {
      normal: {
        textStyle: {
          color: contrastColor
        }
      }
    },
    controlStyle: {
      normal: {
        color: contrastColor,
        borderColor: contrastColor
      }
    }
  },
  timeAxis: axisCommon(),
  logAxis: axisCommon(),
  valueAxis: axisCommon(),
  categoryAxis: axisCommon(),

  line: {
    symbol: 'circle'
  },
  graph: {
    color: colorPalette
  },
  gauge: {
    title: {
      textStyle: {
        color: contrastColor
      }
    }
  },
  candlestick: {
    itemStyle: {
      normal: {
        color: '#FD1050',
        color0: '#0CF49B',
        borderColor: '#FD1050',
        borderColor0: '#0CF49B'
      }
    }
  }
}

export default theme
