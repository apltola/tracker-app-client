import React, { useContext } from 'react';
import { View, Text, StyleSheet, Dimensions, ActivityIndicator } from 'react-native';
import MapView, { Polyline, Circle } from 'react-native-maps';
import { Context as LocationContext } from '../context/LocationContext';

const SCREEN_HEIGHT = Dimensions.get('window').height;

const Map = () => {
  const { state: { currentLocation, locations } } = useContext(LocationContext);
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
      /* region={{
        ...currentLocation.coords,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01
      }} */
    >
      <Circle
        center={currentLocation.coords}
        radius={20}
        strokeWidth={5}
        strokeColor="rgba(20, 126, 251, 1.0)"
        fillColor="rgba(20, 126, 251, 0.5)"
      />
      <Polyline coordinates={locations.map(loc => loc.coords)} />
    </MapView>
  )
}

const styles = StyleSheet.create({
  map: {
    height: SCREEN_HEIGHT*0.50,
  }
});

export default Map;