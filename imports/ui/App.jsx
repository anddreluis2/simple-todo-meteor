import React from "react";
import { Tasks } from "./Tasks";
import { useTracker } from "meteor/react-meteor-data";
import { TasksCollection } from "/imports/api/TasksCollection";

export const App = () => {
  const tasks = useTracker(() => TasksCollection.find({}).fetch());

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
