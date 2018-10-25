import React, { Component } from 'react';
import LaunchPage from './launchPage/LaunchPage';
import Header from './header/Header';

const App = () => {
    return (
	<div className="App">
		<Header />
		<LaunchPage />
	</div>
    );
}

export default App;
