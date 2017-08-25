import React,{Component} from 'react';
import {Grid,Row,Well,Col,Button} from 'react-bootstrap';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {addToCart} from '../../actions/cartActions';



export class BookItem extends Component{
	
	handleClick(){
	const {id,title, description,price,addToCart} = this.props;
	 let book =[{
		 id,
		 title,
		 description,
		 price,
	 }]
	 addToCart(book);	
	}
	
	render(){
		const {id,title, description,price} = this.props;
		return( 
			<Well>
				<Row>
					<Col xs={12}>
						<h6>{title}</h6>
						<h6>{description}</h6>
						<h6>usd. {price}</h6>
						<Button onClick={this.handleClick.bind(this)} bsSize="small" bsStyle="primary">Buy now</Button>
					</Col>
				</Row>
			</Well>
		);
	}
}

export default connect(null,dispatch =>{
	return bindActionCreators({addToCart},dispatch)
})(BookItem)
