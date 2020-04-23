import React, { useContext } from 'react';
import { View, Text, StyleSheet, Dimensions, ActivityIndicator } from 'react-native';
import MapView, { Polyline } from 'react-native-maps';
import { Context as LocationContext } from '../context/LocationContext';

const Map = () => {
  const { state: { currentLocation } } = useContext(LocationContext);
  //console.log('state => ', state);

  if (!currentLocation) {
    return <ActivityIndicator size="large" />
  }

  return (
    <MapView
      style={styles.map}
      //showsUserLocation={true}
      initialRegion={{
        ...currentLocation.coords,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01
      }}
      region={{
        ...currentLocation.coords,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01
      }}
    >
      <Polyline />
    </MapView>
  )
}

const styles = StyleSheet.create({
  map: {
    height: 500,
  }
});

export default Map;