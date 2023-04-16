import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaBars } from 'react-icons/fa';


export const Nav = styled.nav`
    position: fixed;
    height: 90px;
    display: flex;
    z-index: 15;
    background-color: black;
    justify-content: space-between;
    flex-direction: row;
    width: 100%;
    
`;

export const MenuLink = styled(Link)`
color: white;
display: flex;
cursor: pointer;
align-items: center;
text-decoration: none;
height: 100%;
&.active {
  color: black;
}
`;

export const Up = styled(FaBars)`
  color: white;
  @media screen and (max-width: 768px) {
    display: block;
    font-size: 23px;
    align-items: center;
    margin-left: 600px;
    position: absolute;
    cursor: pointer;
    transform: translate(-100%, 75%);
  }
`
export const Menu = styled.div`
  display: flex;
  align-items: center;
  margin-left: 105px;
  font-size: 23px;
  gap: 220px;
  @media screen and (max-width: 760px) {
    display: none;
  }
`

