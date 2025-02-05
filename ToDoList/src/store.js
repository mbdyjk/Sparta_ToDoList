import { configureStore, createSlice } from "@reduxjs/toolkit";

// 초기 상태 정의
const initialState = [
  { id: 0, text: "Philosopher’s Path", done: true },
  { id: 1, text: "Visit the temple", done: false },
  { id: 2, text: "Drink matcha", done: false },
];

let nextId = 3;

// Redux slice 정의
const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    added: (state, action) => {
      state.push({
        id: nextId++,
        text: action.payload.text,
        done: false,
      });
    },
    changed: (state, action) => {
      const taskIndex = state.findIndex((t) => t.id === action.payload.id);
      if (taskIndex !== -1) {
        state[taskIndex] = action.payload;
      }
    },
    deleted: (state, action) => {
      return state.filter((t) => t.id !== action.payload.id);
    },
  },
});

export const { added, changed, deleted } = tasksSlice.actions;

export const store = configureStore({
  reducer: {
    tasks: tasksSlice.reducer,
  },
});
