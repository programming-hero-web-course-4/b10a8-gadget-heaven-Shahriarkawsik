import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Dashboard = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    document.title = "Dashboard | Gadget Heaven";
  }, []);
  return (
    <div>
      <h1>Dashboard</h1>
    </div>
  );
};

export default Dashboard;
