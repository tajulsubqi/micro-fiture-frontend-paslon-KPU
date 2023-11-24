import FormAddPaslon from "../components/form/FormAddPaslon";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import NavbarLog from "../components/navbar/Navbar";

export default function AddPaslon() {
  return (
    <div>
      <NavbarLog />
      <Container style={{ width: 1140 ,marginTop:"7rem"}}>
        <h1 className="text-center my-5 fw-bold " style={{ color: "#5E5A00" }}>
          ADD PASLON
        </h1>
        <Row>
          <Col xs={6}>
            <img className="mt-5 rounded-3" src="./carousel/anis.png" alt="" width={500} height={400} />
          </Col>
          <Col xs={6}>
            <FormAddPaslon />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
