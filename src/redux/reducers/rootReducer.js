import { combineReducers } from 'redux';
import starWarsReducer from './starWarsReducer';

const rootReducer = combineReducers({
   starWarsState: starWarsReducer,
});

export default rootReducer;