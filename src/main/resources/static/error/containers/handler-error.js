import React, {Component} from 'react';
import RegularError from '../components/regular-error';
import Error401 from '../components/Error401';

class HandlerError extends Component {
  constructor(props){
    super(props);
    this.state = {
      handleErrorMessage: '',
      handleError: false,
    }
  }
  
  componentDidCatch(error, info){
    console.log(error);
    console.log(info);
    this.setState({
      handleErrorMessage: error,
      handleError: true,
    })
  }
  
  render() {
    if(this.state.handleError){
      return (
        
        <Error401 />
        
      )
    }
    return (
      this.props.children
    
    )
  }
}

export default HandlerError;