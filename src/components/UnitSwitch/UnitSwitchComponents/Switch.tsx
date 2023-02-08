import styled from 'styled-components';

import { GRAY_PRIMARY, ORANGE_PRIMARY } from '../../../utils/theme';

export const Switch = styled.div`
  position: relative;
  width: 27px;
  height: 10px;
  background-color: ${GRAY_PRIMARY};
  border-radius: 32px;
  padding: 4px;
  transition: 300ms all;

  &:before {
    transition: 300ms all;
    content: '';
    position: absolute;
    width: 20px;
    height: 20px;
    border-radius: 35px;
    top: 50%;
    left: 0px;
    background-color: ${ORANGE_PRIMARY};
    transform: translate(0, -50%);
  }
`;
