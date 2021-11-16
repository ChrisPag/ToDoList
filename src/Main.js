import { useState, useEffect } from 'react';
import Iconx from './Iconx.png';
import Iconx2 from './Iconx2.png';
//import Tasks from './Tasks';

const Main = () => {
    const [taskData, setTaskData] = useState(null);
    /*const [checkData, setCheckData] = useState({
        taskid: '',
        checked: false,
    })*/

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
        })
    }, [])

    /*Get task ID from clicked task and delete the task*/
    const handleClick = (tid) => {
        fetch('http://localhost:8000/tasks/'+ tid,{
            method: 'DELETE'
        })
    }

    /*const handleCheck = (tid) => {
        setCheckData(prevState => ({
            taskid: tid,
            checked: !prevState.checked
        }));
    }

    const deleteSelected = (tid) => {
        if (checkData.checked ===true)

    }

    useEffect(()=>{
        console.log(checkData);
    }, [checkData])*/

    return(
        <div className="main">
            {/*Displays each task*/}
            {taskData && (taskData.map(task => (
                <div className="taskPreview" key={task.id}>
                    <form>
                        {/*<input type="checkbox" className="check" onClick={()=> handleCheck(task.id)}></input>*/}
                        <input type="checkbox" className="check"></input>
                        {task.desc}
                        <button type="submit" className="delete" onClick={()=> handleClick(task.id)}>
                            <img className="hideOnHover" src={Iconx} alt="delete button" />
                            <img className="showOnHover" src={Iconx2} alt="delete button" />
                        </button>
                    </form>
                </div>
            )))}
            <button id="deleteChecked">Delete Checked</button>
        </div>
    );
}

export default Main;