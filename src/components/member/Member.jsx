import './Member.css'

export const Member = ({
  avatar,
  uname,
  extra,
}) => (
  <div className="member-wrapper position-relative d-flex align-items-center">
    <img src={avatar} alt={uname} />
    <div className="name">{uname}</div>
    {extra && (
      <div className="position-absolute end-0" >
        <ArrowDown />
      </div>
    )}
  </div>
)

const ArrowDown = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#BDBDBD" className="bi bi-chevron-down" viewBox="0 0 16 16">
    <path
      fillRule="evenodd"
      d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
  </svg>
)
