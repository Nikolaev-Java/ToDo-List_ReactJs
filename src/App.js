import React, {useEffect, useState} from "react";
import './App.css';

import InsertInput from "./components/UI/input/InsertInput";
import MainButton from "./components/UI/mainButton/MainButton";
import TaskList from "./components/TaskList";
import InsertTask from "./components/InsertTask";

function App() {
    const [tasks, setTask] = useState([]);
    useEffect(()=>{
        if(localStorage.length){
            setTask(JSON.parse(localStorage.getItem("tasks")));
        }
    },[]);
    const createTask = (newTask)=>{
        setTask([newTask,...tasks])
    }
    const changeCheckedTask = (id)=>{
      setTask(tasks.map(task=>{
          if(task.id===id){
              return {...task, checked:!task.checked};
          }else {
              return task;
          }
      }))
    }
    const removeTaskById = (id)=>{
        setTask(tasks.filter(item => item.id !== id));
    }
    const changeTask = (id,label)=>{
        setTask(tasks.map(task=>{
            if(task.id===id){
                return {...task, task:label};
            }else {
                return task;
            }
        }))
    }

    const saveTasks = ()=>{
        tasks.length? localStorage.setItem("tasks",JSON.stringify(tasks)): localStorage.clear();
    }
  return (
    <div className="App">
        <div className="container">
            <h1 className="app__title">ToDo List</h1>
            <InsertTask create={createTask}></InsertTask>
            <TaskList tasks={tasks} change={[changeCheckedTask,removeTaskById,changeTask]} set={setTask}></TaskList>
            <MainButton onClick={saveTasks}>save</MainButton>
        </div>
    </div>
  );
}

export default App;
