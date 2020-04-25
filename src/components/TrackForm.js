import React from 'react';
import { Input, Button } from 'react-native-elements';
import { StyleSheet, View } from 'react-native';

const TrackForm = () => {
  return (
    <View style={styles.container}>
      <Input label="Track Name" />
      <Button
        title="Start Recording"
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  }
});

export default TrackForm;