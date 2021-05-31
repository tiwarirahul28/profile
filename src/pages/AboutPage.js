import React from 'react';
import styled from 'styled-components';
import {MainLayout} from '../styles/Layouts';
import Title from '../Components/Tittle';
import ImageSection from '../Components/ImageSection';
import ServicesSection from '../Components/ServicesSection';
// import ReviewsSection from '../Components/ReviewsSection'

function AboutPage() {
    return (
        <MainLayout>
            <AboutStyled>
                <Title title={'About Me'} span={'About Me'}/>
                <ImageSection />
                <ServicesSection />
                {/* <ReviewsSection /> */}
            </AboutStyled>
        </MainLayout>
       
    )
}


const AboutStyled = styled.section`
    padding-left: 20px;
    font-size: 16px;
    @media screen and (max-width: 978px){
                padding: 0px; 
        }
`;

export default AboutPage;
