import React, { useState, useEffect } from 'react';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from '@/components/ui/button';
import { Plus, Edit, Trash } from 'lucide-react';
import { getProjects, getProjectById, addProject, updateProject, deleteProject } from '@/service/api';

const ManagerProjects = () => {
  const [projects, setProjects] = useState([]);
  const [isFormVisible, setFormVisible] = useState(false);
  const [formData, setFormData] = useState({
    projectid: "",
    projectname: "",
    projectdescription: "",
    duedate: ""
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getProjects();
        setProjects(response.data);
      } catch (error) {
        console.error("Error fetching data:", error.response?.data || error.message || error);
      }
    };

    fetchData();
  }, []);

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const formattedDueDate = new Date(formData.duedate).toISOString().split('T')[0];
      const projectData = { ...formData, duedate: formattedDueDate };

      if (formData.id) {
        await updateProject(formData.id, projectData);
      } else {
        await addProject(projectData);
      }

      const response = await getProjects(); // Refresh project list
      setProjects(response.data);
      setFormVisible(false);
      setFormData({
        projectid: "",
        projectname: "",
        projectdescription: "",
        duedate: ""
      });
    } catch (error) {
      console.error("Error submitting form:", error.response?.data || error.message || error);
    }
  };

  const handleDelete = async (projectId) => {
    try {
      await deleteProject(projectId);
      const response = await getProjects(); // Refresh project list
      setProjects(response.data);
    } catch (error) {
      console.error("Error deleting project:", error.response?.data || error.message || error);
    }
  };

  const handleEdit = async (projectId) => {
    try {
      const response = await getProjectById(projectId);
      const project = response.data;
      setFormData({
        projectid: project.projectid,
        projectname: project.projectname,
        projectdescription: project.projectdescription,
        duedate: project.duedate
      });
      setFormVisible(true);
    } catch (error) {
      console.error("Error fetching project details:", error.response?.data || error.message || error);
    }
  };

  return (
    <div className='h-full w-full flex justify-center items-center p-7'>
      <div className='w-[90%] max-w-7xl bg-card text-card-foreground shadow-lg rounded-lg'>
        <Table>
          <TableCaption className="bg-muted text-muted-foreground">Ongoing Projects</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[120px] bg-primary text-primary-foreground">Project ID</TableHead>
              <TableHead className="bg-primary text-primary-foreground">Project Name</TableHead>
              <TableHead className="bg-primary text-primary-foreground">Due Date</TableHead>
              <TableHead className="bg-primary flex justify-center items-center text-primary-foreground">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {projects.map((project) => (
              <TableRow key={project.projectid} className="bg-card hover:bg-primary/10 hover:text-primary-foreground">
                <TableCell className="font-medium text-foreground">{project.projectid}</TableCell>
                <TableCell className="text-foreground">{project.projectname}</TableCell>
                <TableCell className="text-foreground">{project.duedate}</TableCell>
                <TableCell className="text-foreground flex space-x-5 justify-center items-center">
                  <Button onClick={() => handleEdit(project.projectid)} className="bg-primary flex text-primary-foreground hover:bg-primary-dark">
                    <Edit /> Edit
                  </Button>
                  <Button onClick={() => handleDelete(project.projectid)} className="bg-destructive text-destructive-foreground hover:bg-destructive-dark">
                    <Trash /> Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter className='flex justify-center bg-transparent m-5'>
            <Button className='flex justify-center items-center bg-primary text-primary-foreground hover:bg-primary-dark' onClick={() => setFormVisible(true)}>
              <Plus /> Add Project
            </Button>
          </TableFooter>
        </Table>

        {/* Form Modal */}
        {isFormVisible && (
          <div className='fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center'>
            <div className='bg-card p-6 rounded-lg shadow-lg max-w-lg w-full'>
              <h2 className='text-xl font-bold mb-4 text-foreground'>Add/Edit Project</h2>
              <form onSubmit={handleFormSubmit}>
                <div className='mb-4'>
                  <label className='block text-sm font-medium text-muted-foreground' htmlFor='projectname'>Project Name</label>
                  <input
                    id='projectname'
                    name='projectname'
                    type='text'
                    className='mt-1 pl-3 pr-3 h-8 block w-full border-foreground bg-foreground/5 rounded-sm'
                    value={formData.projectname}
                    onChange={handleFormChange}
                    required
                  />
                </div>
                <div className='mb-4'>
                  <label className='block text-sm font-medium text-muted-foreground' htmlFor='projectdescription'>Project Description</label>
                  <input
                    id='projectdescription'
                    name='projectdescription'
                    type='text'
                    className='mt-1 pl-3 pr-3 h-8 block w-full border-foreground bg-foreground/5 rounded-sm'
                    value={formData.projectdescription}
                    onChange={handleFormChange}
                  />
                </div>
                <div className='mb-4'>
                  <label className='block text-sm font-medium text-muted-foreground' htmlFor='duedate'>Due Date</label>
                  <input
                    id='duedate'
                    name='duedate'
                    type='date'
                    className='mt-1 pl-3 pr-3 h-8 block w-full border-foreground bg-foreground/5 rounded-sm'
                    value={formData.duedate}
                    onChange={handleFormChange}
                    required
                  />
                </div>
                <div className='flex justify-end space-x-2'>
                  <Button type='button' className="hover:bg-red-500 bg-red-300 text-red-700"onClick={() => setFormVisible(false)} >Cancel</Button>
                  <Button type='submit' className='bg-primary text-primary-foreground'>
                    {formData.projectid ? 'Update Project' : 'Add Project'}
                  </Button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ManagerProjects;
