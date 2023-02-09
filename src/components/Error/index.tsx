import styled from 'styled-components';

import { GRAY_PRIMARY } from '../../utils/theme';

const ErrorContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  background-color: ${GRAY_PRIMARY};
  color: black;
  padding: 10px 0px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 10px;
  text-align: center;
  role: alert;
`;

const ErrorMessage = styled.pre`
  background-color: #f9f2f4;
`;

export const ErrorHandler = ({ error }: { error: { message: string } }) => {
  return (
    <ErrorContainer>
      <ErrorMessage>
        <div>
          <p>An error occurred:</p>
          <p>{error.message}</p>
        </div>
      </ErrorMessage>
    </ErrorContainer>
  );
};
