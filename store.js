import {configureStore} from '@reduxjs/toolkit';
import loginReducer from './app/reducer/LoginReducer';
import registrationReducer from './app/reducer/RegistrationReducer';
import gameReducer from './app/reducer/GameReducer';

export const store = configureStore({
  reducer: {
    reducerLogin: loginReducer,
    reducerRegistration: registrationReducer,
    game: gameReducer,
  },
});
