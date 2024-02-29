import React, { useState } from 'react';
import taskData from '../assets/data';
import AddTask from './AddTask';
import Search from './Search';
import Table from './Table';

const TaskSection = () =>
{
    const [ data, setData ] = useState( taskData );
    const [ filteredData, setFilteredData ] = useState( taskData );
    const [isAddTaskModalOpen, setIsAddTaskModalOpen] = useState(false);

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

    const handleDelete = ( deletedId ) =>
    {
        const updatedData = deletedId ? filteredData.filter( item => item.id !== deletedId ) : [];
        setFilteredData( updatedData );
        setData( updatedData );
    };

    const handleSearch = ( event ) =>
    {
        const filteredData = data.filter( item => item.title.toLowerCase().includes( event.toLowerCase() ) );
        setFilteredData( filteredData );
    };

    

    const openAddTaskModal = () => {
        setIsAddTaskModalOpen(true);
    };

    const closeAddTaskModal = () => {
        setIsAddTaskModalOpen(false);
    };

    return (
        <div>
            <Search
                handleSearch={ handleSearch }
                handleDelete={ handleDelete }
                openAddTaskModal={openAddTaskModal}
            />
            <Table
                data={ filteredData }
                handleDelete={ handleDelete }
                handleToggleFavorite={ handleToggleFavorite }
                openAddTaskModal={openAddTaskModal}
            />
            {isAddTaskModalOpen && (
                <AddTask onClose={closeAddTaskModal} task={filteredData}/>
            )}
        </div>
    );
};

export default TaskSection;