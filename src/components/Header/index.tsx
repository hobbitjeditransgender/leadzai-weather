import React from 'react';

import styled from 'styled-components';

import { GRAY_SECONDARY } from '../../utils/theme';

const StyledHeader = styled.div`
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  background-color: ${GRAY_SECONDARY};

  span {
    font-size: 25px;
  }
`;

const Header: React.FC = () => {
  return (
    <StyledHeader>
      <span>Weather App</span>
    </StyledHeader>
  );
};

export default Header;
