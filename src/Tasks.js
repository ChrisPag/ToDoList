import { useState } from 'react';

const Tasks = (props) => {
    const [desc, setDesc] = useState();
    const [addClicked, setAddClicked] = useState(props.showTask);
    const [keepShow, setKeepShow] = useState(addClicked);

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

    const handleClick = () => {
        setKeepShow(false);
        setAddClicked(false);
    }

    return (
        <div className="tasks">
            {keepShow &&
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Enter task here"
                    value={ desc }
                    onChange = {(e) => setDesc(e.target.value)}
                />
                <button type="submit" id="done" onClick={handleClick}>Done</button>
            </form>
            }   
            {keepShow &&
                <button id="cancel" onClick={handleClick}>Cancel</button>
            }
        </div>
    );
}

export default Tasks;