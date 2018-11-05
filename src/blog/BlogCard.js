import React from 'react'

export default ({ post }) => {
  return (
	<div className="b-cards__b-card">
		<div className="b-card__date">
			<span className="b-card__date-text"> {post.pubDate} </span>
		</div>
		<div className="b-card__body">
			<div className="b-card__title">
				<span className="b-card__title-text">
					{post.title}
				</span> 
			</div>
			<div className="b-card__description">
				<span className="b-card__description-text">
					<div dangerouslySetInnerHTML={ { __html: post[ "content:encoded" ] } } />
				</span>
			</div>
			<div className="b-card__buttons">
				{/* <a href="https://medium.com/@beldevikram/this-is-a-test-medium-post-291f4202e141">
					<div className="b-card__button">
              Read
					</div>
				</a> */}
				<a href={  post.link[ 0 ] }>
					<div className="b-card__button">
              Read
					</div>
				</a>
			</div>
		</div>
	</div>
  )
}
