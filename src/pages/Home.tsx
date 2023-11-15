// import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Jumbotron from "../components/Jumbotron";
import BigCard from "../components/BigCard";
import SmallCard from "../components/SmallCard";
import Rectangle from "../components/Rectangle";
import Footer from "../components/Footer";

export default function Home() {
  const data = [
    {
      date: Date.now(),
      title: "KPU TETAPKAN 3 MENTOR TERBAIK",
      author: "super Admin",
    },
    {
      date: Date.now(),
      title: "KPU TETAPKAN 3 MENTOR TERBAIK",
      author: "super Admin",
    },
    {
      date: Date.now(),
      title: "KPU TETAPKAN 3 MENTOR TERBAIK",
      author: "super Admin",
    },
    {
      date: Date.now(),
      title: "KPU TETAPKAN 3 MENTOR TERBAIK",
      author: "super Admin",
    },
    {
      date: Date.now(),
      title: "KPU TETAPKAN 3 MENTOR TERBAIK",
      author: "super Admin",
    },
  ];

  return (
    <>
      <Navbar />
      <Jumbotron />
      <div className="container-fluid mt-5" style={{ maxWidth: "1165px" }}>
        <div className="row g-3">
          {data.map((post, index) => (
            <div key={index} className={index === 0 ? "col-lg-8" : "col-lg-4"}>
              {index === 0 ? <BigCard /> : <SmallCard />}
            </div>
          ))}
        </div>
      </div>
      <Rectangle />
      <Footer />
    </>
  );
}
