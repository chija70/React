import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import {Navbar,NavbarBrand,Jumbotron,NavbarToggler, Collapse,Nav, NavLink,NavItem} from 'reactstrap'
import {Link} from 'react-router-dom'


export default class Cour extends Component{
    constructor(){
        super()
        this.state={
            isOpen:false,
        }
        this.toggleNow = this.toggleNow.bind(this)
    }

    toggleNow(){
        this.setState({isOpen: !this.state.isOpen});
    }

    render(){


return(
            <div>
                <Navbar light expand="xl">
                    <div className="container">
                        <NavbarToggler onClick={this.toggleNav}>toggle</NavbarToggler>
                                <NavLink className="nav-link"  to='/home'><span className="fa fa-home fa-lg"></span> Home</NavLink>
                        <span className="fa fa-home fa-lg"></span>
                        <span className="fa fa-home fa-lg"></span>
                        <i className="fa fa-apple fa-lg">apple is </i>
                        <i className="fa fa-spinner fa-spin">spinner</i>
                        <NavbarBrand className="mr-auto" href="/"><img src='assets/images/logo.png' height="30" width="41" alt='Ristorante Con Fusion' /></NavbarBrand>
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                            <NavItem>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to='/aboutus'><span className="fa fa-info fa-lg"></span> About Us</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link"  to='/menu'><span className="fa fa-list fa-lg"></span> Menu</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to='/contactus'><span className="fa fa-address-card fa-lg"></span> Contact Us</NavLink>
                            </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
                <Jumbotron>
                    <div className="container">
                        <div className="row row-header">
                            <div className="col-12 col-sm-6">
                                <h1>Ristorante con Fusion</h1>
                                <p>We take inspiration from the World's best cuisines, and create a unique fusion experience. Our lipsmacking creations will tickle your culinary senses!</p>
                            </div>
                        </div>
                    </div>
                </Jumbotron>
            </div>
        );
    }
}