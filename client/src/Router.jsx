import ForgotPassword from './components/ForgotPassword'
import Signin from './components/Signin'
import Signup from './components/Signup'
import ResetPassword from './components/ResetPassword'
import ErrorPage from './components/ErrorPage'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Feeds from './components/Feeds'
import FileView from './components/FileView'
import SendFile from './components/SendFile'
import Dashboard from './components/Admin/Dashboard'
import About from './components/About'
import Contact from './components/Contact'
import Home from './components/Home'
import AddFile from './components/Admin/AddFile'
import Settings from './components/Admin/Settings'
import AllFiles from './components/Admin/AllFiles'
import Users from './components/Admin/Users'
import MainDetails from './components/Admin/MainDetails'
import AdminPasswordReset from './components/Admin/AdminPasswordReset'
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/about",
    element: <About />
  },

  {
    path: "/contact",
    element: <Contact />
  },
  {
    path: "/signin",
    element: <Signin />
  },
  {
    path: "/forgotpassword",
    element:  <ForgotPassword />
  },
  {
    path: "/signup",
    element:  <Signup />
  },
  {
    path: "/feeds",
    element:  <Feeds />
  },
  {
    path: "/files/view",
    element:  <FileView />
  },
  {
    path: "/files/send/email",
    element:  <SendFile />
  },
  {
    path: "/password/reset",
    element:  <ResetPassword />
  },
  {
    path: "/admin/dashboard",
    element:  <Dashboard/>,
      children:[
        {
          path: "settings",
          element:  <Settings />
        },
        {
          path: "users",
          element:  <Users />
        },
        {
          path: "password/change",
          element:  <AdminPasswordReset />
        },
        {
          path: "files",
          element:  <AllFiles />
        },
        {
          path: "",
          element:  <MainDetails />
        }
      ]
  },
  {
    path: "/files/add",
    element:  <AddFile />
  },
  {
    path: "*",
    element:  <ErrorPage />
  }

])

const Router = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default Router