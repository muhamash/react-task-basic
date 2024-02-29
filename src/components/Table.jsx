import React from 'react';
import TableData from './TableData';
import TableHead from './TableHead';

const Table = ({data, handleDelete, handleToggleFavorite}) => {
   
    return (
        <div className='overflow-auto'>
            <table>
                <TableHead />
                <tbody>
                    {
                        data.length === 0 ? (
                            <tr>
                                <td>no data</td>
                            </tr>
                        ) : (
                            data.map(task => (
                                <TableData
                                    key={task.id}
                                    task={task}
                                    handleDelete={handleDelete}
                                    id={ task.id }
                                    handleToggleFavorite={handleToggleFavorite}
                                />
                            ))
                        )
                    }
                </tbody>
            </table>
        </div>
    );
};

export default Table;