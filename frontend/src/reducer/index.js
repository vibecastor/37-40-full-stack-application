import { combineReducers } from 'redux';
import token from './token';
import clientProfile from './client-profile';
import clientPicture from './client-pictures';

export default combineReducers({ token, clientProfile, clientPicture });
