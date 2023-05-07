import Tweet from "../assets/components/Tweet";
import "./Home.css";
import axios from "axios";
import { useEffect, useState } from "react";
import CreateTweet from "../assets/components/CreateTweet";
import Navbar from "../assets/components/assignment/NavBar";
import About from "./About";

const names = [
  { name1: "Akriti", lastname: "Puri" },
  { name1: "Kripa", lastname: "Don" },
  { name1: "Sita", lastname: "Mata" },
  { name1: "Ram", lastname: "Shree" },
];
const App = () => {
  const [tweets, setTweets] = useState([]);
  const fetchTweets = async () => {
    const posts = await axios.get(
      "https://react-workshop-todo.fly.dev/posts/all",
      {
        headers: {
          apiKey: "645738ff7213f63d43558911",
        },
      }
    );
    console.log(posts.data);
    setTweets(posts.data);
  };
  useEffect(() => {
    fetchTweets();
  }, []);
  return (
    <>
      <CreateTweet />
      {tweets.map((tweet) => {
        return (
          <Tweet
            avatar={
              `https://avatars.githubusercontent.com/u/${tweet.user.github}`
            }
            name={tweet.authorname}
            image={tweet.image}
            username={`@${tweet.authorname}`}
            id={tweet._id}
          />
        );
      })}

      <Tweet
        name={"Akriti"}
        username={"@akriti"}
        timestamp={"-4h"}
        image={
          "https://images.ctfassets.net/81iqaqpfd8fy/3r4flvP8Z26WmkMwAEWEco/870554ed7577541c5f3bc04942a47b95/78745131.jpg?w=1200&h=1200&fm=jpg&fit=fill"
        }
      />
      <Tweet
        name={"Kripa"}
        username={"@kripa"}
        timestamp={"-5h"}
        image={
          "./C:UsersVisionOneDriveDesktop\react\twitter-clonesrcassetsImagemichael-jackson-gettyimages-89446104.jpg"
        }
      />
      <Tweet
        name={"Sita"}
        username={"@sita"}
        timestamp={"-6h"}
        image={
          "./C:UsersVisionOneDriveDesktop\react\twitter-clonesrcassetsImage\news-2007-09-near01_bhutto.webp"
        }
      />
    </>
  );
};

export default App;
