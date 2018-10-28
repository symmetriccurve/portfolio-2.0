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
                Tutorial walks you through step by step to integrate react in any webapp Tutorial walks you through step by step to integrate react in any webapp
				</span>
			</div>
			<div className="b-card__buttons">
				<a href="https://medium.com/@beldevikram/this-is-a-test-medium-post-291f4202e141">
					<div className="b-card__button">
                        Read
					</div>
				</a>
				<a href="https://medium.com/@beldevikram/this-is-a-test-medium-post-291f4202e141">
					<div className="b-card__button">
                     Share
					</div>
				</a>
			</div>
		</div>
	</div>
  )
}
