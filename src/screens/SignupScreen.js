import React, { useState, useContext } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { Input, Button } from 'react-native-elements';
import { Context as AuthContext } from '../context/AuthContext';
import { MaterialIcons } from '@expo/vector-icons';
import Spacer from '../components/Spacer';
import { iosColors } from '../util/globalStyles';
import AuthForm from '../components/AuthForm';

const SignupScreen = ({ navigation, route }) => {
  const { state, signup } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>

        <AuthForm
          headerText="Sign Up For Tracker"
          errorMessage={state.errorMessage}
          onSubmit={(email, password) => signup(email, password)}
          submitBtnText="Sign Up"
          onNavigate={() => navigation.navigate('Signin')}
          navLinkText="Already have an account? Sign in"
        />

        <View style={{paddingTop: 40}}>
          <Text>{JSON.stringify(state, null, 2)}</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
  },
  scrollView: {
    flex: 1,
    paddingVertical: 10,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    paddingTop: 60,
    paddingBottom: 60,
    paddingLeft: 10,
  },
  errorMessage: {
    fontSize: 16,
    color: iosColors.red,
    textAlign: 'center',
    fontWeight: 'bold',
    height: 40,
    lineHeight: 40,
  },
  linkContainer: {
    paddingTop: 10,
    alignItems: 'center',
  },
  linkButton: {
    padding: 10
  },
  linkText: {
    color: iosColors.darkBlue,
    fontSize: 16,
  }
});

export default SignupScreen;