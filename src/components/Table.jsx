import { useTasks } from '../context/TaskProvider';
import TableData from './TableData';
import TableHead from './TableHead';


const Table = () => {
    const { filteredTasks } = useTasks();
    
    return (
        <div className='overflow-auto'>
            <table>
                <TableHead />
                <tbody>
                    {
                        filteredTasks.length === 0 ? (
                            <tr>
                                <td>no data</td>
                            </tr>
                        ) : (
                            filteredTasks.map( task => (
                                <TableData
                                    key={ task.id }
                                    task={ task }
                                />
                            ) )
                        )
                    }
                </tbody>
            </table>
        </div>
    );
};

export default Table;