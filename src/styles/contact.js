import styled from 'styled-components';
import workTheme from '../images/contact_background.png';
export const ContactSection = styled.div`
  height: 89vh;
  background-image: url(${workTheme});
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;

  .contacts {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
  }

  .contact_link {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
  }
  .contact_details {
   margin: 20px;
   cursor: pointer;
   text-align: center;
   display: inline-block;
  }
  .contact-logo {
    width: 100px;
    height: 100px;
  }

`

export const Footer = styled.div`
  width: 100%;
  background: #111;
  padding 20px;
  color: #ddd;
  text-align: center;
  font-family: KarlaRegular;
  word-spacing: 5px;
`
