import { useEffect, useState} from 'react';
import Tasks from './Tasks';

const AddTask = () =>{
    const [showTask, setShowTask] = useState(false);
    const [showCancel, setShowCancel] = useState(false);
    let buttonDesc = "Add Task";

    useEffect(() => {
        console.log("changed setshowtask");
    },[showTask]);

    if(showCancel){
        buttonDesc = "Cancel";
    }
    else{
        buttonDesc = "Add Task";
    }

    const handleClick = () => {
        /*updates state of showTask which rerenders react so button 
        can be clicked twice*/
        setShowTask(state=> !state);
        setShowCancel(state=> !state);
    }

    return (
        <div className="taskContainer">          
            <button id="addTask" onClick={handleClick}>
                {buttonDesc}</button>
            {showTask && 
            <Tasks />} 
        </div>
    )
}

export default AddTask;