import { useState, useEffect } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import logo from 'images/Logo.svg';
import picture from 'images/picture.png';
import {
  Wraper,
  Card,
  Picture,
  Logo,
  Img,
  Line,
  ItemTweets,
  ItemFollowers,
  Button,
} from './Tweets.styled';

const Tweets = () => {
  const [itemList, setItemList] = useState([]);
  const [page, setPage] = useState(1);
  //   const [following, setFollowing] = useState(false);

  const BASE_URL = 'https://647c6f74c0bae2880ad0b04c.mockapi.io';

  //   const fetchUsers = async () => {
  //     try {
  //       const response = await axios.get(
  //         `${BASE_URL}/users?page=${page}&limit=3`
  //       );
  //       return response.data;
  //     } catch (error) {
  //       console.error(error);
  //       throw error;
  //     }
  //   };

  //   const updateUsers = async (id, followers) => {
  //     try {
  //       const response = await axios.put(`${BASE_URL}/users/${id}`, followers);
  //       return response.data;
  //     } catch (error) {
  //       console.error(error);
  //       throw error;
  //     }
  //   };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${BASE_URL}/users?page=${page}&limit=3`
        );
        const data = response.data;
        setItemList(prevState => (page === 1 ? data : [...prevState, ...data]));
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [page]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get(
  //         `${BASE_URL}/users?page=${page}&limit=3`
  //       );
  //       const data = response.data;
  //       setItemList(prevState =>
  //         page === 1 ? data : [...prevState, ...data]
  //       );
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };

  //   fetchData();
  // }, [page]);

  //   const handleFollow = id => setFollowing(prevFollowing => prevFollowing + 1);

  const loadMore = () => setPage(prevPage => prevPage + 1);

  return (
    <>
      <div>
        <Button type="button">
          <NavLink to="/">
            <span>Back</span>
          </NavLink>
        </Button>
      </div>
      <Wraper>
        {itemList.map(({ id, tweets, followers, avatar }) => (
          <Card key={id}>
            <Logo src={logo} alt="logo GOIT" />
            <Picture src={picture} alt="" />
            <Img src={avatar} alt="avatar" />
            <Line></Line>
            <ItemTweets>{tweets} TWEETS</ItemTweets>
            <ItemFollowers>
              {followers.toLocaleString('en-US')} FOLLOWERS
            </ItemFollowers>
            <Button type="button">FOLLOW</Button>
          </Card>
        ))}
      </Wraper>
      <Button type="button" onClick={loadMore}>
        Load More
      </Button>
    </>
  );
};

export default Tweets;
