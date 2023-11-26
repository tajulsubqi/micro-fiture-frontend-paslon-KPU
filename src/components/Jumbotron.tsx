export default function Jumbotron() {
  return (
    <>
      <div
        className="container  rounded-4"
        style={{
          width: '1140px',
          marginTop: '7rem',
          height: '516px',
          background: 'linear-gradient(to right, #750606a5, #5C0303)',
        }}
      >
        <div className="row d-flex">
          <div className="col-8 ">
            <div style={{ marginLeft: '-15px' }}>
              <img src="./branded.png" alt="" width={342} height={237} />
            </div>
            <div className="text-white" style={{ marginTop: '5rem' }}>
              <h1 className="fw-bolder" style={{ fontSize: '4.5rem' }}>
                SELAMAT DATANG
              </h1>
              <h3 className=" " style={{ width: '40rem' }}>
                PEMILU PRESIDEN DUMBWAYS.ID YANG JUJUR DIPILIH MELALUI SEBUAH
                ARTI NAMA
              </h3>
            </div>
          </div>
          <div className="col-3">
            <img src="./kotak suara.png" alt="" width={245} height={473} />
          </div>
        </div>
      </div>
    </>
  )
}
