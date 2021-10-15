import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { listChannels, createChannel, searchChannel,selectChannel, getChannelBYId } from '../../actions/channelActions'
import { getMessageByChannelId } from '../../actions/messageActions'

import { MembersList } from '../membersList/MembersList';
import { ChannelIntro } from '../channelIntro/ChannelIntro';
import '../member/Member.css'
import { ChannelsList } from '../channelsList/ChannelsList'
import { SearchInput } from '../searchInput/SearchInput';
import { CustomModal } from '../modal/Modal';
import { Dropdown } from 'react-bootstrap';
import { logout } from '../../actions/userActions'
import './MenuBar.css';

export const MenuBar = ({ className, channelLoad }) => {
  const dispatch = useDispatch()
  const [channels, setChannels] = useState(true);
  const [searchword, setSearch] = useState('');
  const [showModal, setShowModal] = useState(false);

  const userLogin = useSelector(state => state.userLogin)
  const { error, loading, userInfo } = userLogin

  const data = useSelector(state => state.channelList)
  const { activeChannel, filterChannel } = data

  useEffect(() => {
   if(channelLoad && channelLoad.length < 1){
      dispatch(listChannels())
   }
    
  },[])

  const membersHandler = (e) => {
    memberList = [e.members]
    name = e.name
    description = e.description
    dispatch(getChannelBYId(e._id))
    dispatch(getMessageByChannelId(e._id))
    setChannels(false)
    dispatch(selectChannel(e))
    
}

const searchHandler = (e) => {
  dispatch(searchChannel(e))
  
}

const saveChannel = (value) => {
  dispatch(createChannel(value))
  setShowModal(false)
}

  const logoutHandler = (e) => {
    dispatch(logout())
}

  return (
    <aside className={`aside-section-wrapper col-sm-3 h-100 ${className || ''}`}>
      <div className="aside-header header d-flex">
        {
          channels
            ? <div className="channels-header-wrapper">
              <span className="channel">Channels</span>
              <button
                data-bs-toggle="modal"
                className="plus-wrapper"
                data-bs-target="#staticBackdrop"
                onClick={() => setShowModal(true)}
              >
                <PlusSign />
              </button>
            </div>
            : <div className="arrow-wrapper" onClick={() => (setChannels(true))}>
              <div className="arrow"><ArrowLeft /></div>
              <span className="channel">All channels</span>
            </div>
        }
      </div>
      <CustomModal
        showModal={showModal}
        onClose={() => setShowModal(false)}
        onSubmit={(values) => saveChannel(values)}
      />
      <div className="aside-content">
        {
          channels
            ? <div>
              <SearchInput onChange={(e) => searchHandler(e)} />
              <ChannelsList channel={filterChannel.length > 0 ? filterChannel : channelLoad} onSelect={(chl) =>setChannels(false), membersHandler} />
            </div>
            : <>
              <ChannelIntro name={name} description={description}/>
              <MembersList memberList={memberList[0]}/>
            </>
        }
      </div>
      <div className="mt-auto aside-footer">
        <Dropdown>
          <Dropdown.Toggle id="dropdown-basic">
          <div className="member-wrapper position-relative d-flex align-items-center">
          <img src={userInfo && userInfo.data.avatar} alt={userInfo && userInfo.data.fullName} />
          <div className="name">{userInfo && userInfo.data.fullName}</div>
            <div className="ml-auto" >
              <ArrowDown />
            </div>
        </div>
          </Dropdown.Toggle>
          <Dropdown.Menu id="dropdown-menu">
            <Dropdown.Item href="#">Profile</Dropdown.Item>
            <Dropdown.Item href="#">Tweeter</Dropdown.Item>
            <hr/>
            <Dropdown.Item
              className="logout"
              onClick={() => logoutHandler() }
            >
              Logout
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </aside>
  );
};

export const image = 'https://media.istockphoto.com/photos/visual-contents-concept-social-networking-service-streaming-video-picture-id1312418309';

const ArrowLeft = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-left" viewBox="0 0 16 16">
    <path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
  </svg>
);

const PlusSign = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#ffffff" className="bi bi-plus-lg" viewBox="0 0 16 16">
    <path fillRule="evenodd" clipRule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z" fill="#ffffff"/>
  </svg>
)

const ArrowDown = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#BDBDBD" className="bi bi-chevron-down" viewBox="0 0 16 16">
    <path
      fillRule="evenodd"
      d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
  </svg>
)

var memberList = [
  { name: 'Philip Oke', image },
];

var description = "";
var name = "";

