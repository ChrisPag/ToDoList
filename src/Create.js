import { useState } from 'react';

const Create = () => {
    const [desc, setDesc] = useState();
    
    const handleClick = () => {
        setDesc('eat food');
    }

    return (
        <div className = "create">
            <button onClick={handleClick}>Add Task</button>
            <div className ="tasks">
                <p>{desc}</p>
            </div>
            
        </div>
    );
}

export default Create;