/* eslint-disable no-unused-vars */
import React from 'react';
import taskData from '../assets/data';
import TableData from './TableData';
import TableHead from './TableHead';

console.log(taskData);

const Table = () => {
    return (
        <div className='overflow-auto'>
            <table>
                <TableHead />
                <tbody>
                    {
                        taskData.length === 0 ? (
                            <tr><td>no data</td></tr>
                        ) : (
                            taskData.map((task) => (
                                <TableData key={task.id} task={task} />
                            ))
                        )
                    }
                </tbody>
            </table>
        </div>
    );
};

export default Table;