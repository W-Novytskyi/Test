import { useState, useEffect } from "react";

const App = () => {
  const [itemList, setItemList] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetch(
      `https://647c6f74c0bae2880ad0b04c.mockapi.io/users?page=${page}&limit=3`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setItemList((prevState) =>
          page === 1 ? data : [...prevState, ...data]
        );
      })
      .catch((error) => {
        console.error(error);
      });
  }, [page]);

  const loadMore = () => setPage((prevPage) => prevPage + 1);

  return (
    <>
      <ul>
        {itemList.map(({ id, user, tweets, followers, avatar }) => (
          <li key={id}>
            <h2>{user}</h2>
            <img src={avatar} alt="" />
            <p>{tweets} TWEETS</p>
            <p>{followers.toLocaleString("en-US")} FOLLOWERS</p>
            <button type="button" onClick={handleFollow}>
              FOLLOW
            </button>
          </li>
        ))}
      </ul>
      <button type="button" onClick={loadMore}>
        Load More
      </button>
    </>
  );
};

export default App;
