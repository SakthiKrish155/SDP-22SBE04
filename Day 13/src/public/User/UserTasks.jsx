// import React, { useState } from 'react';
// import { Button } from '@/components/ui/button';
// import { FaStar, FaRegStar } from 'react-icons/fa'; // Assuming you're using react-icons

// const UserTasks = () => {
//   const [tasks, setTasks] = useState([
//     {
//       id: 1,
//       name: 'Design Homepage',
//       dueDate: '2024-08-01',
//       important: true,
//       assignedBy: 'John Doe',
//       status: 'Not Started',
//       timeRequired: '',
//     },
//     {
//       id: 2,
//       name: 'Develop API',
//       dueDate: '2024-08-05',
//       important: false,
//       assignedBy: 'Jane Smith',
//       status: 'In Progress',
//       timeRequired: '',
//     },
//     {
//       id: 3,
//       name: 'Testing and QA',
//       dueDate: '2024-08-10',
//       important: true,
//       assignedBy: 'Alex Johnson',
//       status: 'Completed',
//       timeRequired: '',
//     },
//   ]);

//   const handleStatusChange = (taskId, newStatus) => {
//     setTasks(tasks.map(task => (task.id === taskId ? { ...task, status: newStatus } : task)));
//   };

//   const toggleImportant = (taskId) => {
//     setTasks(tasks.map(task => 
//       task.id === taskId ? { ...task, important: !task.important } : task
//     ));
//   };

//   const handleTimeChange = (taskId, newTime) => {
//     setTasks(tasks.map(task => (task.id === taskId ? { ...task, timeRequired: newTime } : task)));
//   };

//   const renderTasksByStatus = (status) => {
//     return tasks
//       .filter(task => task.status === status)
//       .map(task => (
//         <tr key={task.id} className="border-t hover:bg-gray-50">
//           <td className="p-4 text-gray-800">{task.name}</td>
//           <td className="p-4 text-gray-600">{task.dueDate}</td>
//           <td className="p-4">
//             <Button
//               onClick={() => toggleImportant(task.id)}
//               className={`flex items-center justify-center p-2 rounded-full ${task.important ? 'bg-yellow-500 text-white' : 'bg-gray-200 text-gray-600'}`}
//             >
//               {task.important ? <FaStar /> : <FaRegStar />}
//             </Button>
//           </td>
//           <td className="p-4 text-gray-800">{task.assignedBy}</td>
//           <td className="p-4">
//             <select
//               value={task.status}
//               onChange={e => handleStatusChange(task.id, e.target.value)}
//               className="bg-gray-100 border border-gray-300 rounded-lg p-2 text-gray-800"
//             >
//               <option value="Not Started">Not Started</option>
//               <option value="In Progress">In Progress</option>
//               <option value="Completed">Completed</option>
//             </select>
//           </td>
//           <td className="p-4">
//             <input
//               type="text"
//               value={task.timeRequired}
//               onChange={e => handleTimeChange(task.id, e.target.value)}
//               className="bg-gray-100 border border-gray-300 rounded-lg p-2 text-gray-800"
//               placeholder="e.g., 3h 30m"
//             />
//           </td>
//         </tr>
//       ));
//   };

//   return (
//     <div className="container mx-auto py-10">
//       <h1 className="text-3xl font-bold mb-8 text-center" style={{ fontFamily: "'Open Sans', sans-serif" }}>
//         My Tasks
//       </h1>
//       <div className="overflow-x-auto">
//         <table className="min-w-full bg-white shadow-md rounded-lg border border-gray-200">
//           <thead>
//             <tr className="bg-blue-900 text-white text-left">
//               <th className="p-4">Task Name</th>
//               <th className="p-4">Due Date</th>
//               <th className="p-4">Important</th>
//               <th className="p-4">Assigned By</th>
//               <th className="p-4">Status</th>
//               <th className="p-4">Time Required</th>
//             </tr>
//           </thead>
//           <tbody>
//             <tr className="bg-gray-200">
//               <td colSpan="6" className="p-4 font-semibold text-gray-800">Not Started</td>
//             </tr>
//             {renderTasksByStatus('Not Started')}
//             <tr className="bg-gray-200">
//               <td colSpan="6" className="p-4 font-semibold text-gray-800">In Progress</td>
//             </tr>
//             {renderTasksByStatus('In Progress')}
//             <tr className="bg-gray-200">
//               <td colSpan="6" className="p-4 font-semibold text-gray-800">Completed</td>
//             </tr>
//             {renderTasksByStatus('Completed')}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default UserTasks;


