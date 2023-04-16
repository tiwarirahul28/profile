import React from 'react';
import styled from 'styled-components';
import {InnerLayout} from '../styles/Layouts';
import Title from '../Components/Tittle';
import SmallTitle from '../Components/SmallTittle';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import SchoolIcon from '@material-ui/icons/School';
import ResumeItem from '../Components/ResumeItem';

function Resume() {
    const briefcase = <BusinessCenterIcon />
    const school = <SchoolIcon />
    return (
        <ResumeStyled>
            <Title title={'Resume'} />
            <InnerLayout>
                <div className="small-title">
                    <SmallTitle icon={briefcase} title={'Working Experience'} />
                </div>
                <div className="resume-content">
                    <ResumeItem 
                        year={'May 2021 - Present'} 
                        title={'Frontend Web Developer'}
                        subtitle={'TunicaLabs Media Pvt. Ltd. · Full-time'}
                        text={'Working on Web Applications. Developing WordPress websites. Maintaining and customizing WordPress websites.'}
                    />
                    <ResumeItem 
                        year={'June 2021 - August 2022'} 
                        title={'Software Tester'}
                        subtitle={'Lead School'}
                        text={'Testing different units of different boards and different subjects on the LEAD TAB. Reviewing the Lead Content Resources. Assisting the parallel teams in maintaining the flow of QA Testing and completing all QA Testing by the deadline.'} 
                    />
                </div>
                <div className="small-title u-small-title-margin">
                    <SmallTitle icon={school} title={'Educational Qualifications'} />
                </div>
                <div className="resume-content ">
                    <ResumeItem 
                        year={'2020 - 2023'} 
                        title={'BSc.IT'}
                        subtitle={'Khar Education Soceity'}
                        // text={'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa nihil impedit natus nostrum? Velit accusantium id quos, nihil vel quod.Quas, magni mollitia, aspernatur consequatur accusamus vero eum facere exercitationem velit suscipit ipsam placeat libero. '} 
                    />
                    <ResumeItem 
                        year={'2018 - 2020'} 
                        title={'HSC'}
                        subtitle={'Lokmanya Vidya Mandir College'}
                        // text={'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa nihil impedit natus nostrum? Velit accusantium id quos, nihil vel quod.Quas, magni mollitia, aspernatur consequatur accusamus vero eum facere exercitationem velit suscipit ipsam placeat libero. '} 
                    />
                    <ResumeItem 
                        year={'2010 - 2018'} 
                        title={'SSC'}
                        subtitle={'Saraswati Mandir High School'}
                        // text={'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa nihil impedit natus nostrum? Velit accusantium id quos, nihil vel quod.Quas, magni mollitia, aspernatur consequatur accusamus vero eum facere exercitationem velit suscipit ipsam placeat libero. '} 
                    />
                </div>
            </InnerLayout>
        </ResumeStyled>    
    )
}

const ResumeStyled = styled.section`
    padding-left: 20px;
    @media screen and (max-width: 1200px){
    padding-left: 10px;
    }
    .small-title{
        padding-bottom: 3rem;
        @media screen and (max-width: 1200px){
        padding-left: 5px;
        }
    }
    .u-small-title-margin{
        margin-top: 4rem;
    }

    .resume-content{
        /* border-left: 1px solid var(--border-color); */
        padding-left: 20px;
    }
`;
export default Resume
