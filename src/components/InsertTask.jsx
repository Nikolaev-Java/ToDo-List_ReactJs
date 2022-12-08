import React, {useState} from 'react';
import InsertInput from "./UI/input/InsertInput";
import MainButton from "./UI/mainButton/MainButton";

const InsertTask = ({create}) => {
    const [task, setTask] = useState("");

    const handlerClick = (e) =>{
        addTask();
    }
    const handlerPress = (e)=>{
        if(e.key==="Enter"){
            addTask();
        }
    }
    const addTask= ()=>{
        const newTask = {
            id: Date.now(),
            task,
            checked:false,
        }
        create(newTask);
        setTask("")
    }
    return (
        <div className="app__insert">
            <InsertInput placeholder="add task" value={task} onChange={e=> setTask(e.target.value)} onKeyPress={handlerPress}/>
            <MainButton onClick={handlerClick}>add</MainButton>
        </div>
    );
};

export default InsertTask;