import 'echarts/extension/bmap/bmap'

let options = {
  xAxis: false,
  yAxis: false,
  grid: false,
  tooltip: {
    trigger: 'item'
  },
  bmap: {
    center: [104.114129, 37.550339],
    zoom: 6,
    roam: true,
    tooltip: {
      trigger: 'item'
    },
    mapStyle: {
      styleJson: [
        {
          featureType: 'water',
          elementType: 'all',
          stylers: {
            color: '#044161'
          }
        },
        {
          featureType: 'land',
          elementType: 'all',
          stylers: {
            color: '#004981'
          }
        },
        {
          featureType: 'boundary',
          elementType: 'geometry',
          stylers: {
            color: '#064f85'
          }
        },
        {
          featureType: 'railway',
          elementType: 'all',
          stylers: {
            visibility: 'off'
          }
        },
        {
          featureType: 'highway',
          elementType: 'geometry',
          stylers: {
            color: '#004981'
          }
        },
        {
          featureType: 'highway',
          elementType: 'geometry.fill',
          stylers: {
            color: '#005b96',
            lightness: 1
          }
        },
        {
          featureType: 'highway',
          elementType: 'labels',
          stylers: {
            visibility: 'off'
          }
        },
        {
          featureType: 'arterial',
          elementType: 'geometry',
          stylers: {
            color: '#004981'
          }
        },
        {
          featureType: 'arterial',
          elementType: 'geometry.fill',
          stylers: {
            color: '#00508b'
          }
        },
        {
          featureType: 'poi',
          elementType: 'all',
          stylers: {
            visibility: 'off'
          }
        },
        {
          featureType: 'green',
          elementType: 'all',
          stylers: {
            color: '#056197',
            visibility: 'off'
          }
        },
        {
          featureType: 'subway',
          elementType: 'all',
          stylers: {
            visibility: 'off'
          }
        },
        {
          featureType: 'manmade',
          elementType: 'all',
          stylers: {
            visibility: 'off'
          }
        },
        {
          featureType: 'local',
          elementType: 'all',
          stylers: {
            visibility: 'off'
          }
        },
        {
          featureType: 'arterial',
          elementType: 'labels',
          stylers: {
            visibility: 'off'
          }
        },
        {
          featureType: 'boundary',
          elementType: 'geometry.fill',
          stylers: {
            color: '#029fd4'
          }
        },
        {
          featureType: 'building',
          elementType: 'all',
          stylers: {
            color: '#1a5787'
          }
        },
        {
          featureType: 'label',
          elementType: 'all',
          stylers: {
            visibility: 'off'
          }
        }
      ]
    }
  }
}

export default options
