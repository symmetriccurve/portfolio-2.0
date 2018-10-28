{/* eslint-disable */}
import React, { Component } from 'react'
import Layout from '../layout/Layout'
import CMS from './CMS'
import NetSence from './NetSence'
import AgTech from './AgTech'
import CoHo from './CoHo'
import CitySpace from './CitySpace'
import Vdp from './Vdp'
import SmartParking from './SmartParking';

export default class Blog extends Component {
  render() {
    return (
			<Layout>
				<div>
					{/* <div className="blog__search-bar">
						<input className="blog__search-bar__input" placeholder="Search"/>
					</div> */}
					<div className="blog__b-cards">
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
