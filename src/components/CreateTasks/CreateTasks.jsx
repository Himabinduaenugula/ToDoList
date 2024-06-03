import React, { useState } from 'react';
import ViewTasks from '../ViewTasks/ViewTasks';

const CreateTasks = () => {

    const [enableTextField, setEnableTextField] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const [addTask, setAddTask] = useState([]);


    const handleCreateButton = () => {
        setEnableTextField(previuosState=>!previuosState);
    }

    const handleInputfield = (e) => {
        setInputValue(e.target.value);
    }

    const handleAddButton = () => {
        setAddTask([...addTask, inputValue]);
        setInputValue('');
    }

    return (
        <div>
            <button onClick={handleCreateButton}>Create To Do</button>
            {enableTextField && <><input type='text' value={inputValue} onChange={handleInputfield}></input><button onClick={handleAddButton}>Add</button></>}
            <ViewTasks tasks={addTask} />
        </div>
    )
}

export default CreateTasks