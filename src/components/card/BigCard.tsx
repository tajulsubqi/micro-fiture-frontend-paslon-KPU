import { useNavigate } from 'react-router-dom'

export default function BigCard() {
  const navigate = useNavigate()

  return (
    <div
      onClick={() => navigate('/detail')}
      className="card d-flex"
      style={{ width: '756px', cursor: 'pointer' }}
    >
      <img
        className="rounded-2"
        src="/public/article.png"
        alt="article"
        height={422}
      />
      <div
        className="card-img-overlay d-flex justify-content-end flex-column"
        style={{
          height: '422px',
          background:
            'linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 100%)',
        }}
      >
        <div className="pb-2">
          <span className="bg-danger text-bg-dark p-1 rounded-2">
            SENIN, 03 JAN 2023
          </span>
        </div>
        <div className="pb-3" style={{ lineHeight: '5px' }}>
          <h3 className="text-white fw-bolder">
            KPU TETAPKAN 3 MENTOR TERBAIK
          </h3>
          <span className="text-white">Super Admin</span>
        </div>
      </div>
    </div>
  )
}
