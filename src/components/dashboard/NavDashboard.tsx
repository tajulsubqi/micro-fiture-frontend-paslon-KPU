export default function NavDashboard() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark  d-flex justify-content-between  position-sticky top-0" style={{ backgroundColor: "black", zIndex: "999" }}>
        <div className="container">
          <img src="../public/logo.png" alt="logo" width={35} style={{ cursor: "pointer" }} />
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active fw-bold" aria-current="page" href="#">
                  DASHBOARD PEMILU
                </a>
              </li>
            </ul>
            <div className="d-flex flex-row text-white  ">
              <div className="p-2 ">Partai </div>
              <div className="p-2 ">|</div>
              <div className="p-2 ">Paslon </div>
            </div>
            <span className="btn bg-light rounded-circle ms-4 fw-bold">D</span>
          </div>
        </div>
      </nav>
    </>
  );
}
