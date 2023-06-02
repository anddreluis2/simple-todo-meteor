import React from "react";
import { Tasks } from "./Tasks";

const tasks = [
  { _id: 1, text: "First Task" },
  { _id: 2, text: "Second Task" },
  { _id: 3, text: "Third Task" },
];

export const App = () => {
  return (
    <div>
      <h1>Welcome to Meteor!</h1>
      <ul>
        {tasks.map((task) => {
          return <Tasks key={task._id} task={task} />;
        })}
      </ul>
    </div>
  );
};
