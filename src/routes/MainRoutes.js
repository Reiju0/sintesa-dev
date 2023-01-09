//import react

//import project
import MainLayout from "./../layout/MainLayout";

// ---------------- ROUTING VIEWS ------------------
const Dashboard = () => import("views/Dashboard");
const DashboardTkd = () => import("views/Dashboard/DashboardTkd");
const Data = () => import("views/APBN");

// ---------------- MAIN ROUTING -------------------
const Mainroutes = {
  path: "/",
  element: <MainLayout />,
  children: [
    {
      path: "dashboard",
      element: <Dashboard />,
      children: [
        {
          path: "tkd",
          element: <DashboardTkd />,
        },
      ],
    },
    {
      path: "data",
      element: <Data />,
    },
  ],
};

export default Mainroutes;
