import React, {Component} from 'react';

class Footer extends Component {
  render() {
    console.log(this.props);
    return (
      <footer className="footer">
        <div className="container" >
          <div className="footer-copyright">
            <p>© 2018 Copyright - Francisco Cerna Fukuzaki</p>
          </div>
          <form className="Search" onSubmit={this.props.handleSubmit} >
          <input 
           ref={this.props.setInputRef} 
           type="text"
           className="Search-input" 
           defaultValue={this.props.value}
           onChange={this.props.handleChange}
          />
          </form>
        </div>
      </footer>
    
    )
  }
}

export default Footer;