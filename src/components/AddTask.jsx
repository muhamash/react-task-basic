/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useTasksDispatch } from '../context/TaskProvider';


const AddTask = ( { onClose, task } ) =>
{
    // console.log(task);
    const dispatch = useTasksDispatch();

    const initialFormData = task ? {
        title: task.title,
        description: task.description,
        tags: task.tags ? task.tags.join( ', ' ) : '',
        priority: task.priority
    } : {
        title: '',
        description: '',
        tags: '',
        priority: ''
    };
    
    const [ formData, setFormData ] = useState( initialFormData );

    const handleChange = ( e ) =>
    {
        const { name, value } = e.target;
        setFormData( ( prevData ) => ( {
            ...prevData,
            [ name ]: value,
        } ) );
    };
    const handleSubmit = ( event ) =>
    {
        event.preventDefault();

        if (
            !formData.title ||
            !formData.description ||
            !formData.tags ||
            !formData.priority
        )
        {
            toast.error( "All fields are required!" );
            return;
        }

        const actionType = task ? "EDIT_TASK" : "ADD_TASK";

        dispatch( {
            type: actionType,
            payload: {
                id: task ? task.id : Math.floor( Math.random() * 1000 ),
                name: formData.title,
                description: formData.description,
                tagNames: formData.tags.split( "," ),
                priority: formData.priority,
                isFavourite: task ? task.isFavourite : false,
            },
        } );

        setFormData( initialFormData );

        const toastMessage = task
            ? "Task updated successfully!"
            : "Task added successfully!";
        toast.success( toastMessage );

        onClose();
    };

    return (
        <div className='absolute w-[96vw] left-0 -bottom-[480px]'>
            <form
                onSubmit={ handleSubmit }
                className="mx-auto my-10 w-full max-w-[740px] rounded-xl border border-[#FEFBFB]/[36%] bg-[#191D26] p-9 max-md:px-4 lg:my-20 lg:p-11"
            >
                <h2
                    className="mb-9 text-center text-2xl font-bold text-white lg:mb-11 lg:text-[28px]"
                >
                    { task ? 'Edit Task' : 'Add New Task' }
                </h2>

                <div className="space-y-9 text-white lg:space-y-10">
                    <div className="space-y-2 lg:space-y-3">
                        <label htmlFor="title">Title</label>
                        <input
                            className="block w-full rounded-md bg-[#2D323F] px-3 py-2.5"
                            type="text"
                            name="title"
                            id="title"
                            value={ formData.title }
                            onChange={ handleChange }
                            required
                        />
                    </div>
                    <div className="space-y-2 lg:space-y-3">
                        <label htmlFor="description">Description</label>
                        <textarea
                            className="block min-h-[120px] w-full rounded-md bg-[#2D323F] px-3 py-2.5 lg:min-h-[180px]"
                            type="text"
                            name="description"
                            id="description"
                            value={ formData.description }
                            onChange={ handleChange }
                            required
                        ></textarea>
                    </div>
                    <div
                        className="grid-cols-2 gap-x-4 max-md:space-y-9 md:grid lg:gap-x-10 xl:gap-x-20"
                    >
                        <div className="space-y-2 lg:space-y-3">
                            <label htmlFor="tags">Tags</label>
                            <input
                                className="block w-full rounded-md bg-[#2D323F] px-3 py-2.5"
                                type="text"
                                name="tags"
                                id="tags"
                                value={ formData.tags }
                                onChange={ handleChange }
                                required
                            />
                        </div>
                        <div className="space-y-2 lg:space-y-3">
                            <label htmlFor="priority">Priority</label>
                            <select
                                className="block w-full cursor-pointer rounded-md bg-[#2D323F] px-3 py-2.5"
                                name="priority"
                                id="priority"
                                value={ formData.priority }
                                onChange={ handleChange }
                                required
                            >
                                <option value="">Select Priority</option>
                                <option value="low">Low</option>
                                <option value="medium">Medium</option>
                                <option value="high">High</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="mt-16 flex justify-center lg:mt-20">
                    <button
                        type="submit"
                        className="rounded bg-blue-600 px-4 py-2 text-white transition-all hover:opacity-80"
                    >
                        { task ? 'Update Task' : 'Create New Task' }
                    </button>
                    <button
                        type="button"
                        className="rounded bg-gray-600 px-2 py-1 text-white ml-4 transition-all hover:opacity-80"
                        onClick={ onClose }
                    >
                        Close
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddTask;