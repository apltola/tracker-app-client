import { AsyncStorage } from 'react-native';
import createDataContext from './createDataContext';
import trackerApi from '../api/tracker';

const authReducer = (state, action) => {
  switch (action.type) {
    //case 'restore_token':
    //  return { errorMessage: '', token: action.payload, ...state }

    case 'signin':
      return { errorMessage: '', token: action.payload, isSignedOut: false }

    case 'signout':
      return { token: null, errorMessage: '', isSignedOut: true }
    
    case 'add_error':
      return { ...state, errorMessage: action.payload }

    case 'clear_error_message':
      return { ...state, errorMessage: '' }

    default:
      return state;
  }
}

const restoreStoredToken = dispatch => async cb => {
  //let token = null;
  const token = await AsyncStorage.getItem('token');
  if (token) {
    dispatch({ type: 'signin', payload: token });
  }
  if (cb) {
    cb();
  }
}

const signup = dispatch => async (email, password) => {
  try {
    const response = await trackerApi.post('/signup', { email, password });
    await AsyncStorage.setItem('token', response.data.token);
    dispatch({ type: 'signin', payload: response.data.token });
  } catch (err) {
    console.log(err.response.data);
    dispatch({ type: 'add_error', payload: 'Something went wrong with sign up :(' });
  }
}

const signin = dispatch => async (email, password) => {
  try {
    const response = await trackerApi.post('/signin', { email, password });
    await AsyncStorage.setItem('token', response.data.token);
    dispatch({ type: 'signin', payload: response.data.token });
  } catch (err) {
    console.log(err.response.data);
    dispatch({ type: 'add_error', payload: 'Something went wrong with sign in :(' });
  }
}

const signout = dispatch => async () => {
  await AsyncStorage.removeItem('token');
  dispatch({ type: 'signout' });
}

const clearErrorMessage = dispatch => () => {
  dispatch({ type: 'clear_error_message' });
}

export const { Provider, Context } = createDataContext(
  authReducer,
  { signin, signout, signup, clearErrorMessage, restoreStoredToken },
  { token: null, errorMessage: '', isSignedOut: false }
);