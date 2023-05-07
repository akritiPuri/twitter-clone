import { useState } from "react";
import axios from "axios";
import "./CreateTweet.css";
const CreateTweet = () => {
  const [tweetContent, setTweetContent] = useState("");
  const[imageurl, setImageUrl]= useState("");
  const upload = async () => {
    try{
            const res = await axios.post("https://react-workshop-todo.fly.dev/posts", {
      
      content: tweetContent,
      image:
        "https://images.unsplash.com/photo-1599302592205-d7d683c83eea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dHJvcGljYWwlMjBzdW5zZXR8ZW58MHx8MHx8&w=1000&q=80",
    },{
        headers:{
            apiKey:"645738ff7213f63d43558911"
        }
    })
    setTweetContent("")
    setImageUrl("")
} catch(e){
    console.log(e)
};
    
  }
  const handleSubmit = () => {
    upload();
    console.log({ tweetContent });
  };
  return (
    <div className="tweet-create">
      <textarea
        id="tweet-text"
        placeholder="What's happening?"
        value={tweetContent}
        onChange={(e) => {
          setTweetContent(e.target.value);
        }}
      ></textarea>

      <div className="tweet-controls">
        <span id="char-count">258</span>
        <button id="tweet-btn" onClick={handleSubmit}>
          Tweet
        </button>
      </div>
    </div>
  );
};
export default CreateTweet;
