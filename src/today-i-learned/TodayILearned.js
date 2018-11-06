//{/*eslint-disable */}
import React, { Component } from 'react';
import TILCard from './TILCard';
import Layout from '../layout/Layout';

export default () => {
  return (
	<Layout>
		<div className='til'>
			{
				[ 1,2,3,5,6 ].map(eachLearning=> {
				return <TILCard key={ eachLearning } learning={ eachLearning }/>
				})
			}
		</div>
	</Layout>
  )
}
