import React, {useImperativeHandle, useRef, useState} from 'react';
import TrashIcon from "./UI/icon/trashIcon";
import EditIcon from "./UI/icon/editIcon";
import ButtonIcon from "./UI/buttonIcon/ButtonIcon";
import InsertInput from "./UI/input/InsertInput";
import CheckIcon from "./UI/icon/checkIcon";
import {Reorder, useDragControls} from "framer-motion";

const TaskItem =  ({task, change, ...props}) => {
    const [taskLabel, setTaskLabel] = useState(task);
    const [checked,remove,changeTask]= change;
    const [hiddenInput,setHiddenInput] = useState(true);
    const dragControls = useDragControls();
    const handlerClick= ()=>{
        setTaskLabel({...taskLabel, checked:!taskLabel.checked});
        checked(taskLabel.id);
    }
    const handlerClickToTrash=()=>{
        remove(taskLabel.id);
    }
    const handlerClickToEdit = ()=>{
        setHiddenInput(false);
    }
    const handlerBlur = (e)=>{
        setHiddenInput(true);
        setTaskLabel({...taskLabel, task:e.target.value});
        changeTask(taskLabel.id,e.target.value);
    }
    return (
        <Reorder.Item value={task} className="task" dragControls={dragControls} dragListener={false}>
            <div className="reorderIcon__container" dragcontrols={dragControls} onPointerDown={(event) => dragControls.start(event)}><div className="reorderIcon"></div></div>

            <div className={'task__label ' + `${taskLabel.checked?'checked':'' }`+ `${!hiddenInput?' hidden':''}` } onClick={handlerClick}>
                <CheckIcon className='task__check' ></CheckIcon>
                <span>{taskLabel.task}</span>
            </div>
            { (!hiddenInput)&&
                <InsertInput autoFocus defaultValue={taskLabel.task} style={{border:"none",fontWeight: "700"}} onChange={e=> e.target.value} onBlur={handlerBlur}/>
            }
            {hiddenInput && <ButtonIcon styleBtn={"edit"}><EditIcon onClick={handlerClickToEdit}/></ButtonIcon>}
            <ButtonIcon styleBtn = {"trash"}><TrashIcon onClick={handlerClickToTrash} /></ButtonIcon>
        </Reorder.Item>
    );
};

export default TaskItem;