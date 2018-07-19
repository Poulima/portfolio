import styled from 'styled-components';
import backgroundTheme from '../images/skill_theme1.jpg';

export const SkillSection = styled.div`
  height: 100vh;
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
    font-size: 36px;
    margin: 0px;
    line-height: 37px;
    color: #860c0c;
    font-family: cursive;
    word-spacing: 4px;
  }
`
export const AllSkills = styled.div`
  padding: 30px 0px;


  .skillLogo {
    position: relative;
    visibility: hidden;
    width: 150px;
    height: 150px;
    position: relative;
    display: inline-block;
    margin: 20px;

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
