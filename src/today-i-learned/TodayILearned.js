//{/*eslint-disable */}
import React, { Component } from 'react';
import TILCard from './TILCard';
import Layout from '../layout/Layout';

const learnings = [ 'this','that','happen','to','be','same' ]

export default () => {
  return (
	<Layout>
		<div className='til'>
			{
				learnings.map(eachLearning=> {
				return <TILCard key={ eachLearning } learning={ eachLearning }/>
				})
			}
		</div>
	</Layout>
  )
}
