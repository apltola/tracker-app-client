import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Input, Button } from 'react-native-elements';
import { iosColors } from '../util/globalStyles';
import Spacer from './Spacer';

const AuthForm = ({ headerText, errorMessage, onSubmit, submitBtnText, onNavigate, navLinkText }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <React.Fragment>
      <Text style={styles.title}>{headerText}</Text>
      <Input label="Email" onChangeText={setEmail} autoCapitalize="none" autoCorrect={false} keyboardType="email-address" />
      <Spacer vertical={10} />
      <Input label="Password" onChangeText={setPassword} autoCapitalize="none" autoCorrect={false} secureTextEntry={true} textContentType="none" />
      
      {errorMessage
        ? <Text style={styles.errorMessage}>{errorMessage}</Text>
        : <Spacer vertical={20} />
      }
      <Button
        onPress={() => onSubmit(email, password)}
        title={submitBtnText}
        buttonStyle={{
          backgroundColor: iosColors.darkBlue
        }}
        containerStyle={{
          paddingHorizontal: 20,
        }}
      />
      <View style={styles.linkContainer}>
        <TouchableOpacity onPress={onNavigate} style={styles.linkButton}>
          <Text style={styles.linkText}>
            {navLinkText}
          </Text>
        </TouchableOpacity>
      </View>

    </React.Fragment>
  )
}

const styles = StyleSheet.create({
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

export default AuthForm;