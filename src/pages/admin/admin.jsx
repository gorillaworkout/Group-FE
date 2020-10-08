import React, { Component,useState } from 'react'
import Header from './../../components/Header'
import './admin.css'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText
  } from 'reactstrap';

const Admin = () => {
    // const []
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);


    return ( 
        <div>
            {/* <Header/> */}
            <div class="navbar-kiri position-fixed">
                <h5 class="mx-3 mb-2 mt-4">Welcome Admin!</h5>
                <div class="menu mt-3">
                    <div class="isimenu px-4"><i class="fas fa-plus mr-2"></i> Products</div>
                    <div class="isimenu px-4"><i class="fas fa-plus mr-2"></i> Payment Confirmation</div>
                    <div class="isimenu px-4"><i class="fas fa-plus mr-2"></i> Transaction History</div>
                    <div class="isimenu px-4"><i class="fas fa-plus mr-2"></i> dashboard</div>
                    <div class="isimenu px-4"><i class="fas fa-plus mr-2"></i> dashboard</div>
                </div>
                <ul class="mx-4">
                    <li class="a1 mb-1">Weekly Plan</li>
                    <li class="a2 mb-3">Holiday Plan</li>
                    <li><i class="fas fa-plus mr-2"></i>Add new</li>
                </ul>
            </div>
            <div class="d-flex flex-column">
                {/* <Header/> */}
                <div>
                    <Navbar className='position-absolute' color="light" light expand="sm" style={{width:'100%'}}>
                        <NavbarBrand href="/">reactstrap</NavbarBrand>
                        <NavbarToggler onClick={toggle} />
                        <Collapse isOpen={isOpen} navbar>
                        <Nav className="mr-auto" navbar>
                            <NavItem>
                            <NavLink href="/components/">Components</NavLink>
                            </NavItem>
                            <NavItem>
                            <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
                            </NavItem>
                            <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret>
                                Options
                            </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem>
                                Option 1
                                </DropdownItem>
                                <DropdownItem>
                                Option 2
                                </DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem>
                                Reset
                                </DropdownItem>
                            </DropdownMenu>
                            </UncontrolledDropdown>
                        </Nav>
                        <NavbarText>Simple Text</NavbarText>
                        </Collapse>
                    </Navbar>
                </div>
                <div>
                    holaaa
                </div>
            </div>
        </div>
     );
}
 
export default Admin;