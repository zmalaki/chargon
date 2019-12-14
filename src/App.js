import React, { Component } from 'react';
import './App.css';
import Autocomplete from './Users/Autocomplete';

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			data: [ 'تهران', 'همدان', 'زنجان', 'قزوین', 'رشت', 'اهواز', 'سمنان', 'شیراز', 'کرج', 'گرمدره' ],
			placeholder: 'جستجو کنید',
		};
	}

	render() {
		return (
			<div>
				<Autocomplete suggestions={this.state.data} placeholder={this.state.placeholder} />
			</div>
		);
	}
}

export default App;
