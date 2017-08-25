"use-strict"
//smart component pass down props received from redux to dumb components

import React,{Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Grid,Row,Col,Button} from 'react-bootstrap';


import {getBooks} from '../../actions/bookActions';
import BookItem from './BookItem';
import BookForm from './BookForm';
import Cart from './Cart';

"use-strict"
export class BookList extends Component{
	componentDidMount(){
		this.props.getBooks();
	}
	render(){
		const {books} = this.props;
		const bookList = books.map((book,index) => {
			return(
				<Col key={index} xs={12} sm={6} md={4}>
					<BookItem {...book} />
				</Col>
			)
		})
		return(
			<Grid>
				<Row>
					<Cart />
				</Row>
				<Row>
					<Col xs={12} sm={6}>
						<BookForm />
					</Col>	
					{bookList}
				</Row>
			</Grid>	
		);
	}
}




export default connect( state => {
	return {
		books:state.books.books
	}
},(dispatch)=>{
	return bindActionCreators({getBooks},dispatch)
})(BookList);