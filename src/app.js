'use-strict';
import {
	createStore,
	applyMiddleware,
	compose
} from 'redux';
import logger from 'redux-logger';
import React from 'react';
import {
	render
} from 'react-dom';
import {Provider} from 'react-redux';

import BookList from './components/pages/BookList';
import reducers from './reducers/index';
import {
	addToCart
} from './actions/cartActions';
import {
	postBook,
	updateBook,
	deleteBook
} from './actions/bookActions';

const middleWare = applyMiddleware(logger);
let store = createStore(reducers,middleWare);


//Post books

render(
	<Provider store={store}>
		<BookList /> 
	</Provider>, document.getElementById('main')
);
