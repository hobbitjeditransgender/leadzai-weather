import styled from 'styled-components';

import { Switch } from './Switch';

export const Input = styled.input`
  opacity: 0;
  position: absolute;

  &:checked + ${Switch} {
    &:before {
      transform: translate(17px, -50%);
    }
  }
`;
