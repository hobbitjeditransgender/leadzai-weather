import styled from 'styled-components';

import { GRAY_PRIMARY, ORANGE_PRIMARY } from '../../../utils/theme';

export const SwitchWrapper = styled.div`
  width: 100px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

export const Label = styled.label`
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 0 5px 0 5px;
  cursor: pointer;
`;

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

export const Input = styled.input`
  opacity: 0;
  position: absolute;

  &:checked + ${Switch} {
    &:before {
      transform: translate(17px, -50%);
    }
  }
`;
