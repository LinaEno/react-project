import styled from 'styled-components';

export const ListItem = styled.li`
  padding: 15px;
  border-bottom: 1px solid rgb(220, 220, 223);

  @media screen and (min-width: 768px) {
    padding: 10px;
  }
`;

export const Wrapper = styled.ul`
  @media screen and (min-width: 1280px) {
    max-width: 800px;
    height: 600px;
    padding-left: 69px;
    padding-right: 16px;
  }
`;
export const NewsTitle = styled.h2`
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  font-size: 30px;
  line-height: 45px;
  text-align: left;

  @media screen and (min-width: 768px) {
    margin-bottom: 0;
    margin-top: 20px;
    margin-left: 10px;
  }

  @media screen and (min-width: 1280px) {
    /* margin-bottom: 20px; */
    margin-top: 32px;
    margin-left: 80px;
  }
`;

export const Newsman = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  margin-bottom: 10px;
`;

export const Title = styled.p`
  font-weight: 700;
  font-size: 18px;
  line-height: calc(27 / 18);
`;

export const Link = styled.a`
  text-decoration: none;
  font-weight: 400;
  font-size: 14px;
  line-height: calc(24 / 14);
  background-color: #24cca7;
  color: #fff;
  border-radius: 10px;
  padding: 2px 10px;
`;

export const Content = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: calc(24 / 16);
`;
