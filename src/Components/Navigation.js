import React from 'react';
import styled from 'styled-components';
import {NavLink} from 'react-router-dom';
import avatar from '../img/avatar.jpeg';


function Navigation() {
    return (
        <NavigationStyled>
            <div className="avatar">
                <img src={avatar} alt=""/>
            </div>
            <ul className="nav-items">
                <li className="nav-item">
                    <NavLink to="/" activeClassName="active-class" exact>Home</NavLink>
                </li>

                <li className="nav-item">
                    <NavLink to="/about" activeClassName="active-class" exact>About</NavLink>
                </li>

                <li className="nav-item">
                    <NavLink to="/resume" activeClassName="active-class" exact>Resume</NavLink>
                </li>

                <li className="nav-item">
                    <NavLink to="/portfolio" activeClassName="active-class" exact>Portfolio</NavLink>
                </li>

                {/* <li className="nav-item">
                    <NavLink to="/blogs" activeClassName="active-class" exact>Blogs</NavLink>
                </li> */}

                <li className="nav-item">
                    <NavLink to="/contact" activeClassName="active-class" exact>Contact</NavLink>
                </li>
            </ul>
            <footer className="footer">
                <p>@2023 <b>Rahul Tiwari</b></p>
            </footer>
        </NavigationStyled>
    )
}

const NavigationStyled = styled.nav`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    height: 100%;
    width: 100%;
    border-right: 1px solid var(--border-color);
    
    .avatar{
        width: 100%;
        border-bottom: 1px solid var(--border-color);
        text-align: center;
        padding: 10px 10px;

        img{
            width: 100%;
            /* height: 100%; */
            /* border-radius: 50%; */
            /* border: 8px solid var(--border-color); */
        }
    }

    .nav-items{
        width: 100%;
        text-align: center;

        .active-class{
            background-color:  var(--primary-color-light);
            color: wheat;
        }

        li{
            display: block;

            a{
                display: block;
                padding: 8px 0;
                position: relative;
                z-index: 10;
                text-transform: capitalize;
                transition: all .4s ease-in-out;
                font-weight: normal;
                letter-spacing: 1px;
                font-size: 16px;
                &:hover{
                    cursor: pointer;
                    color: var(--white-color);
                }

                &::before{
                    content: "";
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    width: 0;
                    height: 50%;
                    background-color: var( --primary-color);
                    transition: All 0.4s cubic-bezier(1,-0.2,.25,.95) ;
                    opacity: 0.21;
                    z-index: -1;
                }
            }

            a:hover::before{
                width: 100%;
                height: 100%;
            }
        }
    }

    footer{
        border-top: 1px solid var(--border-color);
        width: 100%;

        p{
            padding: 14px 0;
            color: whit;
            font-size: 12px;
            display: block;
            text-align: center;
        }
        b{
            font-size: 14px;
        }
    }

`;
export default Navigation
