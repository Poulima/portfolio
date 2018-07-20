import styled from 'styled-components';

export const About = styled.div`
  height: 100vh;
  background: #D3D3D3	;
  .header {
    text-align: center;
    margin: 20px 0px;
    font-size: 40px;
    font-family: JosefinSansBold;
    letter-spacing: 3px;
  }

  .profileImage {
    width: 68vh;
    height: 68vh;
    border: 4px solid #888;
    border-radius: 8px;
    box-shadow: 0 3px 13px 0 rgba(0,0,0,0.4);
  }
  .des {
    text-align: center;
    display: block;
  }
  .about_myself {
    font-family: KarlaRegular;
    text-align: left;
    line-height: 28px;
    word-spacing: 10px;
    font-size: 20px;
}
  }
  .download_resume {
    text-decoration: none;
    padding: 14px 26px;
    background: #00B5D5;
    color: #fff;
    display: inline-block;
    border-radius: 4px;
    word-spacing: 6px;
    font-family: KarlaBold;
    font-size: 17px;
    letter-spacing: 2px;
    width: 250px;
    text-align: center;
    margin-top: 30px;
  }
`
export const MyDetails = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: inherit;
  margin: 0px 40px;
  padding-top: 48px;

  .profile_image {
    margin: 0px 30px;
  }
`

export const RightSection = styled.div`
  height: inherit;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0px 30px;
`;

export const MyInfo = styled.div`
  text-align: left;
  margin: 30px 0px;
  span {
    display: inline-block;
    margin: 0px 20px;
  }
`;
