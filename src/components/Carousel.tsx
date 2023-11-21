import Carousel from "react-bootstrap/Carousel";
import CarouselImage1 from "/public/carousel/anis.png";
import CarouselImage2 from "/public/carousel/bowo.png";
import CarouselImage3 from "/public/carousel/ganjar.png";

export default function CarouselPaslon() {
  const carouselItems = [
    {
      image: CarouselImage1,
      description: "ANIS",
      label: "KANDIDAT 1",
    },
    {
      image: CarouselImage2,
      description: "BOWO",
      label: "KANDIDAT 2",
    },
    {
      image: CarouselImage3,
      description: "GANJAR",
      label: "KANDIDAT 3",
    },
  ];

  return (
    <div className="py-4" style={{ backgroundColor: "#ababab" }}>
      <div className="container mx-auto pb-5" style={{ maxWidth: 1140 }}>
        <h1 className="text-center fw-bold py-5 " style={{ color: "#5E5A00" }}>
          INFO PASLON
        </h1>
        <div className="d-flex  ">
          <Carousel wrap={true} className=" " style={{ width: 1140 }}>
            {carouselItems.map((item, index) => (
              <Carousel.Item key={index} className="text-center py-5 ">
                <img src={item.image} className="rounded-3 bg-light p-1 shadow" alt="Slide Pertama" style={{ height: 400, width: 650 }} />
                <Carousel.Caption>
                  <div className="d-flex flex-column mx-auto" style={{ width: 638 }}>
                    <span className="fw-bold text-bg-danger rounded-2 fs-4 px-3 ">{item.description}</span>
                    <p className="fw-bold bg-light text-dark py-1 rounded">{item.label}</p>
                  </div>
                </Carousel.Caption>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
}
