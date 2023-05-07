import axios from "axios";
import { useEffect, useState } from "react";

import Tweet from "../assets/components/Tweet";
import { useParams } from "react-router-dom";
const SingleTweet = () => {
  const [tweet, setTweet] = useState(null);
  const { id } = useParams();
  const fetchTweet = async () => {
    const resp = await axios.get(
      `https://react-workshop-todo.fly.dev/posts/${id}`,
      {
        headers: {
          apiKey: "645738ff7213f63d43558911",
        },
      }
    );
    console.log(resp.data);
    setTweet(resp.data.post);
  };
  useEffect(() => {
    fetchTweet();
  }, []);
  return (
    <>
      {tweet ? (
        <Tweet
          avatar={
            "https://avatars.githubusercontent.com/u/59720909?s=400&u=f621c535a0e1e4f422473ae38894e6aacfc932d0&v=4"
          }
          content={tweet?.content}
          id={tweet?._id}
          name={tweet?.user.fullname}
          username={tweet?.user.name}
          image={tweet?.image}
        />
      ) : (
        <h1> loading...</h1>
      )}
    </>
  );
};
export default SingleTweet;
