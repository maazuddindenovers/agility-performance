import { configureStore } from '@reduxjs/toolkit';
import boardReducer from './slice/boardSlice';


export default configureStore({
  reducer: {
        board:boardReducer
  },
});
