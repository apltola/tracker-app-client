import React, { useEffect, useContext } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, FlatList } from 'react-native';
import { ListItem } from 'react-native-elements';
import { Context as TrackContext } from '../context/TrackContext';

const TrackListScreen = ({ navigation }) => {
  const { state: {tracks}, fetchTracks } = useContext(TrackContext);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      fetchTracks();
    });

    return unsubscribe;
  }, []);

  return (
    <View>
      <FlatList
        data={tracks}
        keyExtractor={item => item._id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity onPress={() => navigation.navigate('TrackDetail', { _id: item._id })}>
              <ListItem chevron title={item.name} />
            </TouchableOpacity>
          );
        }}
      />


      {/* <ScrollView contentContainerStyle={{marginTop: 100,}}>
        <View>
          <Text>{JSON.stringify(tracks, null, 2)}</Text>
        </View>
      </ScrollView> */}
    </View>
  );
}

const styles = StyleSheet.create({

});

export default TrackListScreen;