import styled from 'styled-components';
import backgroundTheme from '../images/background_theme.jpeg';
import { media } from './Media';

export const HomePage = styled.div`
  height: 100vh;
  background: url(${backgroundTheme}) no-repeat;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  .header-title {
    margin: 0px;
    line-height: 37px;
    color: #fff;
    animation-delay: 0.2s;
    ${media.sm`font-size: 32px;`};
  }

  .title {
    color: #fff;
    font-size: 52px;
    ${media.sm`font-size: 24px; margin: 24px 18px;`};
    letter-spacing: 6px;
    text-transform: uppercase;
    font-weight: 700;
    margin: 38px 20px;
    animation-delay: 0.4s;
    font-family: JosefinSansBold;
  }

  .role {
    color: #fff;
    font-weight: 400;
    line-height: 30px;
    margin-bottom: 25px;
    animation-delay: 0.6s;
    ${media.sm`font-size: 32px;`};
  }

  .introduction {
    text-align: center;
  }
`
