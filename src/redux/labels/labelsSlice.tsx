import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface LabelType {
  id: number;
  node_id: string;
  url: string;
  name: string;
  color: string;
  default: boolean;
  description: string;
}

// Define a type for the slice state
type LabelsState = LabelType[];

// Define the initial state using that type
const initialState: LabelsState = [];

const labelsSlice = createSlice({
  name: 'labels',
  initialState,
  reducers: {
    addLebel: (state, action) => {
      state.push(action.payload);
    },
    updateLabel: (state, action) => {
      state.map((label) => {
        if (label.id === action.payload.id) {
          label.name = action.payload.name;
        }
      });
    },
    deleteLabel: (state, action) => {
      state = state.filter((label) => label.id !== action.payload.id);
    },
    // todoToggled(state, action) {
    //   const todo = state.find((todo) => todo.id === action.payload);
    //   todo.completed = !todo.completed;
    // },
  },
});

export const { addLebel, updateLabel, deleteLabel } = labelsSlice.actions;
export default labelsSlice.reducer;
