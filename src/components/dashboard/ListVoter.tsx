export default function ListVoter() {
  return (
    <div className="py-5" style={{ backgroundColor: "#aeaeae" }}>
      <h1 className="text-center py-5 fw-bold" style={{ color: "#5E5A00" }}>
        LIST VOTER
      </h1>
      <div className="mx-auto" style={{ width: "1140px" }}>
        <table className="table table-bordered border-secondary">
          <thead className="table-secondary">
            <tr>
              <th scope="col">No</th>
              <th scope="col">Nama</th>
              <th scope="col">Alamat</th>
              <th scope="col">Jenis Kelamin</th>
              <th scope="col">Paslon</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Sugeng No Pants</td>
              <td>Cileungsi</td>
              <td>Laki - Laki</td>
              <td>Paloh</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Haris Gams</td>
              <td>Serang</td>
              <td>Perempuan</td>
              <td>Surya</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Aziz Union</td>
              <td>Bekasi</td>
              <td>Laki - Laki</td>
              <td>Cintara</td>
            </tr>
            <tr>
              <th scope="row">4</th>
              <td>Lae Tanjung Balai</td>
              <td>Tanjung Balai</td>
              <td>Laki - Laki</td>
              <td>Paloh</td>
            </tr>
          </tbody>
        </table>
        <h3 className="pt-3 pb-5">TOTAL SUARA TERKUMPUL : 1000 VOTERS</h3>
      </div>
    </div>
  )
}
