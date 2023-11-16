import Dashboard from "../../components/dashboard/Dashboard";
import ListVoter from "../../components/dashboard/ListVoter";
import NavDashboard from "../../components/dashboard/NavDashboard";

export default function Admin() {
  return (
    <>
      <NavDashboard />
      <Dashboard />
      <ListVoter />
    </>
  );
}
