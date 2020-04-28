import React, { useContext } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { Context as TrackContext } from '../context/TrackContext';
import MapView, { Polyline } from 'react-native-maps';

const TrackDetailScreen = ({route: { params }}) => {
  const { state: { tracks }} = useContext(TrackContext);
  const { _id } = params;
  const track = tracks.find(t => t._id === _id);
  const initialCoords = track.locations[0].coords;

  if (!track || !initialCoords) {
    return null;
  }
  console.log(initialCoords);

  return (
    <View>
      <ScrollView>
        <MapView
          style={styles.map}
          initialRegion={{
            //...initialCoords,
            longitude: initialCoords.longitude,
            latitude: initialCoords.latitude,
            accuracy: initialCoords.accuracy,
            longitudeDelta: 0.01,
            latitudeDelta: 0.01,
          }}
        >
          <Polyline coordinates={track.locations.map(loc => loc.coords)} />
        </MapView>
        <Text>
          {JSON.stringify(track, null , 2)}
        </Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  map: {
    height: 400,
  }
});

export default TrackDetailScreen;