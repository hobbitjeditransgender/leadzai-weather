import styled, { keyframes } from 'styled-components';

const Spinner = styled.div`
  color: official;
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
`;

const rotate = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

const Spin = styled.div`
  transform-origin: 40px 40px;
  animation: ${rotate} 1.2s linear infinite;
  &:after {
    content: ' ';
    display: block;
    position: absolute;
    top: 3px;
    left: 37px;
    width: 6px;
    height: 18px;
    border-radius: 20%;
    background: #fff;
  }
`;

const Child = styled(Spin)<{ index: number }>`
  transform: rotate(${(props) => props.index * 30}deg);
  animation-delay: -${(props) => 1.1 + props.index * 0.1}s;
`;

const LoadingSpinner = () => (
  <Spinner>
    {[...Array(12)].map((_, i) => (
      <Child key={i} index={i} />
    ))}
  </Spinner>
);

export default LoadingSpinner;
