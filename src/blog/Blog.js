{/* eslint-disable */}
import React, { Component } from 'react'
import Layout from '../layout/Layout'
export default class Blog extends Component {
  render() {
    return (
	<Layout>
		<div>
			<div className="blog__search-bar">
				<input className="blog__search-bar__input"/>
			</div>
			<div className="blog__b-cards">
				<div className="b-cards__b-card">
					<div className="b-card__date">
						<span className="b-card__date-text"> 25th June 2018 </span>
					</div>
					<div className="b-card__body">
						<div className="b-card__title">
                            This is a Sample Title
						</div>
						<div className="b-card__body2">
                            This is a Sample body
						</div>
						<div className="b-card-buttons">
							<div className="b-card-button">
                                Share
							</div>
							<div className="b-card-button">
                                Read
							</div>
						</div>
					</div>    

				</div>
			</div>
		</div>
	</Layout>
    )
  }
}
