import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const HeaderStyled = styled.header`
  background-color: #ffffff;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 60px;
  padding: 0 20px;
  margin: 0 auto;

  @media screen and (min-width: 480px) {
    max-width: 480px;
  }

  @media screen and (min-width: 768px) {
    max-width: 768px;
    height: 80px;
    padding: 0 32px;
  }

  @media screen and (min-width: 1280px) {
    max-width: 1280px;
    padding: 0 16px;
  }
`;

export const Link = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  color: #000000;
  font-family: 'Poppins';
  font-weight: 700;
  font-size: 24px;
  line-height: calc(45 / 30);

  @media screen and (min-width: 480px) {
    gap: 20px;
    font-size: 30px;
  }

  @media screen and (min-width: 768px) {
    gap: 20px;
  }
`;

export const UserBox = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  color: #bdbdbd;

  @media screen and (min-width: 768px) {
    gap: 12px;
  }
`;

export const UserName = styled.p`
  font-size: 18px;
  line-height: calc(27 / 18);
`;

export const Delimiter = styled.span`
  display: block;
  width: 1px;
  height: 30px;
  background-color: #bdbdbd;
`;

export const Avatar = styled.div`
  display: none;

  @media screen and (min-width: 768px) {
    display: flex;
    align-items: center;
    margin-left: 5px;
    gap: 12px;
    & img {
      width: 45px;
      height: 45px;
      background: url(.png);
      border-radius: 3px;
    }
  }
`;

export const Title = styled.h1`
  font-size: 25px;
  line-height: 1.5;
  /* font-family: Verdana, sans-serif; */
  font-family: 'Poppins';
  font-weight: 900;
  position: relative;
  background: #ffffff;
  /* background: transparent; */
  overflow: hidden;
  /* text-transform: uppercase; */
  text-align: center;

  &:before {
    content: '';
    position: absolute;
    filter: blur(10px);
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    mix-blend-mode: screen;
    background-image: repeating-linear-gradient(
        -45deg,
        transparent,
        transparent 1em,
        #bfe2ff 1em,
        #4a56e2 50%
      ),
      repeating-linear-gradient(
        45deg,
        #4a56e2,
        #4a56e2 1em,
        #fff 1em,
        #bfe2ff 50%
      );
    background-size: 3em 3em, 2em 2em;
    animation-name: ani;
    animation-duration: 4s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    animation-direction: alternate;
  }
  @keyframes ani {
    from {
      background-position: 0 0;
    }
    to {
      background-position: 100% 0;
    }
  }
  @media screen and (min-width: 768px) {
    font-size: 35px;
  }
`;

// export const Title = styled.span`
//   font-family: 'Poppins';
//   text-align: center;
//   /* font-size: 40px; */
//   font-size: 30px;
//   line-height: 1.5;
//   color: #000000;
//   /* letter-spacing: 1px; */
//   font-weight: 700;
//   /* text-transform: uppercase; */
//   animation: blur 1.5s ease-out infinite;
//   text-shadow: 0px 0px 5px #fff, 0px 0px 7px #fff;

//   @keyframes blur {
//     from {
//       text-shadow: 0px 0px 5px #fff, 0px 0px 5px #fff, 0px 0px 15px #fff,
//         0px 0px 15px #fff, 0px 0px 15px #fff, 0px 0px 15px #fff,
//         0px 0px 15px #fff, 0px 0px 15px #fff, 0px 0px 25px #fff,
//         0px 0px 25px #fff, 0px 0px 25px #9fc2ec, 0px 0px 30px #9fc2ec,
//         0px 10px 20px #9fc2ec, 0px 10px 20px #9fc2ec, 0px 10px 20px #9fc2ec,
//         0px 10px 20px #9fc2ec, 0px -10px 20px #9fc2ec, 0px -10px 20px #9fc2ec;
//     }
//   }
// `;
