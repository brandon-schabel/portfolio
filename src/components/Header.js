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
    <Navbar inverse collapseOnSelect className="navbar">
		<Navbar.Header>
			<Navbar.Brand>
				{config.siteTitle}
			</Navbar.Brand>
			<Navbar.Toggle />
		</Navbar.Header>
		<Navbar.Collapse>
			<Nav >
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
