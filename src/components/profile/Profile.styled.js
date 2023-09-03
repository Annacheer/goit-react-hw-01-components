import styled from '@emotion/styled';

export const Container = styled.div`
  width: 300px;
  margin: 0 auto;
  margin-top: 20px;
  text-align: center;
  padding: 20px 0px 0px 0px;
  border: 1px solid #ddd;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const Avatar = styled.img`
  border-radius: 50%;
  margin-bottom: 10px;
`;

export const UserName = styled.p`
  font-size: 24px;
  margin: 10px 0;
  font-weight: bold;
`;
export const Tag = styled.p`
  font-size: 16px;
  margin: 15px 0;
`;
export const Stats = styled.ul`
  list-style: none;
  padding: 10px 0;
  display: flex;
  justify-content: space-evenly;
`;
export const StatsLi = styled.li`
  flex-direction: column;
  text-align: center;
`;
export const Label = styled.span`
  display: block;
`;
export const Quantity = styled.span`
  font-weight: bold;
`;
