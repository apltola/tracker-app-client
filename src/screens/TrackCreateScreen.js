import '../_mockLocation';
import React, { useEffect, useState, useContext, useCallback } from 'react';
import { StyleSheet, Text, View, ScrollView, Dimensions, SafeAreaView } from 'react-native';
import { useIsFocused } from '@react-navigation/native';
import { requestPermissionsAsync, watchPositionAsync, Accuracy } from 'expo-location';
import { Context as LocationContext } from '../context/LocationContext';
import Map from '../components/Map';
import useLocation from '../hooks/useLocation';
import TrackForm from '../components/TrackForm';
import { Input, Button } from 'react-native-elements';

const TrackCreateScreen = () => {
  const { state, addLocation, changeTrackName, startRecording, stopRecording } = useContext(LocationContext);
  const isFocused = useIsFocused();
  callback = useCallback((location) => {
    addLocation(location, state.recording);
  }, [state.recording]);
  const [err] = useLocation(isFocused, callback);
  const [trackName, setTrackName] = useState("");
  console.log(state.locations.length)

  return (
    <SafeAreaView style={{ flex: 1, }}>
      <ScrollView contentContainerStyle={{borderWidth: 2, borderColor: 'red' }}>
        <Input
          label="New Track Name"
          containerStyle={styles.input}
          placeholder="name"
          onChangeText={changeTrackName}
          value={state.name}
        />
        <Map />
        <View style={{paddingVertical: 30, paddingHorizontal: 20}}>
          {state.recording ?
            <Button
              title="Stop Recording"
              buttonStyle={styles.button}
              raised={true}
              onPress={stopRecording}
            />
            :
            <Button
              title="Start Recording"
              buttonStyle={styles.button}
              raised={true}
              disabled={!state.name}
              onPress={startRecording}
            />
          }
        </View>
        <Text>{JSON.stringify(state, null, 2)}</Text>
        {/* err ? <Text>Please enable location services</Text> : null */}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  input: {
    paddingVertical: 30,
  },
  button: {

  },
});

export default TrackCreateScreen;