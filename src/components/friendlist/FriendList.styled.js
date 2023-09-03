import styled from '@emotion/styled';

export const Container = styled.div`
  width: 300px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  text-align: center;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;
export const OnlineStatus = styled.span`
  width: 12px;
  height: 12px;
  background-color: green; /* Зелений колір */
  border-radius: 50%; /* Округлимо кружечок */
  margin-right: 5px; /* Відстань від аватарки */
`;
export const OfflineStatus = styled.span`
  width: 12px;
  height: 12px;
  background-color: red; /* Червоний колір */
  border-radius: 50%; /* Округлимо кружечок */
`;
export const ListOfFriends = styled.ul`
  list-style: none;
`;
