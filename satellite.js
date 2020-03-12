styles.satellite = {
  getStyle: function() {
    return 'mapbox://styles/mapbox/satellite-v9';
  },
  _checkedStyleStatus: false,
  onStyledata: function() {
    styles.satellite.onStyle(function() {
      if (map.getSource("base")) {
        return;
      }
      map.addSource("base", {
          type: "vector",
          url: "https://vt-cm01.mapion.co.jp/gl-server/style/source-ipc-lab2.json?access_token=" + accessToken
      });
      map.addLayer({
        "id": "city_road 庭園路",
        "metadata": "#16/35.684429/139.711411",
        "type": "fill",
        "source": "base",
        "source-layer": "city_road",
        "filter": [
          "all",
          [
            "==",
            [
              "number",
              [
                "get",
                "roadclass_c"
              ]
            ],
            0
          ]
        ],
        "layout": {
          "visibility": "visible"
        },
        "paint": {
          "fill-color": "#ffffff",
          "fill-opacity": 0.6
        }
      }, '3d-model');
      map.addLayer({
        "id": "city_road その他道",
        "metadata": "",
        "type": "fill",
        "source": "base",
        "source-layer": "city_road",
        "filter": [
          "all",
          [
            "==",
            [
              "number",
              [
                "get",
                "roadclass_c"
              ]
            ],
            9
          ]
        ],
        "layout": {
          "visibility": "visible"
        },
        "paint": {
          "fill-color": "#ffffff",
          "fill-opacity": 0.6
        }
      }, '3d-model');
      map.addLayer({
        "id": "city_road その他幹線道路",
        "metadata": "",
        "type": "fill",
        "source": "base",
        "source-layer": "city_road",
        "filter": [
          "all",
          [
            "==",
            [
              "number",
              [
                "get",
                "roadclass_c"
              ]
            ],
            8
          ]
        ],
        "layout": {
          "visibility": "visible"
        },
        "paint": {
          "fill-color": "#ffffff",
          "fill-opacity": 0.6
        }
      }, '3d-model');
      map.addLayer({
        "id": "city_road 一般都道府県道",
        "metadata": "",
        "type": "fill",
        "source": "base",
        "source-layer": "city_road",
        "filter": [
          "all",
          [
            "==",
            [
              "number",
              [
                "get",
                "roadclass_c"
              ]
            ],
            7
          ]
        ],
        "layout": {
          "visibility": "visible"
        },
        "paint": {
          "fill-color": "#FCF39B",
          "fill-opacity": 0.6
        }
      }, '3d-model');
      map.addLayer({
        "id": "city_road 主要地方道",
        "metadata": "",
        "type": "fill",
        "source": "base",
        "source-layer": "city_road",
        "filter": [
          "all",
          [
            "==",
            [
              "number",
              [
                "get",
                "roadclass_c"
              ]
            ],
            6
          ]
        ],
        "layout": {
          "visibility": "visible"
        },
        "paint": {
          "fill-color": "#FCF39B",
          "fill-opacity": 0.6
        }
      }, '3d-model');
      map.addLayer({
        "id": "city_road 国道",
        "metadata": "",
        "type": "fill",
        "source": "base",
        "source-layer": "city_road",
        "filter": [
          "all",
          [
            "==",
            [
              "number",
              [
                "get",
                "roadclass_c"
              ]
            ],
            5
          ]
        ],
        "layout": {
          "visibility": "visible"
        },
        "paint": {
          "fill-color": "#EFC784",
          "fill-opacity": 0.6
        }
      }, '3d-model');
      map.addLayer({
        "id": "city_road 都市高速（無料）",
        "metadata": "",
        "type": "fill",
        "source": "base",
        "source-layer": "city_road",
        "filter": [
          "all",
          [
            "==",
            [
              "number",
              [
                "get",
                "roadclass_c"
              ]
            ],
            4
          ]
        ],
        "layout": {
          "visibility": "visible"
        },
        "paint": {
          "fill-color": "#7E92CE",
          "fill-opacity": 0.6
        }
      }, '3d-model');
      map.addLayer({
        "id": "city_road 都市高速（有料）",
        "metadata": "",
        "type": "fill",
        "source": "base",
        "source-layer": "city_road",
        "filter": [
          "all",
          [
            "==",
            [
              "number",
              [
                "get",
                "roadclass_c"
              ]
            ],
            3
          ]
        ],
        "layout": {
          "visibility": "visible"
        },
        "paint": {
          "fill-color": "#7E92CE",
          "fill-opacity": 0.6
        }
      }, '3d-model');
      map.addLayer({
        "id": "city_road 都市間高速道（無料）",
        "metadata": "",
        "type": "fill",
        "source": "base",
        "source-layer": "city_road",
        "filter": [
          "all",
          [
            "==",
            [
              "number",
              [
                "get",
                "roadclass_c"
              ]
            ],
            2
          ]
        ],
        "layout": {
          "visibility": "visible"
        },
        "paint": {
          "fill-color": "#7E92CE",
          "fill-opacity": 0.6
        }
      }, '3d-model');
      map.addLayer({
        "id": "city_road 都市間高速道（有料）",
        "metadata": "",
        "type": "fill",
        "source": "base",
        "source-layer": "city_road",
        "filter": [
          "all",
          [
            "==",
            [
              "number",
              [
                "get",
                "roadclass_c"
              ]
            ],
            1
          ]
        ],
        "layout": {
          "visibility": "visible"
        },
        "paint": {
          "fill-color": "#7E92CE",
          "fill-opacity": 0.6
        }
      }, '3d-model');
      map.addLayer({
        "id": "city_road 有料道路",
        "metadata": "",
        "type": "fill",
        "source": "base",
        "source-layer": "city_road",
        "filter": [
          "all",
          [
            "==",
            [
              "number",
              [
                "get",
                "roadclass_c"
              ]
            ],
            10
          ]
        ],
        "layout": {
          "visibility": "visible"
        },
        "paint": {
          "fill-color": "#7E92CE",
          "fill-opacity": 0.6
        }
      }, '3d-model');
      map.addLayer({
        "id": "city_road 縁取り",
        "metadata": "#16/35.643/139.7498",
        "type": "line",
        "source": "base",
        "source-layer": "city_road_case",
        "filter": [
          "all"
        ],
        "layout": {
          "visibility": "visible"
        },
        "paint": {
          "line-color": "#999999",
          "line-width": 0.8
        }
      }, '3d-model');
      map.addLayer({
        "id": "road_link 道路ラベル",
        "metadata": "#16/35.6447/139.7434",
        "type": "symbol",
        "source": "base",
        "source-layer": "road_link",
        "filter": [
          "all"
        ],
        "layout": {
          "visibility": "visible",
          "text-field": "{display_kanji}",
          "text-size": 11,
          "symbol-placement": "line",
          "symbol-spacing": [
            "interpolate",
            [
              "exponential",
            1
            ],
            [
              "zoom"
            ],
            16,
            250,
            17,
            500,
            18,
            500,
            19,
            800
          ],
          "text-allow-overlap": false
        },
        "paint": {
          "text-color": "#0078B4",
          "text-halo-color": "#ffffff",
          "text-halo-width": 1,
          "text-halo-blur": 0.5
        }
      }, '3d-model');
    })
  },

  onStyle: function(cb) {
    if (styles.satellite._checkedStyleStatus) {
      return;
    }
    if (map.isStyleLoaded()) {
      styles.satellite._checkedStyleStatus = true;
      cb();   
    } else {
      setTimeout(function() {styles.satellite.onStyle(cb);}, 200);
    }
  }
}

