import { useState, useEffect } from 'react'
import { useHistory} from 'react-router-dom'

import { ChatArea } from '../components/chatArea/ChatArea';
import { ChatInput } from '../components/chatInput/ChatInput';
import { MenuBar } from '../components/menuBar/MenuBar';

import { useDispatch, useSelector } from 'react-redux'
import { listChannels, getChannelBYId } from '../actions/channelActions'
import {  sendMessage } from '../actions/messageActions'
import '../App.css';

function HomeScreen() {
  const dispatch = useDispatch()
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const data = useSelector(state => state.channelList)
  const { channel, activeChannel} = data

  const userLogin = useSelector(state => state.userLogin)
  const { userInfo } = userLogin

  const messages = useSelector(state => state.message)
  const { channelMessage } = messages
  const history = useHistory();

  useEffect(() => {
      if (!userInfo) {
          //<Redirect to='/chat'/>
          history.push('/login')
      }
  }, [userInfo])

  useEffect(() => {
    if(channel && channel.length < 1){
       dispatch(listChannels())
    }
     
   },[])

  const sendMessages = (value) => {
    dispatch(sendMessage({"text": value, "channel": activeChannel._id}))
    dispatch(getChannelBYId(activeChannel._id))
  }

  return (
    <div className="app-wrapper position-relative d-flex w-100"> 
      <MenuBar channelLoad={channel} className="d-none d-sm-flex" />
      {showMobileMenu && (
        <div className="mobile-menu-wrapper">
          <MenuBar channelLoad={channel} className="mobile-menu-bar d-flex d-sm-none" />
          <div
            className="close-icon"
            onClick={() => setShowMobileMenu(false)}
          >
            <CloseIcon />
          </div>
        </div>
      )}
      <main className="main-section-wrapper col-12 col-sm-9 h-100">
        <div className="main-header header">
          <div
            className="menu-button d-block d-sm-none"
            onClick={() => setShowMobileMenu(true)}
          >
            <MenuButton />
          </div>
          <span className="channel">{activeChannel.length !== 0 ? activeChannel.name : "Welcome To Gossip"}</span>
        </div>
        <div className="main-content d-flex flex-column">
          {channelMessage && channelMessage.length > 0 && ( <ChatArea chats={channelMessage} /> )}
          {channelMessage && channelMessage.length === 0 && ( <ChatArea chats={chats} /> )}
          <ChatInput onSubmit={value =>sendMessages(value)} />
        </div>
      </main>
    </div>

  );
};

export default  HomeScreen;

const chats = [
  {
    name: 'Welcome Bot',
    createdAt: new Date().toDateString(),
    text: 'Hello 😀, Welcome Here ...... Please Create or Enter any channel to have fun!',
    avatar: "https://media.istockphoto.com/photos/visual-contents-concept-social-networking-service-streaming-video-picture-id1312418309"
  }
];

const MenuButton = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#ffffff" className="bi bi-list" viewBox="0 0 16 16">
    <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
  </svg>
);

const CloseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#ffffff" className="bi bi-x-lg" viewBox="0 0 16 16">
    <path fillRule="evenodd" clipRule="evenodd" d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z" fill="#ffffff"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z" fill="#ffffff"/>
  </svg>
)
