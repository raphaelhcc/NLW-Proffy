import styled, { css } from 'styled-components';
import { ArrowNarrowLeft } from 'styled-icons/heroicons-outline'

export const Container = styled.div`
  background: var(--primary);
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: center;

  > div {
    width: 90%;

    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export const ArrowBack = styled(ArrowNarrowLeft)`
  width: 40px;
`