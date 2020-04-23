import '../_mockLocation';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { requestPermissionsAsync, watchPositionAsync, Accuracy } from 'expo-location';
import Map from '../components/Map';

const TrackCreateScreen = () => {
  const [err, setErr] = useState(null);

  const startWatching = async () => {
    try {
      await requestPermissionsAsync();
      await watchPositionAsync({
        accuracy: Accuracy.BestForNavigation,
        timeInterval: 1000,   // once in every second
        distanceInterval: 10, // for every ten meters
      }, (location) => {
        //console.log(location);
      });
    } catch (err) {
      setErr(err);
    }
  }

  useEffect(() => {
    //startWatching();
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