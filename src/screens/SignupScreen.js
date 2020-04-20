import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const SignupScreen = ({ navigation, route }) => {

  return (
    <View>
      <Text>
        SIGNUP_SCREEN
      </Text>
      <TouchableOpacity onPress={() => navigation.navigate('Signin')}>
        <Text>go to signin</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={route.params.toggleLogin}>
        <Text>toggle login</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({

});

export default SignupScreen;