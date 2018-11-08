//{/*eslint-disable */}
import React, { PropTypes } from 'react'

export default function TILCard({ learning }) {
  return (
	<div className='tilcard'>
		<div className='tilCard-content'>
			{learning}
			Hello World
		</div>  
	</div>
  )
}

// TILCard.propTypes = {
//   learning: PropTypes.string.isRequired
// }
