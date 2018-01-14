import React from 'react';
import {Link} from 'react-router-dom';
import './Header.css';
import {Navbar, Nav, NavItem} from 'react-bootstrap';
import config from '../config';

const Header = () => {
  const navLinks = [
    {
      name: 'Home',
      link: '/'
    }, {
      name: 'About',
      link: '/about'
    }, {
      name: 'Resume',
      link: '/resume'
    }, {
      name: 'Portfolio',
      link: '/portfolio'
    }
  ];

  return (
    <Navbar inverse collapseOnSelect>
		<Navbar.Header>
			<Navbar.Brand>
				{config.siteTitle}
			</Navbar.Brand>
			<Navbar.Toggle />
		</Navbar.Header>
		<Navbar.Collapse>
			<Nav>
        {navLinks.map((item, key) => {
          return <NavItem key={key} eventKey={key} ><Link 
            to={item.link} 
            key={key}
            className="">{item.name}</Link></NavItem>
        })}
			</Nav>
		</Navbar.Collapse>
	</Navbar>
  );
}

export default Header;

/*
            {navLinks.map((item, key) => {
              console.log(key, item);
              return <NavItem key={key} eventKey={key}><Link 
                to={item.link} 
                key={key}
                className="">{item.name}</Link></NavItem>
            })}
*/

/*
<div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid nav navbar-nav">
          <ul className="navbar-nav">
            {navLinks.map((item, key) => {
              console.log(key, item);
              return <li key={key} className="nav-item"><Link 
                to={item.link}
                className="nav-link">{item.name}</Link></li>
            })}
            </ul>
        </div>
      </nav>
    </div>
    */

/*
<Navbar inverse collapseOnSelect>
		<Navbar.Header>
			<Navbar.Brand>
				 <a href="">Brandon Schabel</a>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav>
          <NavItem eventKey={1} href="#">
            Link
          </NavItem>
          <NavItem eventKey={2} href="#">
            Link
          </NavItem>
          <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
            <MenuItem eventKey={3.1}>Action</MenuItem>
            <MenuItem eventKey={3.2}>Another action</MenuItem>
            <MenuItem eventKey={3.3}>Something else here</MenuItem>
            <MenuItem divider />
            <MenuItem eventKey={3.3}>Separated link</MenuItem>
          </NavDropdown>
        </Nav>
        <Nav pullRight>
          <NavItem eventKey={1} href="#">
            Link Right
          </NavItem>
          <NavItem eventKey={2} href="#">
            Link Right
          </NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
*/