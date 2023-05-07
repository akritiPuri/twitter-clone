import Header from "./Header";
import TweetBody from "./TweetBody";
import Footer from "./footer";
import {useNavigate}from "react-router-dom";
const Tweet = ({ name, username, timestamp, image,avatar,id }) => {
  const navigate = useNavigate();
  return (
    <div className="tweet" onClick={() => navigate(`/tweet/${id}`)}>
      <img
        className="profile-pic"
        src={avatar}
        alt="Profile Picture"
      />
      <div className="tweet-content">
        <Header name={name} username={username} timestamp={timestamp} />
        <Footer />
        <TweetBody image={image} />
      </div>
    </div>
  );
};
export default Tweet;
