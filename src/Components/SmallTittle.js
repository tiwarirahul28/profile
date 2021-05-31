import React from 'react';
import styled from 'styled-components';

function SmallTittle({icon, title}) {
    return (
        <SmallTitleStyled>
            <p>{icon}</p>
            <h3>{title}</h3>
        </SmallTitleStyled>
    )
}
const SmallTitleStyled = styled.div`
    display: flex;
    align-items: center;
    padding-left: 50px;
    @media screen and (max-width: 1200px){
    padding: 0px;
    }
    p{
        padding-right: 1rem;
        svg{
            font-size: 35px;
        }
    }
    h3{
        color: var(--white-color);
        font-size: 20px;
        font-weight: normal;

    }
`;
export default SmallTittle;
