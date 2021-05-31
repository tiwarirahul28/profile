import React from 'react';
import styled from 'styled-components';

function ContactItem({title, icon, cont1, cont2}) {
    return (
        <ContactItemStyled>
            <div className="left-content">
                {icon}
            </div>
            <div className="right-content">
                <h6>{title}</h6>
                <p>{cont1}</p>
                <p>{cont2}</p>
            </div>
        </ContactItemStyled>
    )
}

const ContactItemStyled = styled.div`
    padding:1.5rem 2rem;
    background-color: var(--background-dark-grey);
    display: flex;
    align-items: center;
    &:not(:last-child){
        margin-bottom: 2.5rem;
    }
    .left-content{
        padding: 1rem;
        border: 1px solid var(--border-color);
        font-size: 16px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 1.5rem;
        svg{
            font-size: 20px;
        }
    
    }

    .right-content{
        h6{
            color: var(--white-color);
            font-size: 16px;
            padding-bottom: .6rem;
        }
        p{
            padding: .1rem 0;
            font-size: 14px;
        }
    }
`;

export default ContactItem
