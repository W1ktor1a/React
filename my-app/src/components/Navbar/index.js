import React from 'react';
import {Nav, NavName, Up, Menu, Basket } from './StyledComponents';


const Navbar = () => {
    return (
        <>
            <Nav>
                <NavName href='/'>HOME</NavName>
                        <Menu>
                    
                            <li className="dropdown">
                                <a href="/her" className="dropbtn">Her</a>
                                <div className="dropdown-content">
                                    <a href="/her/clothing">clothing</a>
                                    <a href="/her/shoes">shoes</a>
                                    <a href="her/accessoires">accessories</a>
                                </div>
                            </li>
                            <li className="dropdown">
                                <a href="/him" className="dropbtn">Him</a>
                                 <div className="dropdown-content">
                                    <a href="/him/clothing">clothing</a>
                                    <a href="/him/shoes">shoes</a>
                                    <a href="/him/accessoires">accessories</a>
                                </div>
                             </li>
                            <li className="dropdown">
                            <a href="/sale" className="dropbtn">Sale</a>
                             </li>
                        </Menu>
                    <Basket href='/checkout'>
                        <SlBasket/>
                    </Basket>
            </Nav>
        </>
    )
}
export default Navbar;

