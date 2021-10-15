import './ChannelsList.css';

export const ChannelsList = ({
  channel,
  onSelect,
}) => (
  <div className="channels-list-wrapper">
    {channel?.map(item => (
      <div key={item} className="channel-wrapper" onClick={() => onSelect(item)}>
        <div className="channel-initials">{getChannelInitials(item['name'])}</div>
        <div className="header">{item['name'].toUpperCase()}</div>
      </div>
    ))}
  </div>
);

const getChannelInitials = (channel) => {
  return channel
    .split(' ')
    .reduce((accumulator, channel) => accumulator + channel[0].toUpperCase(), '')
}
