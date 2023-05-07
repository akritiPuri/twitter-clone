const Header = ({ name, username, timestamp }) => {
  return (
    <div className="tweet-header">
      <h3 className="username">{name}</h3>
      <span className="handle">{username}</span>
      <span className="timestamp">{timestamp}</span>
    </div>
  );
};
export default Header;
