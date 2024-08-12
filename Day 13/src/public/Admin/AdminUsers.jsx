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
import { Plus, Trash } from 'lucide-react';
import { toast } from 'sonner';
import { Popover, PopoverTrigger, PopoverContent } from '@radix-ui/react-popover';
import { deleteUserById, getUsers, SignUpMember } from '@/service/api';
 

const AdminUsers = () => {
  const [isFormVisible, setFormVisible] = useState(false);
  const [userToDelete, setUserToDelete] = useState(null);
  const [formData, setFormData] = useState({
    userid:"",
    name: "",
    role: "",
    email: "",
    contact: "",
  });
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch users from backend when component mounts
    const fetchUsers = async () => {
      try {
        const response = await getUsers();
        setUsers(response.data); // Assuming response.data contains the user data
      } catch (error) {
        console.error("Failed to fetch users", error);
      }
    };
    
    fetchUsers();
  }, []);

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      await SignUpMember(formData.name, formData.email, 'password', formData.contact, formData.role); // Add role as needed
      setFormVisible(false);
      setFormData({name: "", role: "", email: "", contact: "" });
      toast.success("User added successfully!");
      
      // Refresh user list
      const response = await getUsers();
      setUsers(response.data);
    } catch (error) {
      console.error("Failed to add user", error);
      toast.error("Failed to add user.");
    }
  };

  const handleDeleteUser = async () => {
    if (userToDelete) {
      try {
        await deleteUserById(userToDelete);
        setUserToDelete(null);
        toast.success("User deleted successfully!");
        
        // Refresh user list
        const response = await getUsers();
        setUsers(response.data);
      } catch (error) {
        console.error("Failed to delete user", error);
        toast.error("Failed to delete user.");
      }
    }
  };

  return (
    <div className='h-full w-full flex justify-center items-center'>
      <div className='w-[90%] max-w-7xl bg-card text-card-foreground shadow-lg rounded-lg'>
        <Table>
          <TableCaption className="bg-secondary text-secondary-foreground">Application users</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[120px] bg-primary text-primary-foreground">User ID</TableHead>
              <TableHead className="bg-primary text-primary-foreground">Name</TableHead>
              <TableHead className="bg-primary text-primary-foreground">Role</TableHead>
              <TableHead className="bg-primary text-primary-foreground">Email</TableHead>
              <TableHead className="bg-primary text-primary-foreground">Contact</TableHead>
              <TableHead className="text-right bg-primary text-primary-foreground">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.id} className="bg-card">
                <TableCell className="font-medium text-foreground">{user.userid}</TableCell>
                <TableCell className="text-foreground">{user.name}</TableCell>
                <TableCell className="text-foreground">{user.role}</TableCell>
                <TableCell className="text-foreground">{user.email}</TableCell>
                <TableCell className="text-foreground">{user.contact}</TableCell>
                <TableCell className="text-right">
                  <Popover>
                    <PopoverTrigger>
                      <Button
                        variant="outline"
                        className="mr-2"
                        onClick={() => setUserToDelete(user.userid)}
                      >
                        <Trash /> Delete
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className='p-4 bg-card text-card-foreground rounded shadow-lg'>
                      <p className='text-sm'>Are you sure you want to delete this user?</p>
                      <div className='flex justify-end mt-4'>
                        <Button
                          className='mr-2'
                          variant='destructive'
                          onClick={handleDeleteUser}
                        >
                          Confirm
                        </Button>
                        <Button
                          variant='outline'
                          onClick={() => setUserToDelete(null)}
                        >
                          Cancel
                        </Button>
                      </div>
                    </PopoverContent>
                  </Popover>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter className='flex justify-center bg-transparent m-5'>
            <Button className='flex justify-center items-center' onClick={() => setFormVisible(true)}>
              <Plus /> Add User
            </Button>
          </TableFooter>
        </Table>

        {/* Form Modal */}
        {isFormVisible && (
          <div className='fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center'>
            <div className='bg-card p-6 rounded-lg shadow-lg max-w-lg w-full'>
              <h2 className='text-xl font-bold mb-4 text-foreground'>Add New User</h2>
              <form onSubmit={handleFormSubmit}>
                <div className='mb-4'>
                  <label className='block text-sm font-medium text-foreground' htmlFor='name'>User Name</label>
                  <input
                    id='name'
                    name='name'
                    type='text'
                    value={formData.name}
                    onChange={handleFormChange}
                    className='mt-1 block w-full border-input rounded-md shadow-sm'
                    required
                  />
                </div>
                <div className='mb-4'>
                  <label className='block text-sm font-medium text-foreground' htmlFor='role'>Role</label>
                  <input
                    id='role'
                    name='role'
                    type='text'
                    value={formData.role}
                    onChange={handleFormChange}
                    className='mt-1 block w-full border-input rounded-md shadow-sm'
                    required
                  />
                </div>
                <div className='mb-4'>
                  <label className='block text-sm font-medium text-foreground' htmlFor='email'>Email</label>
                  <input
                    id='email'
                    name='email'
                    type='email'
                    value={formData.email}
                    onChange={handleFormChange}
                    className='mt-1 block w-full border-input rounded-md shadow-sm'
                    required
                  />
                </div>
                <div className='mb-4'>
                  <label className='block text-sm font-medium text-foreground' htmlFor='contact'>Contact Number</label>
                  <input
                    id='contact'
                    name='contact'
                    type='tel'
                    value={formData.contact}
                    onChange={handleFormChange}
                    className='mt-1 block w-full border-input rounded-md shadow-sm'
                    required
                  />
                </div>
                <div className='flex justify-end'>
                  <Button type='submit' className='mr-4 bg-primary text-primary-foreground'>Submit</Button>
                  <Button type='button' onClick={() => setFormVisible(false)} variant='outline'>Cancel</Button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminUsers;
