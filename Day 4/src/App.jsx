import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Main from './pages/Main'
import SignIn from './components/Web/SignIn'
import SignUp from './components/Web/SignUp'
import MainLayout from './layout/MainLayout'
import AdminLayout from './layout/AdminLayout'
import AdminDashboard from './public/Admin/AdminDashboard'
import UserLayout from './layout/UserLayout'
import UserDashboard from './public/User/UserDashboard'
import AdminUsers from './public/Admin/AdminUsers'
import AdminProjects from './public/Admin/AdminProjects'


const App = () => {
  return (
    <div>
    <Routes>
      <Route element = {<MainLayout/>}>
        <Route path = "/" element = {<Main/>}/>
        <Route path = "/signIn" element = {<SignIn/>}/>
        <Route path = "/signUp" element = {<SignUp/>}/>
      </Route>
      <Route element = {<AdminLayout/>}>
        <Route path = "/admin/dashboard" element = {<AdminDashboard/>}/>
        <Route path = "/admin/users" element={<AdminUsers/>}/>
        <Route path = "/admin/projects" element={<AdminProjects/>}/>
        <Route path = "/admin/tasks" element={<AdminUsers/>}/>
      </Route>
      <Route element = {<UserLayout/>}>
        <Route path = "/userDashboard" element = {<UserDashboard/>}/>
      </Route>
    </Routes>
    </div>
  )
}

export default App;