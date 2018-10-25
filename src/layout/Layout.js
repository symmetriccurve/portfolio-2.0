import React from 'react'
import Header from '../header/Header'

/* https://stackoverflow.com/questions/36262360/react-router-global-header */

export default ({ children }) => {
  return (
	<div className='layout'>
		<Header />
		{children}
	</div>
  )
}