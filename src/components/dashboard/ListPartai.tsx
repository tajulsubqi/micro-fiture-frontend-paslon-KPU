import { useEffect, useState } from "react"
import { Table } from "react-bootstrap"
import { API } from "../../libs/api"

type ListPartai = {
  id: number
  nama: string
  image: string
  ketuaUmum: string
  visiMisi: string
  alamat: string
}

export default function ListPartai() {
  const [partaiList, setPartaiList] = useState<ListPartai[]>([])

  const fetchPartaiList = async () => {
    try {
      const response = await API.get("/partai")
      console.log(response.status, response.data)

      // Pastikan bahwa response.data adalah array
      if (Array.isArray(response.data.data)) {
        setPartaiList(response.data.data)
      } else {
        console.error("Format data dari API tidak valid")
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchPartaiList()
  }, [])

  return (
    <div className="container" style={{ width: "1140px", marginTop: "3rem" }}>
      <h1 className="text-center py-5 fw-bold" style={{ color: "#5E5A00" }}>
        LIST PARTAI
      </h1>
      <div className="mx-auto">
        <Table className="table table-bordered border-secondary-subtle mb-5" striped bordered hover>
          <thead className="table-secondary">
            <tr className="text-center">
              <th style={{ width: "100px" }}>No. Urut</th>
              <th>Image</th>
              {/* <th>Nama</th> */}
              <th>Ketua Umum</th>
              <th>Visi Misi</th>
              <th>Alamat</th>
            </tr>
          </thead>
          <tbody>
            {partaiList.map((list, index) => (
              <tr key={list.id} className="text-center">
                <td className="text-center align-items-center">{index + 1}</td>
                <td style={{ width: "120px" }}>
                  <div>
                    <img src={list.image} alt="image" width={100} height={100} />{" "}
                  </div>
                </td>
                {/* <td>{list.nama}</td> */}
                <td>{list.ketuaUmum}</td>
                <td className="text-start">{list.visiMisi}</td>
                <td style={{ width: "300px" }}>{list.alamat}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  )
}
