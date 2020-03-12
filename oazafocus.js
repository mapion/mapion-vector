styles.oazafocus = {
  getStyle: function() {
    return 'https://vt-cm01.mapion.co.jp/gl-server/style/lab.json?access_token=' + accessToken;
  },
  _init: false,
  _popup: new mapboxgl.Popup({
    closeButton: false,
    closeOnClick: false
  }),
  onChangeSelect: function() {
    if (!styles.oazafocus._init) {
      map.on('mousemove', 'oaza-fills', function(e) {
        if (e.features.length > 0) {
          if (hoveredId) {
            map.setFeatureState(
              { source: 'oaza', sourceLayer: 'oaza_polygon', id: hoveredId },
              { hover: false }
            );
            styles.oazafocus._popup.remove();
          }
          hoveredId = e.features[0].id;
          map.setFeatureState(
            { source: 'oaza', sourceLayer: 'oaza_polygon', id: hoveredId },
            { hover: true }
          );
  
          var oazaName = e.features[0].properties.oaza_name;
          if (oazaName) {
            styles.oazafocus._popup
              .setLngLat(e.lngLat)
              .setHTML(e.features[0].properties.oaza_name)
              .addTo(map);
          }
        }
      });
  
      map.on('mouseleave', 'oaza-fills', function() {
        if (hoveredId) {
          map.setFeatureState(
            { source: 'oaza', sourceLayer: 'oaza_polygon', id: hoveredId },
            { hover: false }
          );
        }
        hoveredId = null;
        styles.oazafocus._popup.remove();
      });
    }
  },
  onStyledata: function() {
    var source = map.getSource('oaza');
    if (!source) {
      map.addSource('oaza', {
        'type': 'vector',
        'tiles': [
          'https://vt-cm01-stg.mapion.co.jp/gl-server/tile/honjo.gyousei_polygon/{z}/{x}/{y}.pbf?access_token=' + accessToken
        ],
        'minzoom': 10,
        'maxzoom': 15
      });

      map.addLayer({
        'id': 'oaza-fills',
        'type': 'fill',
        'source': 'oaza',
        'source-layer': 'oaza_polygon',
        'layout': {},
        'paint': {
          'fill-color': '#F85C5C',
          'fill-opacity': [
            'case',
            ['boolean', ['feature-state', 'hover'], false],
            0.5,
            0
          ]
        }
      }, 'city_rep_point 地番ポイント');
  
      map.addLayer({
        'id': 'oaza-borders',
        'type': 'line',
        'source': 'oaza',
        'source-layer': 'oaza_polygon',
        'layout': {},
        'paint': {
          'line-color': '#F85C5C',
          'line-width': 2,
          'line-opacity': [
            'case',
            ['boolean', ['feature-state', 'hover'], false],
            1,
            0
          ]
        }
      });
    }

  }
}