import React from 'react';
import { useTasksDispatch } from '../context/TaskProvider';
import SearchBox from './SearchBox';
import AddTask from './AddTask';

const Search = () =>
{
    const dispatch = useTasksDispatch();
    const [ isModalOpen, setIsModalOpen ] = React.useState( false );
    
    const openAddTaskModal = () =>
    {
        setIsModalOpen( true );
    };

    const handleCloseModal = () =>
    {
        setIsModalOpen( false );
    };
    const handleDeleteAll = () =>
    {
        dispatch( { type: "DELETE_ALL_TASKS" } );
    };

    return (
        <div className="mb-14 items-center justify-between sm:flex">
            <h2 className="text-2xl font-semibold max-sm:mb-4">Your Tasks</h2>
            <div className='flex items-center space-x-5'>
                <SearchBox />
                <button
                    onClick={ openAddTaskModal }
                    className="rounded-md bg-blue-500 px-3.5 py-2.5 text-sm font-semibold">Add Task</button>
                <button
                    onClick={ handleDeleteAll }
                    className="rounded-md bg-red-500 px-3.5 py-2.5 text-sm font-semibold">Delete All</button>
                { isModalOpen && (
                    <AddTask onClose={ handleCloseModal } />
                ) }
            </div>
        </div>
    );
};

export default Search;