//import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';


const Main = () => {
    
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

    //const { id } = useParams();
    const task = taskData;

    const handleClick = () => {
        fetch('http://localhost:8000/tasks/' + task.id, {
            method: 'DELETE'
        })
    }

    return(
        <div className="main">
            {taskData && (taskData.map(task => (
                <div className="taskPreview" key={task.id}>
                    <article>
                    
                        <p>
                        <input type="checkbox" class="check"></input>
                            {task.desc}
                            <button class="delete" onClick={handleClick}>Delete</button>
                        </p>
                    </article>
                    
                </div>
            )))}
            
        </div>
    );
}

export default Main;