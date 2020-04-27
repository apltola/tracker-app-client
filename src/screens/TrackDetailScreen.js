import React, { useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Context as TrackContext } from '../context/TrackContext';

const TrackDetailScreen = ({route: { params }}) => {
  const { state: { tracks }} = useContext(TrackContext);
  const { _id } = params;
  const track = tracks.find(t => t._id === _id);

  return (
    <View>
      <Text>
        {JSON.stringify(track, null , 2)}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({

});

export default TrackDetailScreen;