const MAP_INFO = {
  // use redux store, this is just an scape hatch
  defaultLocation: {
    lat: 35.7231273,
    lng: 51.3877295,
  },
  zoom: 17,

  mapbox: {
    accessToken:
      'pk.eyJ1IjoicmVlcjIxNyIsImEiOiJjanlxemZsZzIwNWJrM2NxZGp3NjllcGVzIn0.k8sD7wuGrzWgOUQ4n5CPqQ',
  },
  mapir: {
    baseUrl: 'https://map.ir',
    apiKey:
      'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjdjOGVhYTA4NDM5MmVlYjM3MWMxZGZhOGJjODQyMmMxMzA0MDk0NzM0MWIwMzBlMzMyMDNiOTgxN2U2YzdhMGI4M2EwNzg1MTE4YTIxMDY3In0.eyJhdWQiOiJteWF3ZXNvbWVhcHAiLCJqdGkiOiI3YzhlYWEwODQzOTJlZWIzNzFjMWRmYThiYzg0MjJjMTMwNDA5NDczNDFiMDMwZTMzMjAzYjk4MTdlNmM3YTBiODNhMDc4NTExOGEyMTA2NyIsImlhdCI6MTUzOTQzNjY3OCwibmJmIjoxNTM5NDM2Njc4LCJleHAiOjE1Mzk0NDAyNzgsInN1YiI6IiIsInNjb3BlcyI6WyJiYXNpYyIsImVtYWlsIl19.QqS8kE9Gf44OINZsr1-L9cxejWx9JG7IRCrorJN99B_BBX9m95fbv2J_99mwj1oCUbkTh7v1E_fdd_GKI678AUU0S9ACDAb0tBCN39P-2YHi7kBh_PM8ETmoo_WEzmeqs5ymhZ5ZRyoblnKPtn6m1czUytyCXzu2DkbZwZKiuhwLdCaC-48bYs0h3ibJIZk-AoQ8_CyWjjbEdztVvblhVQaPQ-fpkk9nczDChbG1a5jVVJ1Dm-OhNo1W9X5neghcDf8qCZ1eNXbaC6c9qi6pOervFLZCAdeD9oqnjcrtjCSOYz67YISsaE90Z5cFB6gBFoSoMAC8tBOVnKxw-lipWg',
  },
  smapp: {
    baseUrl: prefix =>
      `https://${prefix ? `${prefix}.` : ''}snappmaps.ir/maps/api/place`,
    apiKey:
      'pk.eyJ1IjoicmVlcjIxNyIsImEiOiJjanlxemZsZzIwNWJrM2NxZGp3NjllcGVzIn0.k8sD7wuGrzWgOUQ4n5CPqQ',
    styles: 'https://tile.snappmaps.ir/styles/snapp-style/style.json',
    RTLTextPlugin:
      'https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-rtl-text/v0.2.0/mapbox-gl-rtl-text.js',
  },
  cedarmap: {
    baseUrl: 'https://api.cedarmaps.com/v1/geocode/cedarmaps.streets',
    apiKey: 'fe973a9546707cecd7c7f63a6fe3c294c357a996',
    styles: `https://api.cedarmaps.com/v1/styles/cedarmaps.light.json?access_token=fe973a9546707cecd7c7f63a6fe3c294c357a996`,
    RTLTextPlugin:
      'https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-rtl-text/v0.2.0/mapbox-gl-rtl-text.js',
  },
};

export default MAP_INFO;