import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { FaStar, FaRegStar } from 'react-icons/fa'; // Assuming you're using react-icons
import { jwtDecode } from 'jwt-decode'; // Import jwt-decode
import { getTasks, updateTask } from '@/service/api';

const UserTasks = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        // Decode the JWT token to get the user email
        const token = localStorage.getItem('token');
        if (!token) {
          throw new Error('No token found');
        }

        const decodedToken = jwtDecode(token);
        const userEmail = decodedToken.sub; // Extract email from the token

        // Fetch tasks from the API
        const response = await getTasks(); // Assuming this fetches all tasks
        const userTasks = response.data.filter(task => task.assignedBy === userEmail); // Adjust based on your task structure

        setTasks(userTasks);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTasks();
  }, []);

  const handleStatusChange = async (taskId, newStatus) => {
    try {
      await updateTask(taskId, { status: newStatus });
      setTasks(tasks.map(task => (task.id === taskId ? { ...task, status: newStatus } : task)));
    } catch (err) {
      setError(err.message);
    }
  };

  const handlePriorityChange = async (taskId, newPriority) => {
    try {
      await updateTask(taskId, { priority: newPriority });
      setTasks(tasks.map(task => (task.id === taskId ? { ...task, priority: newPriority } : task)));
    } catch (err) {
      setError(err.message);
    }
  };

  const toggleImportant = (taskId) => {
    setTasks(tasks.map(task =>
      task.id === taskId ? { ...task, important: !task.important } : task
    ));
  };

  const handleTimeChange = (taskId, newTime) => {
    setTasks(tasks.map(task => (task.id === taskId ? { ...task, timeRequired: newTime } : task)));
  };

  const renderTasksByStatus = (status) => {
    return tasks
      .filter(task => task.status === status)
      .map(task => (
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
          <td className="p-4">
            <select
              value={task.status}
              onChange={e => handleStatusChange(task.id, e.target.value)}
              className="bg-gray-100 border border-gray-300 rounded-lg p-2 text-gray-800"
            >
              <option value="Pending">Pending</option>
              <option value="In Progress">In Progress</option>
              <option value="Completed">Completed</option>
            </select>
          </td>
          <td className="p-4">
            <select
              value={task.priority}
              onChange={e => handlePriorityChange(task.id, e.target.value)}
              className="bg-gray-100 border border-gray-300 rounded-lg p-2 text-gray-800"
            >
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
            </select>
          </td>
          <td className="p-4">
            <input
              type="text"
              value={task.timeRequired}
              onChange={e => handleTimeChange(task.id, e.target.value)}
              className="bg-gray-100 border border-gray-300 rounded-lg p-2 text-gray-800"
              placeholder="e.g., 3h 30m"
            />
          </td>
        </tr>
      ));
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-8 text-center" style={{ fontFamily: "'Open Sans', sans-serif" }}>
        My Tasks
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
              <th className="p-4">Priority</th>
              <th className="p-4">Time Required</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-gray-200">
              <td colSpan="7" className="p-4 font-semibold text-gray-800">Pending</td>
            </tr>
            {renderTasksByStatus('Pending')}
            <tr className="bg-gray-200">
              <td colSpan="7" className="p-4 font-semibold text-gray-800">In Progress</td>
            </tr>
            {renderTasksByStatus('In Progress')}
            <tr className="bg-gray-200">
              <td colSpan="7" className="p-4 font-semibold text-gray-800">Completed</td>
            </tr>
            {renderTasksByStatus('Completed')}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserTasks;
