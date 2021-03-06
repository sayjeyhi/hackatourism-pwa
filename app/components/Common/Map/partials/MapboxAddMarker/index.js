import React, { useEffect, useState, useContext } from 'react';
import mapboxgl from 'constants/ServerWrappers/mapboxGlWrapper';
import ReactMapGL, {
  Marker,
  NavigationControl,
} from 'constants/ServerWrappers/reactMapboxWrapper';
import 'resources/styles/mapbox.css';

import Map from 'constants/mapSettings';

import MapMarkerIcon from 'resources/svg/Icons/MapMarkerIcon';
import { context as mapContext } from '../../context/mapContext';
import { StyledMapWrapper } from './styles';

const MapBoxAddMarker = () => {
  const {
    position: { lat, lng },
    setPosition,
    mapZoom,
    mapType,
    onMarkerClick,
    onLocationChange,
    isStatic,
    markers,
  } = useContext(mapContext);

  const [zoom, setZoom] = useState(mapZoom);

  useEffect(() => {
    onLocationChange({ lat, lng });
  }, [lat, lng]);

  useEffect(() => {
    if (!mapboxgl.hasRTLTextPlugin) {
      mapboxgl.setRTLTextPlugin(Map[mapType].RTLTextPlugin);
      mapboxgl.hasRTLTextPlugin = true;
    }
  }, [mapType]);

  const handleSetViewport = viewport => {
    if (!isStatic) {
      setPosition({ lat: viewport.latitude, lng: viewport.longitude });
      setZoom(viewport.zoom);
    }
  };

  const setMapCenter = e => {
    if (!isStatic) {
      const { lngLat } = e;
      setPosition({
        lat: lngLat[1],
        lng: lngLat[0],
      });
    }
  };

  const handleLocationChange = interactionState => {
    const {
      isDragging,
      isPanning,
      isZooming,
      inTransition,
      isRotating,
      startPitch,
    } = interactionState;

    if (
      !isDragging &&
      !isPanning &&
      !isZooming &&
      !inTransition &&
      !isRotating &&
      !isStatic &&
      typeof startPitch !== 'undefined'
    ) {
      onLocationChange({ lat, lng });
    }
  };

  const handleClickMarker = e => onMarkerClick(e);

  return (
    <StyledMapWrapper>
      <ReactMapGL
        mapboxApiAccessToken={Map.mapbox.accessToken}
        width="100%"
        height="100%"
        latitude={lat}
        longitude={lng}
        zoom={zoom}
        onViewportChange={handleSetViewport}
        onClick={setMapCenter}
        onInteractionStateChange={handleLocationChange}
        mapStyle={Map[mapType].styles}
      >
        {!isStatic && <NavigationControl showCompass={false} />}
        {markers.length === 0 ? (
          <Marker
            latitude={lat}
            longitude={lng}
            offsetTop={-37}
            onClick={handleClickMarker}
          >
            <MapMarkerIcon className="map_marker" />
          </Marker>
        ) : (
          markers.map(marker => (
            <Marker
              latitude={marker.lat}
              longitude={marker.lng}
              offsetTop={marker.offsetTop || -37}
              onClick={handleClickMarker}
            >
              <MapMarkerIcon className="map_marker" />
            </Marker>
          ))
        )}
      </ReactMapGL>
    </StyledMapWrapper>
  );
};

export default MapBoxAddMarker;
