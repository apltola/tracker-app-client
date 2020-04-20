import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { Input, Button } from 'react-native-elements';
import { MaterialIcons } from '@expo/vector-icons';
import Spacer from '../components/Spacer';
import { iosColors } from '../util/globalStyles';

const SignupScreen = ({ navigation, route }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <Text style={styles.title}>Sign Up For Tracker</Text>
        <Input label="Email" onChangeText={setEmail} autoCapitalize="none" autoCorrect={false} keyboardType="email-address" />
        <Spacer vertical={10} />
        <Input label="Password" onChangeText={setPassword} autoCapitalize="none" autoCorrect={false} secureTextEntry={true} />
        <Spacer vertical={20} />
        <Button
          title="Sign Up"
          buttonStyle={{
            backgroundColor: iosColors.darkBlue
          }}
          containerStyle={{
            paddingHorizontal: 20,
          }}
        />

        <View style={{paddingTop: 40}}>
          <Text>{JSON.stringify(email, null, 2)}</Text>
          <Text>{JSON.stringify(password, null, 2)}</Text>
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
  }
});

export default SignupScreen;