import { configureStore } from "@reduxjs/toolkit";

// export const store = configureStore({});

const initialState = {
  tasks: {
    item: [
      { id: 0, text: "Learn HTML and CSS", completed: true },
      { id: 1, text: "Learn HTML and CSS", completed: true },
      { id: 2, text: "Learn HTML and CSS", completed: true },
      { id: 3, text: "Learn HTML and CSS", completed: true },
      { id: 4, text: "Learn HTML and CSS", completed: true },
      { id: 5, text: "Learn HTML and CSS", completed: true },
    ],
  },
  filters: {
    status: "all",
  },
};

const rootReducer = (state = initialState, action) => {
  return state;
};

export const store = configureStore({
  reducer: rootReducer,
});
