import { Table } from "react-bootstrap"
import { useEffect, useState } from "react"
import { API } from "../../libs/api"

type ListPaslon = {
  noUrut: number
  image: string
  nama: string
  visiMisi: string
  koalisi: string
}

export default function ListPaslon() {
  const [paslonList, setPaslonList] = useState<ListPaslon[]>([])

  const fetchPaslonList = async () => {
    try {
      const response = await API.get("/paslon")
      console.log(response.status, response.data)

      if (Array.isArray(response.data.data)) {
        setPaslonList(response.data.data)
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchPaslonList()
  }, [])

  const renderPaslonList = () => {
    return paslonList.map((list: any) => (
      <tr key={list.id}>
        <td className="text-center fw-bold fs-5">{list.noUrut}</td>
        <td style={{ width: "100px" }}>
          <div>
            <img src={list.image} alt="image" width={100} height={100} />
          </div>
        </td>
        <td className="text-center">{list.nama}</td>
        <td>{list.visiMisi}</td>
        <td style={{ width: 350 }}>{list.koalisi}</td>
      </tr>
    ))
  }

  return (
    <div className="container" style={{ width: "1140px", marginTop: "3rem" }}>
      <h1 className="text-center py-5 fw-bold" style={{ color: "#5E5A00" }}>
        LIST PASLON
      </h1>
      <div className="mx-auto">
        <Table className="table table-bordered border-secondary-subtle" striped bordered hover>
          <thead className="table-secondary">
            <tr className="text-center">
              <th style={{ width: "100px" }}>No. Urut</th>
              <th>Image</th>
              <th>Nama</th>
              <th>Visi Misi</th>
              <th>Koalisi</th>
            </tr>
          </thead>
          <tbody>{renderPaslonList()}</tbody>
        </Table>
      </div>
    </div>
  )
}
