import React, {useState} from 'react';
import './TweetBox.css';
import {Avatar,Button} from "@material-ui/core";
import db from './firebase';

function TweetBox() {
    const [tweetMessage,setTweetMessage] = useState("");
    const [tweetImage,setTweetImage] = useState("");
    
    const sendTweet =(e) => {
        e.preventDefault();

        db.collection('posts').add({
            displayName: "Ritik Agarwal",
            username: "ag_ritik",
            verified: true,
            text: tweetMessage,
            image: tweetImage,
            avatar:"https://pbs.twimg.com/profile_images/865695281492381696/81tOUsc7_400x400.jpg"
        });

        setTweetMessage("");
        setTweetImage("");
    };

    return (
        <div className="tweetbox">
            <form>
                <div className="tweetbox__input">
                    <Avatar src="https://pbs.twimg.com/profile_images/865695281492381696/81tOUsc7_400x400.jpg" />
                    <input 
                        onChange={(e) => setTweetMessage(e.target.value)}
                        value={tweetMessage}
                        placeholder="What's happening ?" 
                        type="text" />   
                </div>
                
                <input 
                onChange={(e) => setTweetImage(e.target.value)}
                value={tweetImage}
                placeholder="Enter image URL"
                type="text"  
                className="tweetbox__imageinput" 
                />
                
                <Button 
                    className="tweetbox__button"
                    type="submit"
                    onClick={sendTweet} >
                    Tweet
                </Button>
                
            </form>
        </div>
    )
}

export default TweetBox;
