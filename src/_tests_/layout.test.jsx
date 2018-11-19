import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import createStore from 'redux-mock-store'
import {Provider} from 'react-redux'
import TestRenderer from'react-test-renderer';
import renderer from 'react-test-renderer'

import {About} from '../about/about'

describe('testing Layout (toolbar) component', () => {

	it('test render layout component', async () => {
		// const initialState = {
		// 	news: []
		// };
		// const mockStore = createStore([]);
		// const store = mockStore(initialState);

		// const container = await renderer
		// 	.create(<Provider store={store}>
		// 			<Router>
		// 				<About />
		// 			</Router>
		// 		</Provider>
		// 		, {
		// 			createNodeMock: ({type}) => document.createElement(type)
		// 		});
		const instance=TestRenderer.create(
			<About/>
		);

		// const testInstance = container.getInstance();
		// testInstance.someMethod();
		// expect(container.toJSON()).toMatchSnapshot();
		expect(instance.toJSON()).toMatchSnapshot();
	});
});