"use-strict"
import React,{Component} from 'react';
import {Panel,Well,Button,FormControl,FormGroup,ControlLabel} from 'react-bootstrap';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {findDOMNode} from 'react-dom';

import {postBook} from '../../actions/bookActions';


export class BookForm extends Component{
	handleClick(){
		let title = findDOMNode(this.refs.title).value;
		let description = findDOMNode(this.refs.description).value;
		let price = findDOMNode(this.refs.price).value;

		this.props.postBook([{
			title,
			description,
			price
	  }]);
	}
	
	render(){
		return(
			<Well>
				<Panel>
					<FormGroup controlId="title"> 
						<ControlLabel>Title</ControlLabel>
						<FormControl
							autoFocus
							type="text"
							placeholder="Enter Title"
							ref="title"/>
					</FormGroup>
					<FormGroup controlId="description"> 
						<ControlLabel>Description</ControlLabel>
						<FormControl
							type="text"
							placeholder="Enter Description"
							ref="description"/>
					</FormGroup>
					<FormGroup controlId="price"> 
						<ControlLabel>Price</ControlLabel>
						<FormControl
							type="text"
							placeholder="Enter Price"
							ref="price"/>
					</FormGroup>
					<Button onClick={this.handleClick.bind(this)} bsSize="small" bsStyle="primary">Save book</Button>
				</Panel>
			</Well>
		);
	}
}


export default connect(null,(dispatch)=>{
	return bindActionCreators({postBook},dispatch);
})(BookForm);