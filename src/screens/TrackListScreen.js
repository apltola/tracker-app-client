import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-elements';
import useSaveTrack from '../hooks/useSaveTrack';

const TrackListScreen = ({ navigation }) => {
  const [saveTrack] = useSaveTrack();

  return (
    <View>
      <Text>
        TRACK_LIST_SCREEN
      </Text>
      <TouchableOpacity onPress={() => navigation.navigate('TrackDetail')}>
        <Text>go to trackdetail</Text>
      </TouchableOpacity>
      <Button
        title="save track"
        onPress={saveTrack}
      />
    </View>
  );
}

const styles = StyleSheet.create({

});

export default TrackListScreen;