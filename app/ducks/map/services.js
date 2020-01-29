import { universalCall } from '@snappmarket/helpers';

import endpoints from 'constants/endpoints';
import Map from 'constants/mapSettings';

export default {
  mapIrReverseGeoCoder({ lat, lng }) {
    const url = endpoints.MAP.MAP_IR_REVERSE_GEO_CODER();
    return universalCall({
      url,
      method: 'get',
      credentials: 'same-origin',
      headers: {
        'x-api-key': Map.mapir.apiKey,
      },
      params: {
        lat,
        lon: lng,
      },
    });
  },
  mapIrSearchLocation({ text, type, lat, lng }) {
    const url = endpoints.MAP.MAP_IR_SEARCH_LOCATION();
    return universalCall({
      url,
      method: 'post',
      credentials: 'same-origin',
      data: {
        text,
        location: {
          type,
          coordinates: [lng, lat],
        },
      },
      headers: {
        'x-api-key': Map.mapir.apiKey,
      },
    });
  },
  smappReverseGeoCoder({ lat, lng, display }) {
    const url = endpoints.MAP.SMAPP_REVERSE_GEO_CODER();
    return universalCall({
      url,
      method: 'GET',
      credentials: 'same-origin',
      params: {
        lat,
        lon: lng,
        display,
      },
    });
  },
  smappSearchLocation({ text, lat, lng }) {
    const url = endpoints.MAP.SMAPP_SEARCH_LOCATION({ text, lat, lng });
    return universalCall({
      url,
      method: 'GET',
      credentials: 'same-origin',
      params: {
        input: text,
        location: `${lat},${lng}`,
      },
    });
  },

  cedarMapReverseGeoCoder({ lat, lng }) {
    const url = endpoints.MAP.CEDAR_MAP_REVERSE_GEO_CODER({ lat, lng });
    return universalCall({
      url,
      method: 'GET',
      credentials: 'same-origin',
      headers: {
        Authorization: `Bearer ${Map.cedarmap.apiKey}`,
      },
    });
  },
  cedarMapSearchLocation({ text, type, lat, lng, distance }) {
    const url = endpoints.MAP.CEDAR_MAP_SEARCH_LOCATION({
      text,
    });
    return universalCall({
      url,
      method: 'GET',
      credentials: 'same-origin',
      headers: {
        Authorization: `Bearer ${Map.cedarmap.apiKey}`,
      },
      params: {
        type,
        location: `${lat},${lng}`,
        distance,
      },
    });
  },
};
