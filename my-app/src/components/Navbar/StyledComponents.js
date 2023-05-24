import styled from 'styled-components';
import { FaBars } from 'react-icons/fa';




export const Nav = styled.nav`
    position: fixed;
    height: 90px;
    display: flex;
    z-index: 15;
    background-color: #031704;
    justify-content: space-between;
    justify-content: center;
    flex-direction: row;
    width: 100%;
`;

export const Up = styled(FaBars)`
  color: white;
  margin-left: 190px;
  @media screen and (max-width: 768px) {
    display: block;
    font-size: 23px;
    align-items: center;
    margin-left: 600px;
    position: absolute;
    cursor: pointer;
    transform: translate(-100%, 75%);

  }
`;

export const Basket = styled.a`
  color: #FDFDDD;
  font-size: 5vh;
  padding: 4vh 5vw;
  position: absolute;
  left: 87vw;
    :hover{
      color: #3C6C3F;
    }
`;

export const NavName = styled.a`
  color: #FDFDDD;
  background: transparent;
  text-decoration: none;
  display: inline-block;
  font-size: 7vh;
  text-align: center;
  position: absolute;
  left: 1vw;
  padding: 3vh 2vw;
   :hover{
    font-size: 6vh;
    color: #3C6C3F;
    transition: 0.5s;
    padding: 3,5vh 2vw;
    }
`;

export const Menu = styled.ul`
  list-style-type: none;
  padding: 0;
  overflow: hidden;

   & > li{
    float: left;

    & > a{
        display: inline-block;
        color:#FDFDDD;
        text-align:center;
        padding: 2vh 6vw;
        font-size: 5vh;
        text-decoration:none;
        border-radius: 5vh;
        transition: 0.5s;

        &:hover{
          background-color: #3C6C3F;
          color: #FDFDDD;
        }
      }
    }
    
    & > .dropdown{
       display: inline-block;
      
         & > .dropdown-content{
          display: none;
          position: absolute;
          background-color: #031704;
          min-width: 16vw;
          z-index: 1;

          & > a {
          color: #FDFDDD;
          padding: 2vw 5vw;
          text-decoration: none;
          display: block;
          text-align: center;
           &:hover{
            background-color: #3C6C3F;
            border-radius: 5vh;
          }
        }
      }
      
      &:hover .dropdown-content {
        display: block;
        border-radius: 5vh;
      }
    }

    @media screen and (max-width: 1024px){
      display: none;
    }
 `;
       

    
 
