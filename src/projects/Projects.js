import React, { Component } from 'react'
import Layout from '../layout/Layout'
import CMS from './CMS'
import NetSence from './NetSence'
import AgTech from './AgTech'
import CoHo from './CoHo'
import CitySpace from './CitySpace'
import Vdp from './Vdp'
import SmartParking from './SmartParking';
import ProConnect from './ProConnect';
import Button from '../common/button/Button'

import
{
	NavLink
} from 'react-router-dom'

/* 
Download Links
Doc: https://docs.google.com/document/d/1rQUigIKVexwfT-YBXisBr0cjIh50uHNSaKS2MZ1LC00/export?format=doc
Pdf: 
https://docs.google.com/document/d/1rQUigIKVexwfT-YBXisBr0cjIh50uHNSaKS2MZ1LC00/export?format=pdf

*/
export default class Blog extends Component
{
	render()
	{
		return (
			<Layout>
				<div className='projects'>
					{/* <div className="blog__search-bar">
						<input className="blog__search-bar__input" placeholder="Search"/>
					</div> */}
					<div className='projects__header'>
						<NavLink to='/pet-projects'>
							<Button label={ "Other Interests" } onClick={ () => { } } />
						</NavLink>
						<div className='header__resume'>
							<a href='https://docs.google.com/document/d/1rQUigIKVexwfT-YBXisBr0cjIh50uHNSaKS2MZ1LC00/export?format=pdf'>
								<Button label={ "Download Resume" } onClick={ () => { } } />
							</a>
						</div>
					</div>
					<div className="projects__p-cards">
						<ProConnect />
						<CMS />
						<NetSence />
						<AgTech />
						<CoHo />
						<CitySpace />
						<Vdp />
						<SmartParking />
					</div>
				</div>
			</Layout>
		)
	}
}
