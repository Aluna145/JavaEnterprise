// import {sum, isNull} from '../helpers';
//
// describe('testing sum', () => {
// 	it('a + b = 2', () => {
// 		expect(sum(1, 1)).toBe(2);
// 	});
// });
//
//
// describe('testing isNull', () => {
// 	it('isNull = false', () => {
// 		expect(isNull(1)).toBeFalsy();
// 	});
//
// 	it('isNull = true val = null', () => {
// 		expect(isNull(null)).toBeTruthy();
// 	});
//
// 	it('isNull = true val = undefine', () => {
// 		expect(isNull()).toBeTruthy();
// 	});
// });


import reducer from '../data/reducer';
import * as actions from '../data/action-creators'
import * as types from '../data/action-types';

// import {UPDATE_POST_SUCCESS} from '../actions/posts/updatePost';

import expect from 'expect';

// import getPostMock from '../mocks/getPostMock';


describe('get action', () => {

	// it('should return the initial state', () => {
	// 	expect(reducer(undefined, {})).toEqual({});
	// });
	it('deletion success', () => {
		const city = 'Paris';
		// const expectedAction = {
		// 	type: types.TYPES.DELETE_CARD,
		// 	data: city
		// };
		expect(actions.deleteCard(city)).toBeTruthy();
	})

	// it('should handle LOAD IMAGE', () => {
	//
	// 	const startAction = {
	// 		type: actions.TYPES.LOAD_IMAGE
	// 	};
	//
	// 	// it's empty on purpose because it's just starting to fetch posts
	//
	// 	expect(reducer({}, startAction)).toEqual({});
	//
	// });

	//
	// it('should handle GET_POST_SUCCESS', () => {
	//
	// 	const successAction = {
	//
	// 		type: actions.GET_POST_SUCCESS,
	//
	// 		post: getPostMock.data, // important to pass correct payload, that's what the tests are for ;)
	//
	// 	};
	// 	expect(reducer({}, successAction)).toEqual(getPostMock.data);
	// });


	// it('should handle UPDATE_POST_SUCCESS', () => {
	//
	// 	const updateAction = {
	//
	// 		type: UPDATE_POST_SUCCESS,
	//
	// 		post: getPostMock.data,
	//
	// 	};
	//
	// 	expect(reducer({}, updateAction)).toEqual(getPostMock.data);
	//
	// });
	//
	//
	// it('should handle GET_POST_FAIL', () => {
	//
	// 	const failAction = {
	//
	// 		type: actions.GET_POST_FAIL,
	//
	// 		error: {success: false},
	//
	// 	};
	//
	// 	expect(reducer({}, failAction)).toEqual({error: {success: false}});
	//
	// });

});