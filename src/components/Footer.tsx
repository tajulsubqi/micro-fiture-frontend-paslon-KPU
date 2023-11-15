export default function Footer() {
  return (
    <div className=" text-white  " style={{ backgroundColor: "black" }}>
      <div className="container d-flex p-4">
        <img className="pe-5" src="/logo.png" alt="Footer png" />
        <div>
          <h4 className="fw-bold">DUMBWAYS.ID</h4>
          <p>Jl. Elang IV, Sawah Lama, Kec. Ciputat, Kota Tangerang Selatan, Banten 15413</p>
        </div>
      </div>
      <div style={{ width: "100%", border: "1px solid white" }}></div>
      <div className="py-3 text-center">
        <p>Komisi Pemilihan Umum Dumbways.ID | yuji 2023</p>
      </div>
    </div>
  );
}
