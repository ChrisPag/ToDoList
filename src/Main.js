import { useState, useEffect } from 'react';

const Main = () => {
    const [taskData, setTaskData] = useState(null);
    //const [checked, setChecked] = useState(false);

    /*Get request to localhost, res is the response object to fetch*/
    useEffect(() => {
        fetch('http://localhost:8000/tasks')
        .then(res => {
            /*Get data*/
            return res.json();
        })
        .then(data => {
            setTaskData(data);
        })
    }, [])

    /*Get task ID from clicked task and delete the task*/
    const handleClick = (tid) => {
        fetch('http://localhost:8000/tasks/'+ tid,{
            method: 'DELETE'
        })
    }

    /*const handleCheck = (tid) => {
        setChecked(state=>!state);
    }*/

    return(
        <div className="main">
            {/*Displays each task*/}
            {taskData && (taskData.map(task => (
                <div className="taskPreview" key={task.id}>
                    <form>
                        {/*<input type="checkbox" className="check" onClick={()=> handleCheck(task.id)}></input>*/}
                        {task.desc}
                        <button type="submit" className="delete" onClick={()=> handleClick(task.id)}>Delete</button>
                    </form>
                </div>
            )))}
            
        </div>
    );
}

export default Main;