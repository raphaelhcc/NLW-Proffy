import styled, { css } from 'styled-components';
import { HeartFill, CameraVideoFill } from 'styled-icons/bootstrap';
import { BookOpen } from 'styled-icons/boxicons-regular';

export const Container = styled.div`
  background-color: var(--primary);
  color: var(--contrastText);

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  height: 100vh;
  width: 100vw;
`;

export const Landing = styled.div`
  > div h1 {
    font-size: 120px;
  };

  > div h3 {
    font-size: 32px;
  };

  > img {
    height: 200px;
  }
  
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 80%;
`;

export const Actions = styled.div`
  width: 80%;
  display: flex;
  justify-content:space-between;
  align-items: center;
`;

const button = css`
  font-size: 24px;
  padding: 32px 56px;
  border-radius: 8px;
  align-items: center;
  cursor: pointer;

  transition: transform .2s;

  &:hover {
    transform: scale(1.05)
  }
`;

export const StudyButton = styled.button`
  ${button}

  background: var(--tertiary);
  color: var(--lightButtonTextColor);
`;

export const SubscribeButton = styled.button`
  ${button}

  margin-left: 16px;
  color: var(--darkButtonTextColor);
  background: var(--secondary);
`;

export const TotalSubscribe = styled.div`
  font-size: 14px;
  opacity: 0.7;

  align-items: center;
`;

export const HeartIcon = styled(HeartFill)`
  @keyframes pulse {
    0%   {
      transform: scale(1);
    }
    50%  {
      transform: scale(1.1);
    }
    100% {
      transform: scale(1);
    }
  }

  animation-name: pulse;
  animation-duration: 1s;
  animation-iteration-count: infinite;

  width: 18px;
  height: 18px;
  margin-left: 8px;
  fill: red;
`;

export const BookIcon = styled(BookOpen)`
  width: 32px;
  height: 32px;
  margin-right: 12px;
`;

export const CameraIcon = styled(CameraVideoFill)`
  width: 32px;
  height: 32px;
  margin-right: 12px;
`;
