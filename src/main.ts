import './style.css';
import maplibregl, {
  Map,
  GeolocateControl,
  ScaleControl,
  NavigationControl
} from 'maplibre-gl';
import * as pmtiles from 'pmtiles';
import 'maplibre-gl/dist/maplibre-gl.css';

// Otaniemi center coordinates
const center: [number, number] = [24.82685, 60.18498];
const zoom = 13.66;
const hash = true;

// PMTiles source URL
const pmtilesUrl = 'https://hfu.github.io/otaniemi.pmtiles/otaniemi.pmtiles';

// Create a PMTiles protocol handler
const protocol = new pmtiles.Protocol();
if ((maplibregl as any).addProtocol) {
  (maplibregl as any).addProtocol('pmtiles', protocol.tile);
}

const layer = {
  source: 'otaniemi',
};

// Theme definitions
const THEMES = {
  LIGHT: {
    earth: '#f5f5f5', // lighter gray
    buildings: '#aaa',
    roads: '#a0c4ff',
    text: '#000000', // black
  },
  DARK: {
    earth: '#393e46', // slightly lighter gray
    buildings: '#1de9b6', // turquoise
    roads: '#888888', // darker gray
    text: '#eeeeee', // light gray
  },
};

// Select theme
const theme = THEMES.DARK;

// MapLibre style with 3D buildings (extrusion)
const extrusion = {
  ...layer,
  type: 'fill-extrusion',
  'source-layer': 'buildings',
  filter: ['in', 'kind', 'building', 'building_part'],
  paint: {
    'fill-extrusion-color': theme.buildings,
    'fill-extrusion-height': ['get', 'height'],
    'fill-extrusion-base': ['get', 'min_height'],
    'fill-extrusion-opacity': 0.6,
  },
};

const fill = {
  ...layer,
  type: 'fill',
};

const line = {
  ...layer,
  type: 'line',
};

const symbol = {
  ...layer,
  type: 'symbol',
  layout: {
    'text-font': 'Geist Mono Regular',
  }
}
const style = {
  version: 8 as 8,
  glyphs: 'https://hfu.github.io/geist.sdf/{fontstack}/{range}.pbf',
  sources: {
    otaniemi: {
      type: 'vector',
      url: `pmtiles://${pmtilesUrl}`,
    },
  },
  layers: [
    {
      ...fill,
      id: 'earth',
      'source-layer': 'earth',
      paint: { 'fill-color': theme.earth },
    },
    {
      ...line,
      id: 'roads',
      'source-layer': 'roads'
    },
    {
      ...extrusion,
      id: '3d-buildings',
    },
    {
      ...symbol,
      id: 'addr_housenumber',
      filter: ['in', 'kind', 'address'],
      'source-layer': 'buildings',
      layout: {
        'text-field': ['get', 'addr_housenumber'],
        'text-size': 10,
        'text-font': ['Geist Mono Thin'],
        'text-anchor': 'center',
        'text-justify': 'center'
      },
      paint: {
        'text-color': theme.text,
        'text-halo-color': theme.earth,
        'text-halo-width': 1,
        'text-halo-blur': 0.5,
        'text-opacity': 0.8,
        'text-translate': [0, 0],
        'text-translate-anchor': 'viewport'
      }
    },
  ],
};

// Create the map
const map = new Map({
  container: 'map',
  style: style as any,
  center,
  zoom,
  hash,
});

// Add geolocate, scale, and zoom (navigation) controls
map.addControl(
  new GeolocateControl({
    positionOptions: { enableHighAccuracy: true },
    trackUserLocation: true,
  }),
  'top-right'
);
map.addControl(new ScaleControl(), 'bottom-right');
map.addControl(new NavigationControl(), 'top-right');
