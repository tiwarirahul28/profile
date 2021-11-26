import React from 'react';
import styled from 'styled-components';
import resume from '../img/avatar.jpeg';
import Primarybutton from './PrimaryButton';

function ImageSection() {
    return (
        <ImageSectionStyled>
            <div className="left-container">
                <img src={resume} alt="" />
            </div>
            <div className="right-container">
                <h4>I am <span>Rahul Tiwari</span></h4>
                <p className="paragraph">
                    Frontend Developer
                </p>

                <div className="about-info">
                    <div className="info-title">
                        <p>Full Name</p>
                        <p>Age</p>
                        <p>Nationality </p>
                        <p>Languages </p>
                        <p>Location</p>
                        <p>Service</p>
                    </div>

                    <div className="info">
                        <p>: Rahul Tiwari</p>
                        <p>: 19</p>
                        <p>: Indian </p>
                        <p>: English, Hindi </p>
                        <p>: Mahim, Mumbai, India</p>
                        <p>: Web Developer</p>
                    </div>
                </div>
                <Primarybutton title={'Download CV'} />
            </div>
        </ImageSectionStyled>
    )
}

const ImageSectionStyled = styled.div`
    margin-top: 60px;
    display: flex;
    padding-left: 50px;
    @media screen and (max-width: 1200px){
    padding: 0px;
    }

    @media screen and (max-width:1000px){
        flex-direction: column;
        .left-content{
            margin-bottom: 2rem;
        }
    }

    .left-container{
        width: 100%;

        img{
            width: 90%;
            height: 95%;
            /* object-fit: cover; */
        }
    }

    .right-container{
        width: 100%;

        h4{
            font-size: 22px;
            color: var(--white-color);
            font-weight: normal;

            span{
                font-size: 24px;
                font-weight: normal;
            }
        }

        .paragraph{
            padding: 16px 0;
            font-size: 14px;
        }

        .about-info{
            display: flex;
            padding-bottom: 20px;
            font-size: 16px;

            .info-title{
                padding-right: 34px;

                p{
                    font-weight: normal;
                    font-size: 16px;
                }
            }

            .info-title, .info{
                p{
                    padding: 6px;
                    font-size: 16px;
                }
            }
        }
    }
`;


export default ImageSection;

