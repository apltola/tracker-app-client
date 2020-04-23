import '../_mockLocation';
import React, { useEffect, useState, useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { requestPermissionsAsync, watchPositionAsync, Accuracy } from 'expo-location';
import { Context as LocationContext } from '../context/LocationContext';
import Map from '../components/Map';

const TrackCreateScreen = () => {
  const [err, setErr] = useState(null);
  const { addLocation } = useContext(LocationContext);

  const startWatching = async () => {
    try {
      await requestPermissionsAsync();
      await watchPositionAsync({
        accuracy: Accuracy.BestForNavigation,
        timeInterval: 1000,   // once in every second
        distanceInterval: 10, // for every ten meters
      }, (location) => {
        console.log(location);
        addLocation(location);
      });
    } catch (err) {
      setErr(err);
    }
  }

  useEffect(() => {
    startWatching();
  }, []);

  return (
    <View>
      <Map />
      {err ? <Text>Please enable location services</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({

});

export default TrackCreateScreen;