const TweetBody = ({ image }) => {
  return (
    <>
      <p className="tweet-text">This is a sample tweet!</p>
      <img className="tweet-image" src={image} alt="Tweet Image" />
    </>
  );
};
export default TweetBody;
