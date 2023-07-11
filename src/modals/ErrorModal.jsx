import { createPortal } from 'react-dom'
import './ErrorModal.css'

const Backdrop = ({ onConfirm }) => {
  return <div className='backdrop' onClick={onConfirm}></div>
}

const OverlayModal = ({ onConfirm, errorType }) => {
  return (
    <>
      {errorType === 'empty' && (
        <div className='errorModal'>
          <p className='message'>Name and Age must not be empty!</p>
          <button onClick={onConfirm}>OK</button>
        </div>
      )}
      {errorType === 'age' && (
        <div className='errorModal'>
          <p className='message'>Age must be bigger than 0</p>
          <button onClick={onConfirm}>OK</button>
        </div>
      )}
    </>
  )
}

const ErrorModal = ({ onConfirm, errorType }) => {
  return (
    <>
      {createPortal(
        <Backdrop onConfirm={onConfirm} />,
        document.getElementById('backdrop-root')
      )}
      {createPortal(
        <OverlayModal onConfirm={onConfirm} errorType={errorType} />,
        document.getElementById('overlay-root')
      )}
    </>
  )
}

export default ErrorModal
