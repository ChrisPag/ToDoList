import { useState } from 'react';

const Tasks = () => {
    const [desc, setDesc] = useState();
    
    return (
        <div className="tasks">
            <button>Done</button>
            
            <form>
                <input
                    type="text"
                    placeholder="Enter task here"
                    value={ desc }
                    onChange = {(e) => setDesc(e.target.value)}
                />
            </form>
            <button>Delete</button>
        </div>
    );
}

export default Tasks;