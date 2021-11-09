import { useState } from 'react';

const Tasks = () => {
    const [desc, setDesc] = useState();

    const handleSubmit = (e) => {
        e.preventDefault();
        const task = {desc}
        fetch('http://localhost:8000/tasks', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(task)
        }).then(() => {
            console.log('new task added');
        })
    }

    return (
        <div className="tasks">
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Enter task here"
                    value={ desc }
                    onChange = {(e) => setDesc(e.target.value)}
                />
                <button type="submit" id="done">Done</button>
                <button id="cancel">Cancel</button>
            </form>
            
            
        </div>
    );
}

export default Tasks;