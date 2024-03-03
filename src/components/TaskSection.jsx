/* eslint-disable no-unused-vars */
import React from 'react';
import Table from "../components/Table";
import { TasksProvider } from '../context/TaskProvider';
import Search from './Search';

const TaskSection = () =>
{
    return (
        <>
            <TasksProvider>
                <Search />
                <Table/>
            </TasksProvider>  
        </>
    );
};

export default TaskSection;