import React from 'react'

export default ({ label,isActive,onClick }) => {
  return (
	<div>
		<button onClick={ ()=>onClick() } className={ isActive?"button":"button--inactive" }>
            Click Me
		</button>
	</div>
  )
}
