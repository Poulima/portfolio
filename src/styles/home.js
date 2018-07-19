import styled from 'styled-components';
import backgroundTheme from '../images/background_theme.jpeg';

export const HomePage = styled.div`
  height: 100vh;
  margin-top: 48px;
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
    font-size: 33px;
    margin: 0px;
    line-height: 37px;
    color: #fff;
    animation-delay: 0.2s;
  }

  .title {
    color: #fff;
    font-size: 46px;
    letter-spacing: 10px;
    text-transform: uppercase;
    font-weight: 700;
    margin: 20px;
    animation-delay: 0.4s;
  }

  .role {
    font-size: 30px;
    color: #fff;
    font-weight: 400;
    line-height: 30px;
    margin-bottom: 25px;
    animation-delay: 0.6s;
  }

  .introduction {
    text-align: center;
    margin-bottom: 20%;
  }
`
