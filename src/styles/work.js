import styled from 'styled-components';

export const WorkSection = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const WorkList = styled.ul`
 list-style: none;
`

export const EachWorkDes = styled.li`
  display: inline-block;
  margin: 20px;
  width: 30vh;
  height: 30vh;
  text-align: center;
  background: #eee9e9;
  padding: 15px;
  .work-details {
    visibility: hidden;
  }
  .title {
    font-size: 26px;
    margin: 0px;
    line-height: 37px;
    color: #888;
    word-spacing: 4px;
  }
`
