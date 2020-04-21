import { AsyncStorage } from 'react-native';
import createDataContext from './createDataContext';
import trackerApi from '../api/tracker';

const authReducer = (state, action) => {
  switch (action.type) {
    case 'signup':
      return { errorMessage: '', token: action.password }
    
    case 'add_error':
      return { ...state, errorMessage: action.payload }

    default:
      return state;
  }
}

const signup = dispatch => async (email, password) => {
  try {
    const response = await trackerApi.post('/signup', { email, password });
    await AsyncStorage.setItem('token', response.data.token);
    dispatch({ type: 'signup', payload: response.data.token });
  } catch (err) {
    console.log(err.response.data);
    dispatch({ type: 'add_error', payload: 'Something went wrong with sign up :(' });
  }
}


const signin = dispatch => {
  return (email, password) => {

  }
}

const signout = dispatch => {
  return () => {
    //sign out...
  }
}

export const { Provider, Context } = createDataContext(
  authReducer,
  { signin, signout, signup },
  { token: null, errorMessage: '' }
);