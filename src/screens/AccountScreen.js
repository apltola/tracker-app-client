import React, { useContext } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Context as AuthContext } from '../context/AuthContext';

const AccountScreen = ({ navigation }) => {
  const { signout } = useContext(AuthContext);

  return (
    <View>
      <Text>
        ACCOUNT_SCREEN
      </Text>
      <TouchableOpacity onPress={signout} style={{padding: 10}}>
        <Text>log out</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({

});

export default AccountScreen;