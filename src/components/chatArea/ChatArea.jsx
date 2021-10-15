import { useEffect, useRef } from 'react'

import { Chat } from '../chat/Chat'
import './ChatArea.css'

export const ChatArea = ({
  chats
}) => {
  const bottomDiv = useRef();

  useEffect(() => bottomDiv.current.scrollIntoView({
    behaviour: 'smooth'
  }), [chats]);

  return (
    <div className="chat-area-wrapper d-flex flex-column">
      {chats && chats.map((chat, id) => (<Chat key={id} {...chat} />))}
      <div ref={bottomDiv} />
    </div>
  )
};
