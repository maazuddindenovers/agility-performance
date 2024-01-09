import { configureStore } from '@reduxjs/toolkit';
import outcomeReducer from './slice/outcomeSlice';


export default configureStore({
  reducer: {
        outcomeDialog:outcomeReducer
  },
});
