"use-strict"
import React,{Component} from 'react';
import {Panel,Col,Button,Row,Well,ButtonGroup,Label} from 'react-bootstrap';
import {connect} from 'react-redux';

export class Cart extends Component{
	render(){
		if(this.props.cart[0]){
			return this.renderCart();
		}else{
			return this.renderEmpty();
		}
	}

	renderEmpty(){
		return (<div></div>);
	}

	renderCart(){
		const {cart} = this.props;
		const cartListItem = cart.map((cartItem,index) =>{
			return(
				<Panel key={index}>
					<Row>
						<Col xs={12} sm={4}>
							<h6>{cartItem.title}</h6><span></span>
						</Col>
						<Col xs={12} sm={2}>
							<h6>usd. {cartItem.price}</h6>
						</Col>
						<Col xs={12} sm={2}>
							<h6> Qty <Label bsStyle="success"></Label></h6>
						</Col>	  
						<Col xs={12} sm={4}>
							<ButtonGroup style={{minWidth:'300px'}}>
								<Button bsStyle="default" bsSize="small">-</Button>
								<Button bsStyle="default" bsSize="small">+</Button>
								<Button bsStyle="danger" bsSize="large">DELETE</Button>
							</ButtonGroup>  	 
						</Col>
					</Row>	  
				</Panel>
			)
		})
		return (
			<Panel header="Cart" bsStyle="primary">
				<Col xs={12} sm={4}>
					{cartListItem}
				</Col>
			</Panel>
		);
	}
}

export default connect(state =>{
	return {
		cart:state.cart.cart
	}
})(Cart)