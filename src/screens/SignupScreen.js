import React, { useContext, useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { Context as AuthContext } from '../context/AuthContext';
import AuthForm from '../components/AuthForm';

const SignupScreen = ({ navigation, route }) => {
  const { state, signup, clearErrorMessage } = useContext(AuthContext);

  useEffect(() => {
    const unsubscribe = navigation.addListener('blur', () => {
      clearErrorMessage();
    });

    return unsubscribe;
  }, []);

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
});

export default SignupScreen;