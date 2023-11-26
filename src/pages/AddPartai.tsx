import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import NavbarLog from "../components/navbar/Navbar"
import FormAddPartai from "../components/form/FormAddPartai"
import { useState } from "react"

export default function AddPartai() {
  const [uploadedImage, setUploadedImage] = useState(null)

  const handleImageUpload = (image: any) => {
    setUploadedImage(image)
  }

  return (
    <div>
      <NavbarLog />
      <Container style={{ width: 1140, marginTop: "7rem" }}>
        <h1 className="text-center my-5 fw-bold " style={{ color: "#5E5A00" }}>
          ADD PARTAI
        </h1>
        <Row>
          <Col xs={6}>
            {uploadedImage ? (
              <div className="rounded-3">
                <h5 className="fw-bold">Preview Image:</h5>
                <img
                  className="mt-3 rounded-3"
                  src={uploadedImage}
                  alt=""
                  width={500}
                  height={400}
                  style={{ objectFit:"cover" }}
                />
              </div>
            ) : (
              <img className="mt-5" src="./carousel/anis.png" alt="" width={500} height={400} />
            )}
          </Col>
          <Col xs={6}>
            <FormAddPartai onImageUpload={handleImageUpload} />
          </Col>
        </Row>
      </Container>
    </div>
  )
}
