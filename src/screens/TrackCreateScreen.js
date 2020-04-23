import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { requestPermissionsAsync } from 'expo-location';
import Map from '../components/Map';

const TrackCreateScreen = () => {
  const [err, setErr] = useState(null);

  const startWatching = async () => {
    try {
      await requestPermissionsAsync();
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