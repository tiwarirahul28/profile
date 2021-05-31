import React from 'react';
import styled from 'styled-components';

function resumeItem({year, title, subtitle, text}) {
    return (
        <ResumeItemStyled>
            <div className="left-container">
                <p>{year}</p>
            </div>
            <div className="right-container">
                <h5>{title}</h5>
                <h6>{subtitle}</h6>
                <p>{text}</p>
            </div>
        </ResumeItemStyled>
    )
}

const ResumeItemStyled = styled.div`
    display: flex;
    padding-left: 50px;
    @media screen and (max-width: 1200px){
    padding-left: 0px;
    }
    @media screen and (max-width: 421px){
    padding-left: 0px;

        p, h5, h6{
            font-size: 80%;
        }
    }

    &:not(:last-child){
        padding-bottom: 3rem;
    }

    .left-container{
        width: 50%;
        padding-left: 20px;
        padding-top: 5px;
        position: relative;

        &::before{
            content: "";
            position: absolute;
            left: -10px;
            top: 8px;
            height: 15px;
            width: 15px;
            border-radius: 50%;
            border: 2px solid var(--border-color);
            background-color: var(--background-dark-color);
        }

        p{
            display: inline-block;
            font-size: 16px;
        }
    }
    .right-container{
        padding-left: 2rem;
        position: relative;

        /* &::before{
            content: "";
            position: absolute;
            left: -80px;
            top: 15px;
            height: 2px;
            width: 3rem;
            background-color: var(--border-color);
        } */

        h5{
            color: var(--primary-color);
            font-size: 18px;
            font-weight: normal;
            padding-bottom: .4rem;
        }

        h6{
            padding-bottom: .6rem;
            font-size: 14px;
            font-weight: 100;
        }
        p{
            font-size: 14px;
        }
    }
`;


export default resumeItem;
