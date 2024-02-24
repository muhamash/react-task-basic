import React, { useState } from 'react';
import taskData from '../assets/data';
import Search from './Search';
import Table from './Table';

const TaskSection = () => {
    const [data, setData] = useState(taskData);

    const handleDelete = (deletedId) => {
         const updatedData = deletedId ? data.filter(item => item.id !== deletedId) : [];
        setData(updatedData);
    };
    
    const handleSearch = (event) =>
    {
        const filteredData = data.filter( item => item.title.toLowerCase().includes( event.toLowerCase() ) )
        setData(filteredData)
    }

    return (
        <div>
            <Search
                handleSearch={handleSearch}
                handleDelete={ handleDelete } />
            <Table
                data={data}
                handleDelete={handleDelete}
            />
        </div>
    );
};

export default TaskSection;