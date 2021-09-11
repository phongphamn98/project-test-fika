import { actionTypes } from '../constants/action-types';

const initialState = {
   listStarWar: [],
   loading: false,
   totalCount: 0,
}

const starWarsReducer = (state = initialState, { type, payload }) => {
   switch (type) {
      case actionTypes.LOADING:
         return {
            ...state,
            loading: true,
         };
      case actionTypes.FETCH_STAR_WARS_SUCCEEDED:
         console.log('FETCH_STAR_WARS_SUCCEEDED', payload);
         return {
            ...state,
            totalCount: payload.count,
            listStarWar: payload.results,
            loading: false,
         };
      case actionTypes.FETCH_STAR_WARS_FAILED:
         console.log('FETCH_STAR_WARS_FAILED');
         return {
            ...state,
            loading: false,
         }
      default:
         return state;
   }
}

export default starWarsReducer;