import './Chat.css'

export const Chat = ({
  text,
  createdAt,
  name,
  avatar
}) => (
  <div className="chat-wrapper d-flex">
    <img src={avatar} alt={name} />
    <div className="chat-content d-flex flex-column">
      <div className="name-date d-flex align-items-center">
        <div className="name">{name}</div>
        <div className="date">{createdAt}</div>
      </div>
      <div className="chat-message">{text}</div>
    </div>
  </div>
);
