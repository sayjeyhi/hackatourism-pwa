export default {
  normalizeCedarMapSearchResult(results) {
    const locations = [];
    results.forEach(item => {
      const {
        address,
        name,
        alt_name: altName,
        location: { center },
        components: { city },
      } = item;
      const location = center.split(',');
      locations.push({
        address: address || name || altName,
        lat: parseFloat(location[0]),
        lng: parseFloat(location[1]),
        city,
      });
    });
    return locations;
  },
  normalizeMapIrSearchResult(value) {
    const locations = [];
    value.forEach(item => {
      const {
        Address: address,
        Coordinate: { lat, lon: lng },
        City: city,
      } = item;
      locations.push({
        address,
        lat,
        lng,
        city,
      });
    });
    return locations;
  },
  normalizeSmappSearchResult(predictions) {
    const locations = [];
    predictions.forEach(item => {
      const {
        description: address,
        location: { latitude, longitude },
        city = '',
      } = item;
      locations.push({
        address,
        lat: parseFloat(latitude),
        lng: parseFloat(longitude),
        city,
      });
    });
    return locations;
  },
};
