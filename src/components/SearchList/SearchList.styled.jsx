import styled from '@emotion/styled';

export const MovieItem = styled.li`
  border: 2px solid;
  padding: 10px;
  border-radius: 5px;
  background-color: white;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    transform: scale(1.07);
    box-shadow: 5px 9px 20px rgba(0, 0, 0, 0.15);
  }
`;
