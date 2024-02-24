import React from 'react';
import TableData from './TableData';
import TableHead from './TableHead';

const Table = ({data, handleDelete}) => {
   
    return (
        <div className='overflow-auto'>
            <table>
                <TableHead />
                <tbody>
                    {
                        data.length === 0 ? (
                            <tr><td>no data</td></tr>
                        ) : (
                            data.map(task => (
                                <TableData
                                    key={task.id}
                                    task={task}
                                    handleDelete={handleDelete}
                                    id={task.id}
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