import axios from 'axios';

const baseURL = "http://localhost:8080";
const axiosInstance = axios.create({
    baseURL,
});

axiosInstance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        console.log("Request config", config);
        return config;
    },
    (error) => {
        console.log("Request error", error);
        return Promise.reject(error);
    }
);

axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
        console.log("Response error", error.response);
        return Promise.reject(error);
    }
);

const SignUpMember = (name, email, password, contact, role) => axiosInstance.post('/users/auth/register', { name, email, password, contact, role });
const SignUpManager = (name, email, password, contact, role) => axiosInstance.post('/users/auth/register/pm', { name, email, password, contact, role });

// CRUD operations for projects
const getProjects = () => axiosInstance.get('/projects/findAll');
const getProjectById = (projectId) => axiosInstance.get(`/projects/findById/${projectId}`);
const addProject = (project) => axiosInstance.post('/projects/add', project);
const updateProject = (projectId, project) => axiosInstance.put(`/projects/update/${projectId}`, project);
const deleteProject = (projectId) => axiosInstance.delete(`/projects/delete/${projectId}`);


const getUserById = (userId) => axiosInstance.get(`/users/auth/findById/${userId}`);
const getUsers = (userId) => axiosInstance.get('/users/auth/findAll');
const deleteUserById = (userId) => axiosInstance.delete(`/users/auth/delete/${userId}`);
const updateUserById = (userId, userData) => axiosInstance.put(`/users/auth/update/${userId}`, userData);
const updateSpecificUserById = (userId, updateData) => axiosInstance.put(`/users/auth/updateSpecific/${userId}`, updateData);


const getTasks = () => axiosInstance.get('/tasks/findAll');
const getTaskById = (taskId) => axiosInstance.get(`/tasks/findById/${taskId}`);
const addTask = (task) => axiosInstance.post('/tasks/add', task);
const updateTask = (taskId, task) => axiosInstance.put(`/tasks/update/${taskId}`, task);
const patchTask = (taskId, updateData) => axiosInstance.patch(`/tasks/updateSpecific/${taskId}`, updateData);
const deleteTask = (taskId) => axiosInstance.delete(`/tasks/delete/${taskId}`);

export {
    axiosInstance, SignUpManager, SignUpMember,
    getProjects, getProjectById, addProject, updateProject, deleteProject,
    getUsers, getUserById, deleteUserById, updateUserById, updateSpecificUserById,
    getTasks, getTaskById, addTask, updateTask, patchTask, deleteTask
}
