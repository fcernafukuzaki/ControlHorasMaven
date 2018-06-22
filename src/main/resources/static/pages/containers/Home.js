import React, {Component} from 'react';
import HomeLayout from'../components/HomeLayout';
//import Categories from'../../categories/components/categories';
//import Related from'../components/related';
//import ModalContainer from'../../widgets/containers/modal';

import Footer from '../components/Footer';
import FooterContainer from './FooterContainer';

import NavBar from '../components/NavBar';
import HandlerError from '../../error/containers/handler-error';

class Home extends Component {
  constructor(props){
    super(props);
    this.state = {
      modalVisible: true,
      value: 'VALOR POR DEFECTO',
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.setInputRef = this.setInputRef.bind(this);
  }
  
  handleOpenModal() {
    this.setState({
      modalVisible: true,
    })
  }
  
  handleCloseModal(event) {
    this.setState({
      modalVisible: false,
    })
  }
  
  
  setInputRef(element) {
    this.input = element;
    console.log(element);
    console.log(this.input);
  }
  handleSubmit(event) {
    //event.preventDefault();
    console.log('submit',this.state.value);
    console.log('submit',this.setInputRef);
    console.log(this.input.value);
    
  }
  handleChange(event) {
   console.log('handleChange',event.target.value);
   this.setState({
      value: event.target.value,
    })
  }
  
  render(){
    return(
		<HandlerError>
			<HomeLayout>
				<NavBar />
				<small className="text-muted">Esto es un layout1</small>
				{
					this.state.modalVisible &&
					<FooterContainer>
						<Footer 
						 setInputRef={this.setInputRef}
						 handleSubmit={this.handleSubmit}
						 handleChange={this.handleChange}
						 value={this.state.value}
						/>
						 
					</FooterContainer>
				}
			</HomeLayout>
		</HandlerError>
    )
  }
}

export default Home;