import logo from 'images/Logo.svg';
import picture from 'images/picture.png';
import user from 'images/User.png';
import { NavLink } from 'react-router-dom';
import {
  Card,
  Picture,
  Logo,
  Img,
  Cirkle,
  Line,
  ItemTweets,
  ItemFollowers,
  Button,
} from './CardHome.styled';

export default function CardHome() {
  return (
    <Card>
      <Logo src={logo} alt="logo GOIT" />
      <Picture src={picture} alt="" />
      <Img src={user} alt="avatar" />
      <Cirkle></Cirkle>
      <Line></Line>
      <ItemTweets>777 TWEETS</ItemTweets>
      <ItemFollowers>100,500 FOLLOWERS</ItemFollowers>
      <NavLink to="/tweets">
        <Button type="button">
          <span>GO!</span>
        </Button>
      </NavLink>
    </Card>
  );
}
