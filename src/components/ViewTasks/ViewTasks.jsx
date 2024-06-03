import React, { useState } from 'react'
import CheckboxList from './CheckboxList';

const ViewTasks = ({tasks}) => {
    console.log(tasks)

    const [viewList, setViewList] = useState(false);

    const handleView = () => {
        setViewList(previousstate=>!previousstate);
    }

    return (
        <div>
            <button onClick={handleView}>View To-do List</button>
            {viewList && tasks.map((task, index) => (
            <CheckboxList key={index} label={task} />
          ))}
        </div>
    )
}

export default ViewTasks