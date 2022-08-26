import React from 'react'

const Addpost = (props) => {
  return (
    <div className='modal'>
      <p>Helllloooooooooo</p>
      <button className='btn btn--alt' onClick={props.onClose}>
        Cancel
      </button>
      <button className='btn' onClick={props.onClose}>
        Confirm
      </button>
    </div>
  )
}

export default Addpost
