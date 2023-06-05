import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: 12px;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 24px;
  color: #464040;

  &.active {
    color: #4f28a6;
  }
`;
export const Nav = styled.nav`
  padding: 10px 30px;
  margin-bottom: 20px;
  border-bottom: 3px solid #2b1a53;
`;
