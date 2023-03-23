import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  game: {
    gameLevel: '',
    gameScore: null,
  },
};

export const GameReducer = createSlice({
  name: 'game',
  initialState,
  reducers: {
    setGame: (state, action) => {
      state.game = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {setGame} = GameReducer.actions;

export const selectGameType = state => state.game.game;

export default GameReducer.reducer;
