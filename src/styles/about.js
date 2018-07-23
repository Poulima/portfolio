import styled from 'styled-components';
import { media } from './Media';

export const About = styled.div`
  height: 100vh;
  ${media.sm`height: auto;`};
  background: #D3D3D3	;
  .header {
    text-align: center;
    margin: 20px 0px;
    ${media.sm`margin-bottom: 0px; font-size: 30px;`};
    font-size: 40px;
    font-family: JosefinSansBold;
    letter-spacing: 3px;
  }

  .profileImage {
    width: 80vh;
    height: 70vh;
    ${media.sm`width: 50vh; height: 50vh;`};
    border: 4px solid #888;
    border-radius: 8px;
    box-shadow: 0 3px 13px 0 rgba(0,0,0,0.4);
  }

  .profile_image {
    position: relative;
    visibility: hidden;
  }

  .animationProfileImage {
    visibility: visible;
    -webkit-animation-name: imageDetails; /* Safari 4.0 - 8.0 */
    -webkit-animation-duration: 4s; /* Safari 4.0 - 8.0 */
    animation-name: imageDetails;
    animation-duration: 2s;
    animation-fill-mode: both;
    -webkit-animation-duration: 1s;
    -webkit-animation-fill-mode: both
  }

  @keyframes imageDetails {
      0%   {right:100px;}
      100% {right:0px;}
  }

  @-webkit-keyframes imageDetails {
      0%   {right:100px;}
      100% {right:0px;}
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
    ${media.sm`font-size: 17px;`};
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
    ${media.sm`margin-bottom: 30px; margin-top: 0px; padding: 14px 5px; font-size: 14px; width: 190px;`};
  }
`
export const MyDetails = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  ${media.sm`flex-direction: column;`};
  height: inherit;
  margin: 0px 40px;
  padding-top: 48px;

  .profile_image {
    margin: 0px 30px;
  }
`

export const RightSection = styled.div`


  .profile_details {
    position: relative;
    visibility: hidden;
    height: inherit;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0px 30px;
    ${media.sm`margin: 0px;`};
  }

  .animationProfileDetails {
      visibility: visible;
      -webkit-animation-name: profileDetails; /* Safari 4.0 - 8.0 */
      -webkit-animation-duration: 4s; /* Safari 4.0 - 8.0 */
      animation-name: profileDetails;
      animation-duration: 2s;
      animation-fill-mode: both;
      -webkit-animation-duration: 1s;
      -webkit-animation-fill-mode: both
  }
    @keyframes profileDetails {
        0%   {left:100px;}
        100% {left:0px;}
    }

    @-webkit-keyframes profileDetails {
        0%   {left:100px;}
        100% {left:0px;}
    }

`;
