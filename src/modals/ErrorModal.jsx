import { createPortal } from 'react-dom'
import './ErrorModal.css'

const Backdrop = ({ onConfirm }) => {
  return <div className='backdrop' onClick={onConfirm}></div>
}

const OverlayModal = ({ onConfirm }) => {
  return (
    <div className='errorModal'>
      <p className='message'>Name and Age must not be empty!</p>
      <button onClick={onConfirm}>OK</button>
    </div>
  )
}

const ErrorModal = ({ onConfirm }) => {
  return (
    <>
      {createPortal(
        <Backdrop onConfirm={onConfirm} />,
        document.getElementById('backdrop-root')
      )}
      {createPortal(
        <OverlayModal onConfirm={onConfirm} />,
        document.getElementById('overlay-root')
      )}
    </>
  )
}

export default ErrorModal
