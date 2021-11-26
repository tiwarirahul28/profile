import React from 'react';
import styled from 'styled-components';
import {MainLayout, InnerLayout} from '../styles/Layouts';
import Title from '../Components/Tittle';
import PrimaryButton from '../Components/PrimaryButton';
import EmailIcon from '@material-ui/icons/Email';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';
import ContactItem from '../Components/ContactItem';

function ContactPage() {
    const phone = <PhoneIcon />
    const email = <EmailIcon />
    const location = <LocationOnIcon />
    return (
        <MainLayout>
            <ContactPageStyled>
                <Title title={'Contact'}/>
                <InnerLayout className={'contact-section'}>
                    <div className={'left-contact'}>
                        <div className="contact-title">
                            <h4>Get In Touch</h4>
                        </div>
                        <form className="form">
                            <div className="form-field">
                                <label htmlFor="name" >Enter Your Name</label>
                                <input type="text" id="name" />
                            </div>
                            <div className="form-field">
                                <label htmlFor="email"  >Enter your email*</label>
                                <input type="email" id="email" />
                            </div>
                            <div className="form-field">
                                <label htmlFor="subject"  >Enter your subject</label>
                                <input type="text" id="subject" />
                            </div>
                            <div className="form-field">
                                <label htmlFor="text-area">Enter your Message*</label>
                                <textarea name="textarea" id="textarea" cols="30" rows="10"></textarea>
                            </div>
                            <div className="form-field f-button">
                                <PrimaryButton title={'Send Email'} />
                            </div>
                        </form>
                    </div>
                    <div className="right-content">
                        <ContactItem title={'Phone'} icon={phone} cont1={'+91 9324272772'} />
                        <ContactItem title={'Email'} icon={email} cont1={'tiwarirahul28042002@gmail.com'} />
                        <ContactItem title={'Address'} icon={location} cont1={'Shaitan gali, khatra mahal, andher nagar, shamshan ke samne.'} />
                    </div>
                </InnerLayout>
            </ContactPageStyled>
        </MainLayout>
    )
}

const ContactPageStyled = styled.section`
    padding-left: 20px;

    @media screen and (max-width: 978px){
            padding: 0px;    
        }

    .contact-section{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-column-gap: 2rem;
        @media screen and (max-width: 978px){
            grid-template-columns: repeat(1, 1fr);
            .f-button{
                margin-bottom: 3rem;
            }
        }

        .left-contact{
            padding-left: 50px;

            @media screen and (max-width: 978px){
                padding-left: 0px;
            }
        }

        .right-content{
            display: grid;
            grid-template-columns: repeat(1, 1fr);
            @media screen and (max-width: 502px){
                width: 70%;
            }
        }

        
        .contact-title{
            h4{
                color: var(--white-color);
                font-size: 20px;
                font-weight: normal;
            }
        }

        .form{
            width: 100%;
            @media screen and (max-width: 502px){
                width: 100%;
            }

            .form-field{
                margin-top: 30px;
                position: relative;
                width: 100%;
                label{
                    position: absolute;
                    left: 20px;
                    top: -8px;
                    display: inline-block;
                    background-color: var(--background-dark-color);
                    padding: 0 5px;
                    color: inherit;
                    font-size: 14px;
                }
                input{
                    border: 1px solid var(--border-color);
                    outline: none;
                    background: transparent;
                    height: 40px;
                    padding:0 10px;
                    width: 100%;
                    color: inherit;
                    font-size: 12px;
                }
                textarea{
                    background-color: transparent;
                    border: 1px solid var(--border-color);
                    outline: none;
                    color: inherit;
                    width: 100%;
                    padding: .8rem 1rem;
                }
            }
        }
    }
`;

export default ContactPage
