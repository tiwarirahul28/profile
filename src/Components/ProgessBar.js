import React from 'react';
import styled from 'styled-components';

function ProgessBar({title, width, text}) {
    return (
        <ProgressBarStyled>
            <h6>{title}</h6>
            <div className="progress-bar">
                <p>{text}</p>
                <div className="progress">
                    <span style={{width: width}}></span>
                </div>
            </div>
        </ProgressBarStyled>
    )
}

const ProgressBarStyled = styled.div`
   padding-left: 50px;
   
    @media screen and (max-width: 1200px){
        padding: 0px;
    }
    
    .progress-bar{
        display: flex;
        align-items: center;
        font-weight: normal;

        p{
            padding-right: 18px;
            font-size: 14px;
            
        }

        .progress{
            position: relative;
            width: 100%;
            height: 4px;
            background-color: var(--border-color);

            span{
                position: absolute;
                left: 0;
                bottom: 0;
                height: 100%;
                background-color: var(--primary-color)
            }
        }
    }
`;

export default ProgessBar
