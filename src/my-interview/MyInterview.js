import React, { Component } from 'react';
import Layout from '../layout/Layout';
import InterviewCard from './my-interview-card/InterviewCard';
import ShowContent from '../hoc/ShowContent';

const MyInterview =  ({ data }) => {
  return (
	<Layout>
		{
			data.map(interview=>{
				return <InterviewCard interview={ interview }/>
			})
		}
	</Layout>
  )
}

export default ShowContent(MyInterview,'https://portfolio-18e3f.firebaseio.com/my-interview.json')
