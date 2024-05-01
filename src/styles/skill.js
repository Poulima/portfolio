import styled from 'styled-components';
import backgroundTheme from '../images/skill_background4.jpeg';
import { media } from './Media';

export const SkillSection = styled.div`
  height: 100vh;
  ${media.sm`height: auto;`};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: url(${backgroundTheme}) no-repeat;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  background-repeat: no-repeat;

  .title {
    padding: 60px 0px;
    color: #00b5d5;
    ${media.sm`padding: 40px 0px 0px;`};
  }

  .grid-container {
    display: grid;
    grid-template-columns: auto auto auto auto auto auto;
    ${media.sm`grid-template-columns: auto auto auto; grid-gap: 40px 28px;`};
    grid-gap: 40px;
  }
`
export const AllSkills = styled.div`
  padding: 30px 0px;


  .skillLogo {
    position: relative;
    visibility: hidden;
    width: 130px;
    height: 130px;
    ${media.sm`width: 65px; height: 65px;`};
    position: relative;
    display: inline-block;
    margin: 6px;

  }
  .animationEffect {
    visibility: visible;
    opacity: 0;
    animation-name: fadeIn;
    -webkit-animation-name: fadeIn;
    animation-duration: 2s;
    animation-fill-mode: both;
    -webkit-animation-duration: 1s;
    -webkit-animation-fill-mode: both

    @keyframes fadeIn {
        from {
            transform: translate3d(0,40px,0)
        }

        to {
            transform: translate3d(0,0,0);
            opacity: 1
        }
    }

    @-webkit-keyframes fadeIn {
        from {
            transform: translate3d(0,40px,0)
        }

        to {
            transform: translate3d(0,0,0);
            opacity: 1
        }
    }
  }

`
