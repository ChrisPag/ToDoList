import { useState} from 'react';
import React from 'react';
//dont forget you changed showTask to value
const Tasks = () => {
    const [desc, setDesc] = useState('');

    const handleSubmit = (e) => {
        //e.preventDefault();
        const task = {desc}
        fetch('http://localhost:8000/tasks', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(task)
        }).then(() => {
            console.log('new task added');
        })
    }

    //changed keepShow to addClicked
    return (
        <div className="tasks">
            {//addClicked &&
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Enter task here"
                    value={ desc }
                    onChange = {(e) => setDesc(e.target.value)}
                />
                <button type="submit" id="done">Done</button>
            </form>
            }
        </div>
    );
}

export default Tasks;