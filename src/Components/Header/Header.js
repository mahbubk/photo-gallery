import React, { Component } from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';
// import Dropdown from 'reactstrap';
import {
    Navbar,
    Nav,
    NavItem,
} from 'reactstrap';
import { connect } from 'react-redux';



const mapStateToProps = state => {
    return {
        token: state.authentication.token
    }
}

class Header extends Component {

    render() {
        let links = null;

        if (this.props.token === null) {
            links = (
                <Nav className="mr-md-5">
                    <NavItem>
                        <NavLink exact to="/login" className="NavLink">Login</NavLink>
                    </NavItem>
                </Nav>
            )
        } else {
            links = (
                <Nav className="mr-md-5">
                    <NavItem>
                        <NavLink exact to="/" className="NavLink">Photo Gallery</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink exact to="/categoryBtn" className="NavLink">Category</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink exact to="/logout" className="NavLink">Logout</NavLink>
                    </NavItem>
                </Nav>
            )
        }
        return (
            <div className="Navigation">
                <Navbar style={{
                    backgroundColor: "#D70F64",
                    height: "70px",
                }}>

                    {links}
                </Navbar>
            </div>
        )
    }
}

export default connect(mapStateToProps)(Header);