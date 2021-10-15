import './ChannelIntro.css'

export const ChannelIntro = ({
  name,
  description,
}) => (
  <div className="channel-intro-wrapper">
    <div className="header">{name}</div>
    <div className="about">{description}</div>
  </div>
)