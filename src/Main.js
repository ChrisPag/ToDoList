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

    return(
        <div className="main">
            {taskData && (taskData.map(task => (
                <div className="taskPreview" key={task.id}>
                    <p>{task.desc}</p>
                </div>
            )))}

        </div>
    );
}

export default Main;