import React from 'react';
import {Nav, MenuLink, Up, Menu } from './StyledComponents';


const Navbar = () => {
    return (
        <>
            <Nav>
            
                <Menu>
                    
                    <MenuLink to="/home" activeStyle>
                         Home
                    </MenuLink>
                    <MenuLink to="/her" activeStyle>
                        Her
                    </MenuLink>
                    <MenuLink to="/him" activeStyle>
                        Him
                    </MenuLink>
                    <MenuLink to="/sale" activeStyle>
                        Sale
                    </MenuLink>
                    <Up/>
                </Menu>
            </Nav>
        </>
    )
}
export default Navbar;

