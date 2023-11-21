import Dashboard from "../../components/dashboard/Dashboard";
import ListVoter from "../../components/dashboard/ListVoter";
import NavDashboard from "../../components/navbar/NavDashboard";
// import FormLogin from "../../components/modals/FormLogin";

export default function Admin() {
  return (
    <>
      <NavDashboard />
      {/* <FormLogin/> */}
      <Dashboard />
      <ListVoter />
    </>
  );
}
