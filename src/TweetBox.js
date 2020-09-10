import React from 'react';
import './TweetBox.css';
import {Avatar,Button} from "@material-ui/core";


function TweetBox() {
    return (
        <div className="tweetbox">
            <form>
                <div className="tweetbox__input">
                    <Avatar src="https://pbs.twimg.com/profile_images/865695281492381696/81tOUsc7_400x400.jpg" />
                    <input placeholder="What's happening ?" type="text" />   
                </div>
                
                <input 
                placeholder="Enter image URL"
                type="text"  
                className="tweetbox__imageinput" 
                />
                
                <Button className="tweetbox__button">
                    Tweet
                </Button>
                
            </form>
        </div>
    )
}

export default TweetBox;
