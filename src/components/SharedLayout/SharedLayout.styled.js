import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
export const Wrapper = styled.div`
  padding: 15px;
  margin: 0px auto;
  max-width: 1600px;
  min-height: 600px;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 8px 0;
  margin-bottom: 16px;
  border-bottom: 1px solid black;

  > nav {
    display: flex;
  }
`;
export const NavBox = styled.nav`
  display: flex;
  justify-content: center;
  margin: -5px;
`;
export const HeaderLink = styled(NavLink)`
  display: block;
  padding: 2px 8px;
  margin: 5px;
  min-width: 96px;
  height: 30px;
  background-color: #fff;
  border-radius: 4px;
  border: 2px;
  border-color: #202020;
  cursor: pointer;
  text-decoration: none;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 1.61;
  color: #202020;
`;
