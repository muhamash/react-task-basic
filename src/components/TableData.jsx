/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import Tags from './Tags';

const TableData = ({ task, handleDelete,id, handleToggleFavorite }) => {
    const { title, description, tags, priority, isFavorite } = task;

    const toggleFavorite = ( ) =>
    {
        console.log("sf",id)
        handleToggleFavorite(id);
    };

    const handleClick = () =>
    {
        handleDelete( id );
    }
    return (
        <tr className="border-b border-[#2E3443] [&>td]:align-baseline [&>td]:px-4 [&>td]:py-2">
            <td onClick={toggleFavorite}>
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-star cursor-pointer" width="24"
                    height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="green" fill={isFavorite ? 'green' : 'none'}
                    strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path
                        d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" />
                </svg>
            </td>
            <td>{title}</td>
            <td>
                <div>
                    {description}
                </div>
            </td>
            <td>
                <ul className="flex justify-center gap-1.5 flex-wrap">
                    {
                        tags.map((tag, index) => (
                            <Tags key={index} tag={tag} />
                        ))
                    }
                </ul>
            </td>
            <td className="text-center">{priority}</td>
            <td>
                <div className="flex items-center justify-center space-x-3">
                    <button
                        onClick={handleClick}
                        className="text-red-500">Delete</button>
                    <button
                        onClick={""}
                        className="text-blue-500">Edit</button>
                </div>
            </td>
        </tr>
    );
};

export default TableData;