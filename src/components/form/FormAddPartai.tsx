import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import FloatingLabel from "react-bootstrap/FloatingLabel"
import { useState, ChangeEvent, FormEvent } from "react"
import { API } from "../../libs/api"

type FormAddPartaiProps = {
  onImageUpload: (imageUrl: string) => void
}

type FormAddPartai = {
  nama: string
  image: string
  ketuaUmum: string
  visiMisi: string
  alamat: string
}

export default function FormAddPartai({ onImageUpload }: FormAddPartaiProps) {
  const [image, setImage] = useState<string | File | null>(null)
  const [formData, setFormData] = useState({
    nama: "",
    image: "",
    ketuaUmum: "",
    visiMisi: "",
    alamat: "",
  })

  const handleImageChange = (e: any) => {
    const file = e.target.files[0]

    const reader = new FileReader()
    reader.onloadend = () => {
      setImage(reader.result as string)
      onImageUpload(reader.result as string)
    }

    if (file) {
      reader.readAsDataURL(file)
    }
  }

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }
  console.log(formData)

  //HANDLE SUBMIT
  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    try {
      e.preventDefault()

      const headers = {
        "Content-Type": "application/json",
      }

      const formDataWithImage = new FormData()
      formDataWithImage.append("nama", formData.nama)
      formDataWithImage.append("ketuaUmum", formData.ketuaUmum)
      formDataWithImage.append("visiMisi", formData.visiMisi)
      formDataWithImage.append("alamat", formData.alamat)
      formDataWithImage.append("image", image as File)

      console.log(formDataWithImage)

      const response = await API.post("/addPartai", formDataWithImage, { headers })
      console.log(response.data.data)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="mb-5">
      <Form onSubmit={handleSubmit} className="w-100">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className="fw-bold" style={{ color: "#5E5A00" }}>
            Name
          </Form.Label>
          <Form.Control onChange={handleInputChange} type="text" name="nama" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label className="fw-bold" style={{ color: "#5E5A00" }}>
            Ketua Umum
          </Form.Label>
          <Form.Control onChange={handleInputChange} type="text" name="ketuaUmum" />
        </Form.Group>

        <Form.Group className="mb-3">
          <FloatingLabel label="" className="mb-3 fw-bold" style={{ color: "#5E5A00" }}>
            {" "}
            Visi Misi
            <Form.Control
              onChange={handleInputChange}
              type="text"
              name="visiMisi"
              className="mt-2"
              as="textarea"
              placeholder="Leave a comment here"
              style={{ height: "120px" }}
            />
          </FloatingLabel>
        </Form.Group>

        <Form.Group className="mb-3">
          <FloatingLabel label="" className="mb-3 fw-bold" style={{ color: "#5E5A00" }}>
            {" "}
            Alamat
            <Form.Control
              onChange={handleInputChange}
              type="text"
              name="alamat"
              className="mt-2"
              as="textarea"
              placeholder="Leave a comment here"
              style={{ height: "120px" }}
            />
          </FloatingLabel>
        </Form.Group>

        <Form.Group controlId="formFile" className="mb-3">
          <Form.Label className="fw-bold" style={{ color: "#5E5A00" }}>
            Upload Image
          </Form.Label>
          <Form.Control type="file" name="image" onChange={handleImageChange} />
        </Form.Group>

        <Button
          className="w-100 mt-3"
          variant="primary"
          type="submit"
          style={{ backgroundColor: "#5E5A00" }}
        >
          Submit
        </Button>
      </Form>
    </div>
  )
}
