import React from 'react';
import styled from 'styled-components';
import FacebookIcon from '@material-ui/icons/Facebook';
import GithubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';
// import Particle from '../Components/Particle';

function HomePage() {
    return (
        <HomePageStyled>
            {/* <div className="particle-con">
                <Particle />
            </div> */}
            <div className="typography">
                <h1>Hi, I'm <span>Rahul Tiwari</span></h1>
                <p>I am a Frontend Web Developer</p>
                <div className="icons">
                    <a href="https://www.facebook.com/profile.php?id=100043219863014" target="-blank" className="icon i-facebook">
                        <FacebookIcon />
                    </a>
                    <a href="https://github.com/TheRahulTiwari28" target="-blank" className="icon i-github">
                        <GithubIcon />
                    </a>
                    <a href="https://www.instagram.com/the_rahul_tiwari_28/" target="-blank" className="icon i-instagram">
                        <InstagramIcon />
                    </a>
                </div>
            </div>
        </HomePageStyled>
    )
}

const HomePageStyled = styled.header`
    width: 100%;
    height: 100vh;
    position: relative;
   
    .typography{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
        width: 80%;

        p{
            font-size: 16px;

            @media screen and (max-width: 502px){
                font-size: 14px
            }
        }

        .icons{
            display: flex;
            justify-content: center;
            margin-top: 14px;

            .icon{
                border: 2px solid var(--border-color);
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 50%;
                transition: all .4s ease-in-out;
                cursor: pointer;

                &:hover{
                    border: 2px solid var(--primary-color);
                    color: var(--primary-color);
                }

                &:not(:last-child){
                    margin-right: 10px;
                }

                svg{
                    margin: 5px;
                }
            }

            .i-instagram{
                &:hover{
                    border: 2px solid red;
                    color: red;
                }
            }
            
            .i-github{
                &:hover{
                    border: 2px solid #5F4687;
                    color: #5F4687;
                }
            }
        }
    }
`;

export default HomePage;
