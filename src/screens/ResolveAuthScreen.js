import React, { useEffect, useContext } from 'react';
import { Context as AuthContext } from '../context/AuthContext';
import { View, Text} from 'react-native';

const ResolveAuthScreen = ({ navigation }) => {
  const { state, restoreStoredToken } = useContext(AuthContext);

  useEffect(() => {
    if (!state.isSignedOut) {
      restoreStoredToken(() => {
        navigation.replace('Signup');
      });
    } else {
      navigation.replace('Signup');
    }

  }, []);

  return null;
}

export default ResolveAuthScreen;