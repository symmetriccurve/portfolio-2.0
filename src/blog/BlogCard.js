import React from 'react'

export default ({ post }) => {
  return (
	<div className="b-cards__b-card">
		<div className="b-card__date">
			<span className="b-card__date-text"> 29th June 2018 </span>
		</div>
		<div className="b-card__body">
			<div className="b-card__title">
				<span className="b-card__title-text">
					{post.title}
				</span> 
			</div>
			<div className="b-card__description">
				<span className="b-card__description-text">
					{post.content.subtitle}
				</span>
			</div>
			<div className="b-card__buttons">
				{/* <a href="https://medium.com/@beldevikram/this-is-a-test-medium-post-291f4202e141">
					<div className="b-card__button">
              Read
					</div>
				</a> */}
				<a href={ `https://medium.com/@beldevikram/${ post.uniqueSlug }` }>
					<div className="b-card__button">
              Read
					</div>
				</a>
			</div>
		</div>
	</div>
  )
}
