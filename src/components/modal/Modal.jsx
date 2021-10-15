import { useState } from 'react';
import '../menuBar/MenuBar.css';
import Modal from 'react-bootstrap/Modal';

export const CustomModal = ({
  showModal,
  onClose,
  onSubmit
}) => {
  const formInitState = {
    name: '',
    description: ''
  };
  const [formState, setFormState] = useState(formInitState);
  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(formState);
  };

  const handleNameChange = (event) => {
    setFormState({
      ...formState,
      name: event.target.value
    })
  };

  const handleDescChange = (event) => {
    setFormState({
      ...formState,
      description: event.target.value
    })
  };

  return (
    <Modal show={showModal} onHide={() => {
      setFormState(formInitState)
      onClose()
    }}>
      <Modal.Header>
        <h5 className="header channel">NEW CHANNEL</h5>
      </Modal.Header>
      <form onSubmit={handleSubmit}>
        <Modal.Body>
        <input
          type="text"
          className="form-control border-0"
          placeholder="Channel name"
          onChange={(event) => handleNameChange(event)}
          required
        />
        <textarea
          rows="4"
          className="form-control mt-4"
          aria-label="With textarea"
          placeholder="Channel Description"
          onChange={(event) => handleDescChange(event)}
          required
        />
        </Modal.Body>
        <Modal.Footer>
          <button
            type="submit"
            className="btn-primary px-4 py-1 rounded"
          >Save</button>
        </Modal.Footer>
      </form>
    </Modal>
  );
};