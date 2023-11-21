import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";

export default function FormAddPaslon() {
  return (
    <div>
      <Form className="w-100">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className="fw-bold" style={{ color: "#5E5A00" }}>
            Name
          </Form.Label>
          <Form.Control type="text" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label className="fw-bold" style={{ color: "#5E5A00" }}>
            Nomor Urut
          </Form.Label>
          <Form.Control type="text" />
        </Form.Group>

        <Form.Group className="mb-3">
          <FloatingLabel label="" className="mb-3 fw-bold" style={{ color: "#5E5A00" }}>
            {" "}
            Visi Misi
            <Form.Control className="mt-2" as="textarea" placeholder="Leave a comment here" style={{ height: "250px" }} />
          </FloatingLabel>
        </Form.Group>

        <Button className="w-100 mt-3" variant="primary" type="submit" style={{ backgroundColor: "#5E5A00" }}>
          Submit
        </Button>
      </Form>
    </div>
  );
}
