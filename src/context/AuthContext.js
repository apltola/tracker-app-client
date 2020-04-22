import { AsyncStorage } from 'react-native';
import createDataContext from './createDataContext';
import trackerApi from '../api/tracker';

const authReducer = (state, action) => {
  switch (action.type) {
    case 'signin':
      return { errorMessage: '', token: action.payload }
    
    case 'add_error':
      return { ...state, errorMessage: action.payload }

    case 'clear_error_message':
      return { ...state, errorMessage: '' }

    default:
      return state;
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

const signout = dispatch => {
  return () => {
    //sign out...
  }
}

const clearErrorMessage = dispatch => () => {
  dispatch({ type: 'clear_error_message' });
}

export const { Provider, Context } = createDataContext(
  authReducer,
  { signin, signout, signup, clearErrorMessage },
  { token: null, errorMessage: '' }
);