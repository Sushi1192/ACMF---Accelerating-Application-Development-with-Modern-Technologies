import Login from './components/Login/Login';
import CustomNavbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import PasswordRecovery from './components/PasswordRecovery/PasswordRecovery';
import ReactDOM from 'react-dom/client';
import Project from './components/Project/Project';
import AdminDashboard from './components/AdminDashboard/AdminDashboard';
import ProjectList from './components/ProjectList/ProjectList';
import CreatePass from './components/CreatePass/CreatePass'

import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";

const  App = () => {
  return (
    <>
      <CustomNavbar />
      <Outlet />
    </>
  );
}

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Login />
      },
      {
        path: "/passwordrecovery",
        element: <PasswordRecovery />
      },
      {
        path: '/project',
        element: <Project />
      },
      {
        path: '/dashboard',
        element: <AdminDashboard />
      },
      {
        path: '/projectlist',
        element: <ProjectList />
      },
      ,
      {
        path: '/createpass',
        element: <CreatePass />
      }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);

