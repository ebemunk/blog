import data from '../../data/crashes-geo.csv'

export const source = {
  type: 'geojson',
  data: {
    type: 'FeatureCollection',
    features: data.map(d => ({
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [+d.loc_lng, +d.loc_lat],
      },
      properties: {
        count: +d.count,
      },
    })),
  },
}

export const bermudaFill = {
  id: 'bermuda-fill',
  type: 'fill',
  source: {
    type: 'geojson',
    data: {
      type: 'Feature',
      geometry: {
        type: 'Polygon',
        coordinates: [
          [[-64.73, 32.31], [-80.19, 25.76], [-66.09, 18.43], [-64.73, 32.31]],
        ],
      },
    },
  },
  layout: {},
  paint: {
    'fill-color': '#088',
    'fill-opacity': 0.4,
  },
}

export const bermudaStroke = {
  id: 'bermuda-stroke',
  type: 'line',
  source: {
    type: 'geojson',
    data: {
      type: 'Feature',
      geometry: {
        type: 'Polygon',
        coordinates: [
          [[-64.73, 32.31], [-80.19, 25.76], [-66.09, 18.43], [-64.73, 32.31]],
        ],
      },
    },
  },
  layout: {},
  paint: {
    'line-color': '#ff0000',
    'line-opacity': 1,
    'line-width': 2,
  },
}

export const heatmap = {
  id: 'crashes-heatmap',
  type: 'heatmap',
  source: 'crashes',
  maxzoom: 9,
  paint: {
    // Increase the heatmap weight based on frequency and property magnitude
    'heatmap-weight': ['interpolate', ['linear'], ['get', 'count'], 0, 0, 6, 1],
    // Increase the heatmap color weight weight by zoom level
    // heatmap-intensity is a multiplier on top of heatmap-weight
    'heatmap-intensity': ['interpolate', ['linear'], ['zoom'], 0, 1, 9, 3],
    // Color ramp for heatmap.  Domain is 0 (low) to 1 (high).
    // Begin color ramp at 0-stop with a 0-transparancy color
    // to create a blur-like effect.
    'heatmap-color': [
      'interpolate',
      ['linear'],
      ['heatmap-density'],
      0,
      'rgba(33,102,172,0)',
      0.2,
      'rgb(103,169,207)',
      0.4,
      'rgb(209,229,240)',
      0.6,
      'rgb(253,219,199)',
      0.8,
      'rgb(239,138,98)',
      1,
      'rgb(178,24,43)',
    ],
    // Adjust the heatmap radius by zoom level
    'heatmap-radius': ['interpolate', ['linear'], ['zoom'], 0, 2, 9, 20],
    // Transition from heatmap to circle layer by zoom level
    'heatmap-opacity': ['interpolate', ['linear'], ['zoom'], 7, 1, 9, 0],
  },
}

export const scatter = {
  id: 'crashes-scatter',
  type: 'circle',
  source: 'crashes',
  minzoom: 7,
  paint: {
    // Size circle radius by earthquake magnitude and zoom level
    'circle-radius': [
      'interpolate',
      ['linear'],
      ['zoom'],
      7,
      ['interpolate', ['linear'], ['get', 'count'], 1, 1, 6, 4],
      16,
      ['interpolate', ['linear'], ['get', 'count'], 1, 5, 6, 50],
    ],
    // Color circle by earthquake magnitude
    'circle-color': 'red',
    // 'circle-color': [
    //   'interpolate',
    //   ['linear'],
    //   ['get', 'count'],
    //   1,
    //   'rgba(33,102,172,0)',
    //   2,
    //   'rgb(103,169,207)',
    //   3,
    //   'rgb(209,229,240)',
    //   4,
    //   'rgb(253,219,199)',
    //   5,
    //   'rgb(239,138,98)',
    //   6,
    //   'rgb(178,24,43)',
    // ],
    'circle-stroke-color': 'white',
    'circle-stroke-width': 1,
    // Transition from heatmap to circle layer by zoom level
    'circle-opacity': ['interpolate', ['linear'], ['zoom'], 7, 0, 8, 1],
  },
}
