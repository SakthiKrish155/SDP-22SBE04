import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Main from './pages/Main'
import SignIn from './components/Web/SignIn'
import SignUp from './components/Web/SignUp'
import MainLayout from './layout/MainLayout'
import AdminLayout from './layout/AdminLayout'
import UserLayout from './layout/UserLayout'
import AdminUsers from './public/Admin/AdminUsers'
import AdminProjects from './public/Manager/ManagerProjects'
import AdminTasks from './public/Manager/ManagerTasks'
import Admin from './pages/Admin'
import User from './pages/User'
import UserInProgress from './public/User/UserInProgress'
import UserImportant from './public/User/UserImportant'
import UserNotStarted from './public/User/UserNotStarted'
import UserTasks from './public/User/UserTasks'
import UserCompleted from './public/User/UserCompleted'
import PageNotFound from './components/Web/PageNotFound'
import AdminSettings from './public/Admin/AdminSettings'
import ManagerLayout from './layout/ManagerLayout'
import Manager from './pages/Manager'
import ManagerProjects from './public/Manager/ManagerProjects'
import ManagerTasks from './public/Manager/ManagerTasks'
import ManagerSettings from './public/Manager/ManagerSettings'
import UserSettings from './public/User/UserSettings'


const App = () => {
  return (
    <div>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Main />} />
          <Route path="/signIn" element={<SignIn />} />
          <Route path="/signUp" element={<SignUp />} />
        </Route>
        <Route element={<AdminLayout />}>
          <Route path="/admin/content" element={<Admin />} />
          <Route path="/admin/users" element={<AdminUsers />} />
          <Route path="/admin/settings" element={<AdminSettings />} />
        </Route>
        <Route element={<ManagerLayout />}>
          <Route path="/manager/content" element={<Manager />} />
          <Route path="/manager/projects" element={<ManagerProjects />} />
          <Route path="/manager/Tasks" element={<ManagerTasks />} />
          <Route path="/manager/settings" element={<ManagerSettings />} />
        </Route>
        <Route element={<UserLayout />}>
          <Route path="/user/content" element={<User />} />
          <Route path="/user/allTasks" element={<UserTasks />} />
          <Route path="/user/completed" element={<UserCompleted />} />
          <Route path="/user/inProgress" element={<UserInProgress />} />
          <Route path="/user/important" element={<UserImportant />} />
          <Route path="/user/yetToStart" element={<UserNotStarted />} />
          <Route path="/user/settings" element={<UserSettings />} />
        </Route>
        <Route to="/*" element={<PageNotFound />} />
      </Routes>
    </div>
  )
}

export default App;