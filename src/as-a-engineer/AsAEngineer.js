{/*eslint-disable */}
import React, { Component } from 'react';
import Layout from '../layout/Layout';

export default class Traning extends Component {

	render() {
		return (
			<Layout>
				<div className='train'>
					<p className='train__details'>
						If this content is seen, the travis build and deployed changes successfully 
					</p>
				</div>
			</Layout>
		)
	}
}
