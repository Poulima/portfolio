import styled from 'styled-components';

export const Topbar = styled.ul`
  width: -webkit-fill-available;
  top: 0px;
  position: fixed;
  z-index: 10000;
  list-style: none;
  display: flex;
  justify-content: flex-end;
  height: 30px;
  align-items: center;
  background: #fff;
  margin: 0px;
  padding: 10px 48px;
  height: 48px;
  box-shadow: -8px -8px 34px #888;
  .listItem {
    color: #444;
    margin: 0px 20px;
    cursor: pointer;
    font-size: 16px;
    text-transform: uppercase;
    font-family: KarlaBold;
  }
  .active {
    color: #00B5D5;
  }
`
