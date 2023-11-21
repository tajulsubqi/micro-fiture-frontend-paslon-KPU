import { Modal } from "react-bootstrap";
import noUrut1 from "/public/carousel/anis.png";
import noUrut2 from "/public/carousel/bowo.png";
import noUrut3 from "/public/carousel/ganjar.png";
import Button from "react-bootstrap/Button";
import "./vote.css";

interface VoteModal {
  show: boolean;
  onHide: () => void;
  handleVote: () => void;
}

const VoteModal: React.FC<VoteModal> = ({ show, onHide }) => {
  const cardItems = [
    {
      image: noUrut1,
      title: "ANIS",
      noUrut: "1",
      visi: "Membangun Negara Yang Makmur",
      description: "Kita Akan Makan Sepuasnya",
      // color: "bg-light",
    },
    {
      image: noUrut2,
      title: "BOWO",
      noUrut: "2",
      visi: "Setiap Hari Ada Update Anime",
      description: "Akan Membiarkan Warga Tetap Keren",
      // color: "bg-ligth",
    },
    {
      image: noUrut3,
      title: "GANJAR",
      noUrut: "3",
      visi: "Ayo Semua Kita Turu",
      description: "Membuat Warga Konoha Paling Maju",
      // color: "bg-light",
    },
  ];
  return (
    <Modal centered show={show} onHide={onHide}>
      <div className="container bg-body-secondary rounded pb-4" style={{ width: 900, marginLeft: "-190px" }}>
        <h3 className="text-center fw-bold pt-4 " style={{ color: "#5E5A00" }}>
          MASUKKAN PILIHAN MU
        </h3>
        <div className="row mx-auto mt-5 pb-5">
          {cardItems.map((item, index) => (
            <div key={index} className="col">
              <div className="text-center">
                <h1 className={`btn rounded-circle ${item.color} fw-bold`} style={{ border: "3px solid #222" }}>
                  {item.noUrut}
                </h1>
              </div>
              <div className={`card-vote card p-2`} style={{ boxShadow: "0 4px 8px grey" }}>
                <img src={item.image} className="card-img-top p-1 bg-dark" alt={item.noUrut} height={180} />
                <div className="card-body">
                  <h5 className="card-title fw-bold fs-4" style={{ textShadow: "0 0 5px white" }}>
                    {item.title}
                  </h5>
                  <p style={{ fontSize: "14px" }}>{item.visi}</p>
                  <p className="card-text fw-bold" style={{ textShadow: "0 0 3px white" }}>
                    Partai Pengusung:
                  </p>
                  <p className="card-text " style={{ fontSize: "13px", textShadow: "0 0 3px white", marginTop: "-20px" }}>
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center d-flex justify-content-center gap-4">
          <Button className="btn-1 success fw-bold">RESET</Button> <Button className="btn-1 success fw-bold">SUBMIT</Button>{" "}
        </div>
      </div>
    </Modal>
  );
};

export default VoteModal;
