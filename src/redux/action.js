// export const addTask = (newTask) => {
//   return {
//     type: "tasks/addTask",
//     payload: newTask,
//   };
// };

// export const deleteTask = (taskId) => {
//   return {
//     type: "tasks/deleteTask",
//     payload: taskId,
//   };
// };

// export const toogleCompleted = (taskId) => {
//   return {
//     type: "tasks/toggleCompleted",
//     payload: taskId,
//   };
// };

// export const setStatusFilter = (value) => {
//   return {
//     type: "filter/setStatusFilter",
//     payload: value,
//   };
// };

import { createAction } from "@reduxjs/toolkit";

export const addTask = createAction("tasks/addTask");

export const deleteTask = createAction("tasks/deleteTasks");

export const toggleCompleted = createAction("tasks/toggleCompleted");

export const setStatusFilter = createAction("filters/setStatusFilter");

console.log(toggleCompleted(1));

console.log(setStatusFilter("hello"));
