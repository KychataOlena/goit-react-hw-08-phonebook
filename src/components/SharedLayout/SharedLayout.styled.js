import styled from '@emotion/styled';

export const Wrapper = styled.div`
  padding: 15px;
  margin: 0px auto;
  max-width: 1600px;
  min-height: 600px;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 8px 0;
  margin-bottom: 16px;
  border-bottom: 1px solid black;

  > nav {
    display: flex;
  }
`;
