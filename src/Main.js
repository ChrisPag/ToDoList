import { useState, useEffect } from 'react';
//import { useParams } from "react-router-dom";

const Main = () => {
    //const { id } = useParams();
    const [taskData, setTaskData] = useState(null);
  
    useEffect(() => {
        fetch('http://localhost:8000/tasks')
        .then(res => {
            return res.json();
        })

        .then(data => {
            setTaskData(data);
        })
    }, [])

    const handleClick = (tid) => {
        fetch('http://localhost:8000/tasks/'+ tid,{
            method: 'DELETE'
        })
    }

    return(
        <div className="main">
            {taskData && (taskData.map(task => (
                <div className="taskPreview" key={task.id}>
                    <p>
                    <input type="checkbox" className="check"></input>
                        {task.desc}
                        <button className="delete" onClick={()=>{
                        handleClick(task.id)}}>Delete</button>
                    </p>
                </div>
            )))}
            
        </div>
    );
}

export default Main;