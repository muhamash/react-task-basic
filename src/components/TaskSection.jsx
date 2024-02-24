import React, { useState } from 'react';
import taskData from '../assets/data';
import Search from './Search';
import Table from './Table';

const TaskSection = () => {
    const [ data, setData ] = useState( taskData );
    const [filteredData, setFilteredData] = useState(data);


    const handleToggleFavorite = ( taskId ) =>
    {
        setFilteredData( prevData =>
        {
            const updatedData = prevData.map( task =>
            {
                if ( task.id === taskId )
                {
                    return { ...task, isFavorite: !task.isFavorite };
                }
                return task;
            } );
            return updatedData;
        } );
    };


    const handleDelete = (deletedId) => {
         const updatedData = deletedId ? data.filter(item => item.id !== deletedId) : [];
        setFilteredData( updatedData );
        setData(updatedData)
    };
    
    const handleSearch = (event) =>
    {
        const filteredData = data.filter( item => item.title.toLowerCase().includes( event.toLowerCase() ) )
        setFilteredData( filteredData )
        // setData(filteredData)

        
    }

    return (
        <div>
            <Search
                handleSearch={handleSearch}
                handleDelete={ handleDelete } />
            <Table
                data={filteredData}
                handleDelete={ handleDelete }
                handleToggleFavorite={handleToggleFavorite}
            />
        </div>
    );
};

export default TaskSection;