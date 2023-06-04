import styled from '@emotion/styled';

export const Wraper = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 48px;
  justify-content: center;
  margin-bottom: 30px;
  padding: 0;
`;

export const Card = styled.li`
  position: relative;
  width: 380px;
  height: 460px;
  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;
  list-style: none;
`;

export const Img = styled.img`
  position: absolute;
  width: 80px;
  height: 80px;
  margin-top: 170px;
  margin-left: 54px;
  border: 8px solid #ebd8ff;
  box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06),
    inset 0px -2.19582px 4.39163px #ae7be3,
    inset 0px 4.39163px 3.29372px #fbf8ff;
  border-radius: 50%;
  z-index: 10;
`;

export const Line = styled.div`
  position: absolute;
  top: 214px;
  left: 0;
  height: 8px;
  width: 380px;
  background: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
    inset 0px -1.71846px 3.43693px #ae7be3, inset 0px 3.43693px 2.5777px #fbf8ff;
`;

export const Logo = styled.img`
  margin-top: 20px;
  margin-left: 20px;
`;

export const Picture = styled.img`
  position: absolute;
  top: 28px;
  left: 36px;
`;

export const ItemTweets = styled.p`
  margin-top: 242px;
  margin-bottom: 16px;
  text-align: center;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  text-transform: uppercase;
  color: #ebd8ff;
`;

export const ItemFollowers = styled.p`
  margin-bottom: 26px;
  text-align: center;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  text-transform: uppercase;
  color: #ebd8ff;
`;

export const Button = styled.button`
  display: block;
  margin: 0 auto;
  width: 196px;
  height: 50px;

  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  text-transform: uppercase;
  color: #373737;

  background-color: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;
  cursor: pointer;
`;
