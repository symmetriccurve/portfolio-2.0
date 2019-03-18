import React from 'react'
import Header from '../header/Header'
import Footer from '../footer/Footer'

/* https://stackoverflow.com/questions/36262360/react-router-global-header */

export default ({ children }) => {
  return (
	<div>
		<Header />
		<div className='layout'>
			{children}
		</div>
		<Footer />	
	</div>
  )
}