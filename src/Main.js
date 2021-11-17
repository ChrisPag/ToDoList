import { useState, useEffect } from 'react';
import Iconx from './Iconx.png';
import Iconx2 from './Iconx2.png';
//import Tasks from './Tasks';

const Main = () => {
    const [taskData, setTaskData] = useState(null);
    const [numObjects, setNumObjects] = useState();

    /*Get request to localhost, res is the response object to fetch
    set fetched data as the task data to map*/
    useEffect(() => {
        fetch('http://localhost:8000/tasks')
        .then(res => {
            /*Get data*/
            return res.json();
        })
        .then(data => {
            setTaskData(data);
            setNumObjects(data.length);
        })
    }, [])

    const deleteSelected = () => {
        /*Get index of checked*/
        for(let i=0; i<checked.length;i++){
            if (checked[i] === true){
                fetch('http://localhost:8000/tasks/'+ taskData[i].id,{
                    method: 'DELETE'
                })
            }
        }
    }

    /*Create an array of boolean values with same number of objects*/
    let checked = new Array(numObjects).fill(false);

    const handleCheck = (tid) =>{
        /*Get index of task ID*/
        const index = taskData.findIndex(task => task.id === tid);
        
        /*Checked index is task ID index, when clicked the state toggles between 
        true and false*/
        checked[index] = !checked[index];
    }    

    /*Get task ID from clicked task and delete the task*/
    const handleClick = (tid) => {
        fetch('http://localhost:8000/tasks/'+ tid,{
            method: 'DELETE'
        })
    }

    return(
        <div className="main">
            {/*Displays each task*/}
            {taskData && (taskData.map(task => (
                <div className="taskPreview" key={task.id}>
                    <form>
                        <input 
                            type="checkbox" 
                            className="check" 
                            onClick={() => handleCheck(task.id)}
                        >
                        </input>

                        {task.desc}
                        <button type="submit" className="delete" onClick={()=> handleClick(task.id)}>
                            <img className="hideOnHover" src={Iconx} alt="delete button" />
                            <img className="showOnHover" src={Iconx2} alt="delete button" />
                        </button>
                    </form>
                </div>
            )))}
            <form>
                <button type="submit" id="deleteChecked" onClick={()=> deleteSelected()}>Delete Checked</button>
            </form>
        </div>
    );
}

export default Main;