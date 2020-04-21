import React, { useContext } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { Context as AuthContext } from '../context/AuthContext';
import AuthForm from '../components/AuthForm';

const SigninScreen = ({ navigation }) => {
  const { state, signin } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>

        <AuthForm
          headerText="Sign In For Tracker"
          errorMessage={state.errorMessage}
          onSubmit={(email, password) => signin(email, password)}
          submitBtnText="Sign In"
          onNavigate={() => navigation.navigate('Signup')}
          navLinkText="Don't have an account? Sign up"
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

export default SigninScreen;