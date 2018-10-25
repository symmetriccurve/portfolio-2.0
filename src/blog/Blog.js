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
                            <span className="b-card__title-text">
                                Integrate React Into any web app using NPM
                            </span> 
						</div>
						<div className="b-card__description">
                            <span className="b-card__description-text">
                                Tutorial walks you through step by step to integrate react in any webapp Tutorial walks you through step by step to integrate react in any webapp
                            </span>
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
                <div className="b-cards__b-card">
					<div className="b-card__date">
						<span className="b-card__date-text"> 29th June 2018 </span>
					</div>
					<div className="b-card__body">
						<div className="b-card__title">
                            <span className="b-card__title-text">
                                Integrate React Into any web app using NPM
                            </span> 
						</div>
						<div className="b-card__description">
                            <span className="b-card__description-text">
                                Tutorial walks you through step by step to integrate react in any webapp Tutorial walks you through step by step to integrate react in any webapp
                            </span>
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
                <div className="b-cards__b-card">
					<div className="b-card__date">
						<span className="b-card__date-text"> 29th June 2018 </span>
					</div>
					<div className="b-card__body">
						<div className="b-card__title">
                            <span className="b-card__title-text">
                                Integrate React Into any web app using NPM
                            </span> 
						</div>
						<div className="b-card__description">
                            <span className="b-card__description-text">
                                Tutorial walks you through step by step to integrate react in any webapp Tutorial walks you through step by step to integrate react in any webapp
                            </span>
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
