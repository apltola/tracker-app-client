import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const TrackListScreen = ({ navigation }) => {
  return (
    <View>
      <Text>
        TRACK_LIST_SCREEN
      </Text>
      <TouchableOpacity onPress={() => navigation.navigate('TrackDetail')}>
        <Text>go to trackdetail</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({

});

export default TrackListScreen;