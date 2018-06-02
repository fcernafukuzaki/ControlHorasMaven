import React, {Component} from 'react';
import { createPortal } from 'react-dom';

class FooterContainer extends Component {

  render() {
    return createPortal(
      this.props.children
      , document.getElementById('footer')
    )
  }
}

export default FooterContainer;