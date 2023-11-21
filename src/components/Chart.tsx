import React, { useState } from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import Card from "react-bootstrap/Card";
import VoteModal from "./modals/voteModal";

interface Chart {
  show: boolean;
  onHide: () => void;
  handleVote: () => void;
}

const Chart: React.FC<Chart> = () => {
  ChartJS.register(ArcElement, Tooltip, Legend);

  const [showVoteModal, setShowVoteModal] = useState(false);

  const handleOpenVoteModal = () => {
    setShowVoteModal(true);
  };

  const handleCloseVoteModal = () => {
    setShowVoteModal(false);
  };

  const handleVote = () => {
    handleCloseVoteModal();
  };

  const data = {
    labels: ["ANIS", "BOWO", "GANJAR"],
    datasets: [
      {
        data: [105, 45, 35],
        backgroundColor: ["#198754", "#0d6efd", "#dc3545"],
        borderColor: ["green", "blue", "red"],
        borderWidth: 1,
      },
    ],
  };

  // const candidates = ["ANIS", "BOWO", "GANJAR"];
  const candidates = [
    {
      candidate: "ANIS",
      color: "bg-success",
    },
    {
      candidate: "BOWO",
      color: "bg-primary",
    },
    {
      candidate: "GANJAR",
      color: "bg-danger",
    },
  ];

  // Mengurutkan kandidat berdasarkan data dalam urutan menurun
  const sortedCandidates = candidates.slice().sort((a, b) => {
    const indexA = data.labels.indexOf(a.candidate);
    const indexB = data.labels.indexOf(b.candidate);
    return data.datasets[0].data[indexB] - data.datasets[0].data[indexA];
  });

  return (
    <div className="Container my-5 mx-auto" style={{ width: 1140 }}>
      <VoteModal show={showVoteModal} onHide={handleCloseVoteModal} handleVote={handleVote} />
      <h1 className="text-center fw-bold mb-5" style={{ color: "#5E5A00" }}>
        INFO PEMILU TERUPDATE
      </h1>
      <div className="d-flex justify-content-around">
        <div className="" style={{ width: 340 }}>
          <h2 className="text-center fw-bold">Hasil :</h2>
          <Pie data={data} />
        </div>
        <div className="d-flex flex-column justify-content-center align-content-center mt-5 w-50 fw-bold">
          {sortedCandidates.map((item, index) => (
            <Card key={index} body className={`mt-3 ${item.color} text-white text-center fs-4`}>
              {item.candidate}
            </Card>
          ))}
        </div>
      </div>
      <div className="d-flex justify-content-center mt-5">
        <button onClick={handleOpenVoteModal} className="btn text-white fw-bold fs-5 px-4" style={{ backgroundColor:"#5E5A00" }}>
          MASUKKAN PILIHANMU
        </button>
      </div>
    </div>
  );
};

export default Chart;
