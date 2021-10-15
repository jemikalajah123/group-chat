import { useRef } from 'react';
import './SearchInput.css';

export const SearchInput = ({
  onSubmit, onChange
}) => {
  const inputRef = useRef();
  
  const handleSubmit = (event) => {
    event.preventDefault();

    if (inputRef.current.value) {
      // onSubmit(inputRef.current.value);
      onChange(inputRef.current.value);
    }
  };

  return (
    <form
      className="search-input-group-wrapper mt-auto"
      onSubmit={(event) => handleSubmit(event)}
    >
      <div className="input-group mb-3 mt-auto position-relative">
        <div className="search-icon position-absolute"><SearchIcon /></div>
        <input
          ref={inputRef}
          type="text"
          onChange= {(event) => handleSubmit(event)}
          className="form-control border-0 pl-5"
          placeholder="Search"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />
      </div>
    </form>
  )
};

const SearchIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" fill="#ffffff" className="bi bi-search" viewBox="0 0 16 16">
    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
  </svg>
);
