export default function Admin() {
  return (
    <div className="container mb-5" style={{ width: "1140px", }}>
      <h1 className="text-center mt-5 fw-bold" style={{ color:"#5E5A00" }}>DASHBOARD</h1>
      <div>
        <div className="row mx-auto mt-5 pb-5">
          <div className="col">
            <div className="text-center">
              <h1 className="btn rounded-circle bg-warning fw-bold" style={{ border: "3px solid #222" }}>
                1
              </h1>
            </div>
            <div className="card bg-warning p-2" style={{ boxShadow: "0 4px 8px grey" }}>
              <img src="/public/image 1.png" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title fw-bold fs-2" style={{ textShadow: "0 0 5px white" }}>
                  SURYA SURYA
                </h5>
                <p className="card-text fw-bold" style={{ textShadow: "0 0 3px white" }}>
                  Akumulasi: 45%
                </p>
                <p className="card-text fw-bold" style={{ textShadow: "0 0 3px white", marginTop: "-20px" }}>
                  Jumlah Vote: 117 voters
                </p>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="text-center">
              <h1 className="btn rounded-circle bg-danger  fw-bold" style={{ border: "3px solid #222" }}>
                2
              </h1>
            </div>
            <div className="card bg-danger p-2" style={{ boxShadow: "0 4px 8px grey" }}>
              <img src="/public/image 1.png" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title fw-bold fs-2" style={{ textShadow: "0 0 5px white" }}>
                  SURYA SURYA
                </h5>
                <p className="card-text fw-bold" style={{ textShadow: "0 0 3px white" }}>
                  Akumulasi: 45%
                </p>
                <p className="card-text fw-bold" style={{ textShadow: "0 0 3px white", marginTop: "-20px" }}>
                  Jumlah Vote: 117 voters
                </p>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="text-center">
              <h1 className="btn rounded-circle bg-success fw-bold" style={{ border: "3px solid #222" }}>
                3
              </h1>
            </div>
            <div className="card bg-success p-2" style={{ boxShadow: "0 4px 8px grey" }}>
              <img src="/public/image 1.png" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title fw-bold fs-2" style={{ textShadow: "0 0 5px white" }}>
                  SURYA SURYA
                </h5>
                <p className="card-text fw-bold" style={{ textShadow: "0 0 3px white" }}>
                  Akumulasi: 45%
                </p>
                <p className="card-text fw-bold" style={{ textShadow: "0 0 3px white", marginTop: "-20px" }}>
                  Jumlah Vote: 117 voters
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
