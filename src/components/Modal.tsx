import React from 'react';
import EventForm from './EventForm';

interface ModalProps {
  id?: string; // Change to single string as EventForm expects a single id
  open: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = (props) => {
  if (!props.open) return null;

  return (
    <div 
      onClick={props.onClose} 
      className='fixed w-full h-full flex overflow-auto z-50 justify-center items-center bg-black bg-opacity-50'
    >
      <div
        className='w-full max-w-2xl bg-white shadow-xl rounded p-4'
        onClick={(e) => e.stopPropagation()}
      >
        <div className="w-full flex flex-col">
          <EventForm id={props.id} onClose={props.onClose} /> {/* Pass the onClose prop */}
        </div>
      </div>
    </div>
  );
}

export default Modal;
