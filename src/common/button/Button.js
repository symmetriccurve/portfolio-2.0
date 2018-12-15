import React from 'react'

 const Button = ({ label,onClick }) => {
  return (
	<div className='btn'>
		<div className='btn__text' onClick={ onClick }>{label}</div>
	</div>
  )
}

export default Button
