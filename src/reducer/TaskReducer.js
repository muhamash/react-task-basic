const ADD_TASK = 'ADD_TASK';
const EDIT_TASK = 'EDIT_TASK';
const DELETE_TASK = 'DELETE_TASK';
const DELETE_ALL_TASKS = 'DELETE_ALL_TASKS';

const TaskReducer = ( data, action ) =>
{
    switch ( action.type )
    {
        case ADD_TASK:
            return [ ...data.action.payload ];
        case EDIT_TASK:
            return data.map( ( task ) =>
                task.id === action.payload.id ? { ...task, ...action.payload } : task
            );
        case DELETE_TASK:
            return data.filter(
                ( task ) => ( task.id !== action.payload.id )
            );
        case DELETE_ALL_TASKS:
            return [];
        
        default:
            return data;
    }
};

export default TaskReducer;