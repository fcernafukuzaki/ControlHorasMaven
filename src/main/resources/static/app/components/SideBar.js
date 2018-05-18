import React from 'react'
import { Link } from 'react-router'


export default class SideBar extends React.Component {
    
    render() {
        return (
        	<div className="sidebar" data-color="purple">
	            <div className="sidebar-wrapper">
	                <div className="logo">
	
	                    <Link to="/" className="simple-text">
	                        EXAMPLE
	                    </Link>
	
	                </div>
	
	                <ul className="nav">
	                    <li>
	                        <Link to="/products">
	                            <i className="pe-7s-ribbon"></i>
	                            Produits
	                        </Link>
	                    </li>
	
	                    <li>
	                        <Link to="/products/new">
	                            <i className="pe-7s-ribbon"></i>
	                            Add Product
	                        </Link>
	                    </li>
	
	                </ul>
	            </div>
	        </div>
		)
    }
}