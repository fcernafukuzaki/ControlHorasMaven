import React, {Component} from 'react'
import {createPortal} from 'react-dom'

class Footer extends Component {
  render() {
    return createPortal(
      <footer className="footer">
        <div className="container" >
          <div className="footer-copyright">
            <p>© 2018 Copyright</p>
          </div>
        </div>
      </footer>
    ,
    document.getElementById('footer')
    )
  }
}

export default Footer;