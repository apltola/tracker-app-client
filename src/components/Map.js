import React, { useContext } from 'react';
import { View, Text, StyleSheet, Dimensions, ActivityIndicator } from 'react-native';
import MapView, { Polyline, Circle } from 'react-native-maps';
import { Context as LocationContext } from '../context/LocationContext';

const SCREEN_HEIGHT = Dimensions.get('window').height;

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
      <Circle
        center={currentLocation.coords}
        radius={25}
        strokeColor="rgba(158,158,255,1.0)"
        fillColor="rgba(158,158,255,0.5)"
      />
    </MapView>
  )
}

const styles = StyleSheet.create({
  map: {
    height: SCREEN_HEIGHT*0.55,
  }
});

export default Map;