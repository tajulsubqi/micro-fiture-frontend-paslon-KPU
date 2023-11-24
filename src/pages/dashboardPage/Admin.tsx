import Dashboard from "../../components/dashboard/Dashboard";
import ListVoter from "../../components/dashboard/ListVoter";
import NavbarLog from "../../components/navbar/Navbar";
// import FormLogin from "../../components/modals/FormLogin";

export default function Admin() {
  return (
    <>
      <NavbarLog />
      {/* <FormLogin/> */}
      <Dashboard />
      <ListVoter />
    </>
  );
}
