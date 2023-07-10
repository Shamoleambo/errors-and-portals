import './ErrorModal.css'

const ErrorModal = ({ onConfirm }) => {
  return (
    <>
      <div className='backdrop' onClick={onConfirm}></div>
      <div className='errorModal'>
        <p className='message'>Name and Age must not be empty!</p>
        <button onClick={onConfirm}>OK</button>
      </div>
    </>
  )
}

export default ErrorModal
