import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
export const Details = styled.div`
  display: flex;
  gap: 30px;
  padding: 20px;
  border: 2px solid;
  border-radius: 10px;
  margin: 0 30px;
`;

export const InfoFilm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 30px;
`;

export const MoreInfoFilm = styled.div`
  padding: 30px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 50px;
`;

export const MoreLink = styled(Link)`
  font-size: 20px;
  font-weight: 500;
  border: 1px solid;
  background-color: white;
  border-radius: 4px;
  padding: 10px 20px;

  :hover:not(.active),
  :focus-visible:not(.active) {
    color: blue;
  }
`;
