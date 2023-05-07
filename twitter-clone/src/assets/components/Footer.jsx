import { useState, useEffect } from "react";
const Footer = () => {
  const [isLiked, setIsLiked] = useState(0);
  const toggle = () => {
    setIsLiked((isLiked) => isLiked + 1);
  };
  useEffect(() => {
    console.log(`hello`);
  }, []);

  return (
    <div className="tweet-footer">
      <button className="btn-reply">Reply</button>
      <button className="btn-retweet">Retweet</button>
      <button className="btn-like" onClick={toggle}>
        {isLiked} Likes
      </button>
      <button className="btn-share">Share</button>
    </div>
  );
};
export default Footer;
