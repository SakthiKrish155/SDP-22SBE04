import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { FaStar, FaRegStar } from 'react-icons/fa'; // Assuming you're using react-icons

const UserCompleted = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      name: 'Design Homepage',
      dueDate: '2024-08-01',
      important: true,
      assignedBy: 'John Doe',
      status: 'Completed',
    },
    {
      id: 2,
      name: 'Develop API',
      dueDate: '2024-08-05',
      important: false,
      assignedBy: 'Jane Smith',
      status: 'Completed',
    },
    {
      id: 3,
      name: 'Testing and QA',
      dueDate: '2024-08-10',
      important: true,
      assignedBy: 'Alex Johnson',
      status: 'Completed',
    },
  ]);

  // Filter tasks to show only completed tasks
  const completedTasks = tasks.filter(task => task.status === 'Completed');

  const toggleImportant = (taskId) => {
    setTasks(tasks.map(task => 
      task.id === taskId ? { ...task, important: !task.important } : task
    ));
  };

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-8 text-center" style={{ fontFamily: "'Open Sans', sans-serif" }}>
        Completed Tasks
      </h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-lg border border-gray-200">
          <thead>
            <tr className="bg-blue-900 text-white text-left">
              <th className="p-4">Task Name</th>
              <th className="p-4">Due Date</th>
              <th className="p-4">Important</th>
              <th className="p-4">Assigned By</th>
              <th className="p-4">Status</th>
            </tr>
          </thead>
          <tbody>
            {completedTasks.map(task => (
              <tr key={task.id} className="border-t hover:bg-gray-50">
                <td className="p-4 text-gray-800">{task.name}</td>
                <td className="p-4 text-gray-600">{task.dueDate}</td>
                <td className="p-4">
                  <Button
                    onClick={() => toggleImportant(task.id)}
                    className={`flex items-center justify-center p-2 rounded-full ${task.important ? 'bg-yellow-500 text-white' : 'bg-gray-200 text-gray-600'}`}
                  >
                    {task.important ? <FaStar /> : <FaRegStar />}
                  </Button>
                </td>
                <td className="p-4 text-gray-800">{task.assignedBy}</td>
                <td className="p-4 text-gray-800">{task.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserCompleted;
