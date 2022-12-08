import React from 'react';
import TaskItem from "./TaskItem";
import {Reorder} from "framer-motion";

const TaskList = ({tasks, change,set}) => {
    return (
        <Reorder.Group as="div" axis="y" onReorder={set} values={tasks} className="task__list">
            {tasks.map(task=>
                <TaskItem task={task} key={task.id} change={change}></TaskItem>
            )}
        </Reorder.Group>
    );
};

export default TaskList;