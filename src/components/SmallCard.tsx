import { useNavigate } from "react-router-dom";

export default function SmallCard() {
  const navigate = useNavigate();

  return (
    <div onClick={() => navigate("/detail")} className="card" style={{ width: "367px", height:"422px", cursor:"pointer" }}>
      <img src="/public/article.png" className="card-img-top" alt="..." height={300} />
      <div className="p-2">
        <div className="py-2">
          <span className="bg-danger text-bg-dark rounded-2 p-1 ">SENIN, 03 JAN 2023</span>
        </div>
        <h3 className="fw-bold">KPU TETAPKAN 3 MENTOR TERBAIK</h3>
        <p className="">Super Admin</p>
      </div>
    </div>
  );
}
