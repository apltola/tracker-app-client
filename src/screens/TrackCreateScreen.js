import '../_mockLocation';
import React, { useContext, useCallback } from 'react';
import { StyleSheet, Text, View, ScrollView, Dimensions, SafeAreaView } from 'react-native';
import { useIsFocused } from '@react-navigation/native';
import { Context as LocationContext } from '../context/LocationContext';
import useSaveTrack from '../hooks/useSaveTrack';
import Map from '../components/Map';
import useLocation from '../hooks/useLocation';
import { Input, Button } from 'react-native-elements';

const TrackCreateScreen = () => {
  const { state, addLocation, changeTrackName, startRecording, stopRecording } = useContext(LocationContext);
  const isFocused = useIsFocused();
  callback = useCallback((location) => {
    addLocation(location, state.recording);
  }, [state.recording]);
  const [err] = useLocation(isFocused || state.recording, callback);
  const [saveTrack] = useSaveTrack();
  //console.log(state.locations.length)

  return (
    <SafeAreaView style={{ flex: 1, }}>
      <ScrollView>
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
              //disabled={!state.name}
              onPress={startRecording}
            />
          }
          {!state.recording && state.locations.length ?
            <View style={{paddingTop: 20}}>
              <Button
                title="Save Track"
                buttonStyle={styles.saveButton}
                raised={true}
                onPress={saveTrack}
              />
            </View>
            : null
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
  saveButton: {

  },
});

export default TrackCreateScreen;