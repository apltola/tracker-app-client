import createDataContext from './createDataContext';
import trackerApi from '../api/tracker';

const trackReducer = (state, action) => {
  switch (action.type) {
    case 'fetch_tracks':
      return { ...state, tracks: action.payload}

    case 'loading_true':
      return { ...state, saveLoading: true }

    case 'loading_false':
      return { ...state, saveLoading: false }

    default:
      return state;
  }
}

const fetchTracks = dispatch => async () => {
  const response = await trackerApi.get('/tracks');
  dispatch({ type: 'fetch_tracks', payload: response.data });
}

const createTrack = dispatch => async (name, locations) => {
  try {
    await trackerApi.post('/tracks', { name, locations });
  } catch (err) {
    console.log(err);
  }
}

export const { Provider, Context } = createDataContext(
  trackReducer,
  { fetchTracks, createTrack },
  { saveLoading: false, tracks: [] }
);