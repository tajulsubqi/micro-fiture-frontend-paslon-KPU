import noUrut1 from "/public/carousel/anis.png";
import noUrut2 from "/public/carousel/bowo.png";
import noUrut3 from "/public/carousel/ganjar.png";

export default function Admin() {
  const cardItems = [
    {
      image: noUrut1,
      title: "ANIS",
      noUrut: "1",
      akumulasi: "Akumulasi 75%",
      description: "Jumlah Votes: 117 Voters",
      color: "bg-success",
    },
    {
      image: noUrut2,
      title: "BOWO",
      noUrut: "2",
      akumulasi: "Akumulasi 60%",
      description: "Jumlah Votes: 96 Voters",
      color: "bg-primary",
    },
    {
      image: noUrut3,
      title: "GANJAR",
      noUrut: "3",
      akumulasi: "Akumulasi 45%",
      description: "Jumlah Votes: 68 Voters",
      color: "bg-danger",
    },
  ];

  return (
    <div className="container mb-5" style={{ width: "1140px", marginTop:"7rem" }}>
      <h1 className="text-center mt-5 fw-bold" style={{ color: "#5E5A00" }}>
        DASHBOARD
      </h1>
      <div className="row mx-auto mt-5 pb-5">
        {cardItems.map((item, index) => (
          <div key={index} className="col">
            <div className="text-center">
              <h1 className={`btn rounded-circle ${item.color} fw-bold`} style={{ border: "3px solid #222" }}>
                {item.noUrut}
              </h1>
            </div>
            <div className={`card ${item.color} p-2`} style={{ boxShadow: "0 4px 8px grey" }}>
              <img src={item.image} className="card-img-top p-1 bg-dark" alt={item.noUrut} height={230} />
              <div className="card-body">
                <h5 className="card-title fw-bold fs-2" style={{ textShadow: "0 0 5px white" }}>
                  {item.title}
                </h5>
                <p className="card-text fw-bold fs-4" style={{ textShadow: "0 0 3px white" }}>
                  {item.akumulasi}
                </p>
                <p className="card-text fw-bold" style={{ textShadow: "0 0 3px white", marginTop: "-20px" }}>
                  {item.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
