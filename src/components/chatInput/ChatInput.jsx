import { useRef } from 'react';
import './ChatInput.css';

export const ChatInput = ({
  onSubmit
}) => {
  const inputRef = useRef();
  
  const handleSubmit = (event) => {
    event.preventDefault();

    if (inputRef.current.value) {
      onSubmit(inputRef.current.value);
    }
  };

  return (
    <form
      className="chat-input-group-wrapper mt-auto"
      onSubmit={(event) => handleSubmit(event)}
    >
      <div className="input-group mb-3 mt-auto">
        <input
          ref={inputRef}
          type="text"
          className="form-control border-0"
          placeholder="Type a message here"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />
        <div className="input-group-append">
          <button
            className="btn btn-primary"
            type="submit"
          ><InputArrow /></button>
        </div>
      </div>
    </form>
  )
};

const InputArrow = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-symmetry-horizontal" viewBox="0 0 16 16">
    <path d="M13.5 7a.5.5 0 0 0 .24-.939l-11-6A.5.5 0 0 0 2 .5v6a.5.5 0 0 0 .5.5h11zm.485 2.376a.5.5 0 0 1-.246.563l-11 6A.5.5 0 0 1 2 15.5v-6a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 .485.376zM11.539 10H3v4.658L11.54 10z"/>
  </svg>
);
