import { actionTypes } from '../constants/action-types';
import starWarsApi from '../../apis/starWarsApi';

export const fetchStarWars = (index) => (dispatch) => {
   dispatch({ type: actionTypes.LOADING });
   starWarsApi.get("/people/?page=" + index).then(res => {
      dispatch({ type: actionTypes.FETCH_STAR_WARS_SUCCEEDED, payload: res.data });
   }).catch(err => dispatch({ type: actionTypes.FETCH_STAR_WARS_FAILED }));
};