import { Table, Image } from "react-bootstrap";

export default function ListPartai() {
  return (
    <div className="container" style={{ width: "1140px" }}>
      <h1 className="text-center py-5 fw-bold" style={{ color: "#5E5A00" }}>
        LIST PARTAI
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
          <tbody>
            <tr>
              <td className="text-center">
                <div>1</div>
              </td>
              <td className="" width={400}>
                <div>
                  <Image src="/public/carousel/anis.png" alt="Gambar" thumbnail />
                </div>
              </td>
              <td className="text-center">
                <p>Anis</p>
              </td>
              <td>Data 3</td>
              <td>Data 4</td>
            </tr>
            {/* Tambahkan baris tambahan sesuai kebutuhan */}
          </tbody>
        </Table>
      </div>
    </div>
  );
}
