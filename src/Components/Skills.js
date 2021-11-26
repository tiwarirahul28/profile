import React from 'react';
import styled from 'styled-components';
import Title from '../Components/Tittle';
import ProgressBar from './ProgessBar';
import {InnerLayout} from '../styles/Layouts';

function Skills() {
    return (
        <SkillsStyled>
            <Title title={'My Skills'}/>
            <InnerLayout>
                <div className="skills">
                    <ProgressBar 
                        title={'HTML5'}
                        width={'95%'}
                        text={'95%'}
                    />
                    <ProgressBar 
                        title={'CSS'}
                        width={'95%'}
                        text={'95%'}
                    />
                    <ProgressBar 
                        title={'JAVASCRIPT'}
                        width={'80%'}
                        text={'80%'}
                    />
                    <ProgressBar 
                        title={'BOOTSTRAP'}
                        width={'90%'}
                        text={'90%'}
                    />
                    <ProgressBar 
                        title={'REACT JS'}
                        width={'75%'}
                        text={'75%'}
                    />
                    <ProgressBar 
                        title={'SAAS'}
                        width={'85%'}
                        text={'85%'}
                    />
                </div>
            </InnerLayout>
        </SkillsStyled>
    )
}

const SkillsStyled = styled.section`
    padding-left: 20px; 
    @media screen and (max-width: 1200px){
    padding-left: 0px;
    }
    .skills{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-row-gap: 2rem;
        grid-column-gap: 3rem;
        font-weight: normal;
        
        @media screen and (max-width: 700px){
            grid-template-columns: repeat(1, 1fr);
            padding-left: 0px;
        }
    }
`;

export default Skills
