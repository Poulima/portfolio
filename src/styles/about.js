import styled from 'styled-components';

export const About = styled.div`
  height: 100vh;
  .header {
    text-align: center;
    margin: 20px 0px;
    font-size: 20px;
    color: #444;
  }

  .profileImage {
    width: 56vh;
    height: 68vh;
  }
  .des {
    text-align: center;
    display: block;
  }
  .about_myself {
    font-family: monospace;
    -webkit-font-smoothing: subpixel-antialiased;
    line-height: 25px;
    text-align: left;
    margin: 0px 30px;
    font-size: 16px;
  }
  .download_resume {
    text-decoration: none;
    padding: 15px;
    background: #00B5D5;
    color: #fff;
    margin: 0px 30px;
    display: inline-block;
  }
`
export const MyDetails = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: inherit;
  margin: 0px 40px;

  div {
    margin: 0px 30px;
  }
`

export const RightSection = styled.div`

`;

export const MyInfo = styled.div`
  text-align: left;
  span {
    display: inline-block;
    margin: 0px 20px;
  }
`;
