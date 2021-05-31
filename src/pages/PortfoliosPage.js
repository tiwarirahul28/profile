import React, { useState } from 'react';
import {MainLayout, InnerLayout} from '../styles/Layouts';
import Title from '../Components/Tittle';
import portfolios from '../data/portfolios';
import Menu from '../Components/Menu';
import Button from '../Components/Button';
import styled from 'styled-components';

const allbuttons = ['All', ...new Set(portfolios.map(item => item.category))]

function PortfoliosPage() {
    const [menuItem, setMenuItem] = useState(portfolios);
    const [button,] = useState(allbuttons);

    const filter = (button) => {

        if(button === 'All'){
            setMenuItem(portfolios);
            return;
        }

        const filterredData = portfolios.filter(item => item.category === button);
        setMenuItem(filterredData);
    }

    return (
        <MainLayout>
            <Portofoiliostyled>
                <Title title={'Portfolios'} span={'Portfolios'}/>
            </Portofoiliostyled>
            <InnerLayout>
                <Button filter={filter} button={button} />
                <Menu menuItem={menuItem}/>
            </InnerLayout>
        </MainLayout>
    )
}

const Portofoiliostyled = styled.div`
    padding-left: 20px;

    @media screen and (max-width: 1200px){
    padding: 0px;
    }
`;


export default PortfoliosPage
