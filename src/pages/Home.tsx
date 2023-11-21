import NavbarLog from "../components/navbar/Navbar";
import Jumbotron from "../components/Jumbotron";
import BigCard from "../components/card/BigCard";
import SmallCard from "../components/card/SmallCard";
import Rectangle from "../components/Rectangle";
import Footer from "../components/Footer";

export default function Home() {
  const data = [
    {
      id: 1,
      date: Date.now(),
      title: "KPU TETAPKAN 3 MENTOR TERBAIK",
      author: "Gojo",
    },
    {
      id: 2,
      date: Date.now(),
      title: "KPU TERBAIK",
      author: "Sukuna",
    },
    {
      id: 3,
      date: Date.now(),
      title: "KPU ",
      author: "Toji",
    },
    {
      id: 4,
      date: Date.now(),
      title: "KPU TETAPKAN 3 MENTOR TERBAIK",
      author: "Yuji",
    },
    {
      id: 5,
      date: Date.now(),
      title: "KPU TETAPKAN 3 MENTOR TERBAIK",
      author: "Megumi",
    },
  ];

  return (
    <>
      <NavbarLog />
      {/* <Navbar /> */}
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
      <div className="mt-5">
        <Rectangle />
      </div>
      <Footer />
    </>
  );
}
