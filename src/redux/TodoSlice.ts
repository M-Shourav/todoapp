import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Todo } from "../../type";

interface TodoState {
  todoList: Todo[];
}

const initialState: TodoState = {
  todoList: [],
};

export const TodoSlice = createSlice({
  name: "Todo",
  initialState,
  reducers: {
    // add
    addTodo: (state, actions: PayloadAction<Todo>) => {
      state.todoList.push(actions.payload);
    },
    // deleteTodo
    deleteTodo: (state, actions: PayloadAction<string>) => {
      state.todoList = state.todoList.filter(
        (item) => item?._id !== actions.payload
      );
    },
    // remove
    removeTodo: (state) => {
      state.todoList = [];
    },
  },
});

export const { addTodo, deleteTodo, removeTodo } = TodoSlice.actions;
export default TodoSlice.reducer;
