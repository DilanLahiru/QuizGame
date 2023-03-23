import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  restaurant: {
    id: null,
    imgUrl: null,
    title: null,
    rating: null,
    genre: null,
    address: null,
    short_description: null,
    dishes: null,
  },
};

export const RegistrationReducer = createSlice({
  name: 'restaurant',
  initialState,
  reducers: {
    setRestaurant: (state, action) => {
      state.restaurant = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {setRestaurant} = RegistrationReducer.actions;

export const selectRestaurant = state => state.restaurant.restaurant;

export default RegistrationReducer.reducer;