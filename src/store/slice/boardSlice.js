import { createSlice } from '@reduxjs/toolkit';
import { businessOutcomeData } from '../../utils/data';
import {businessOutcomeColumnData} from "../../utils/data"

export const slice = createSlice({
  name: 'board',
  initialState: {
    dialogOpen: false,
    boardType:'outcomes',
    boardSubType:'kanban', 
    data:businessOutcomeData,
    activeData:null,
    colors:['var(--customColor13)','var(--customColor7)','var(--customColor10)'],
    
  },
  reducers: {
    dialogToggle: state => {
      state.dialogOpen = !state.dialogOpen
    },
    updateBoardType:(state,action) => {
      
      state[action.payload.key] = action.payload.data 
    },
    // createNewData:(state) => {
    //   state.activeData =  {
    //     type:'outcomes',
    //     subType:'kanban',
    //     columnData:businessOutcomeColumnData[0], 
    //     extraTopTags:'Arrested Development',
    //     ID:state.data[state.data.length-1]?.ID + 1 || 237,
    //     text:'Ensure seamless Customer Success experience so that',
    //     description:'We believe that by focusing efforts around the creation of annuity products within the senior market we establish a foothold to create additional opportunities in this market.',
    //     progress:74,
    //     tags:['lending','claims','in discovery'],
    //     cardColor:'var(--customColor13)',
    //   }  
    //   state.dialogOpen = true
    // },
    updateActiveData:(state)=>{
      
      state.data = state.data.map((elem) => {
        if(elem.ID == state.activeData.ID){
          elem = {...state.activeData}
        }
        return elem
      })
      
    },
    createNewData:(state)=>{
      state.data.unshift(state.activeData)
      // state.dialogOpen = false
      // state.activeData = null
    },
    setActiveData:(state,action)=>{
     
      state.activeData = action.payload
    }
    
   
  },
});

export const { dialogToggle,createNewData,updateBoardType,setActiveData,updateActiveData} = slice.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
// export const incrementAsync = amount => dispatch => {
//   setTimeout(() => {
//     dispatch(incrementByAmount(amount));
//   }, 1000);
// };

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
// export const selectCount = state => state.counter.value;

export default slice.reducer;
