import styled from 'styled-components';

import { LIGHT_GRAY } from '../../../utils/theme';

export const LocationUnitSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 1.3rem;
`;

export const LocationUnitWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  @media (min-width: 800px) {
    justify-content: space-between;
    margin: 0 40px 0 40px;
  }
`;

export const SunSection = styled.div`
  gap: 4rem;
  margin-top: 60px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

export const WeatherAppHomeWrapper = styled.div`
  height: 100vh;
  width: 100%;
  background-color: ${LIGHT_GRAY};
`;

export const WeatherSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  height: 83vh;
`;
