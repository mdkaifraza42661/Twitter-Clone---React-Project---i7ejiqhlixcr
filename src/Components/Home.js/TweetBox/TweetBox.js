import React, { useState } from 'react'
import { Avatar } from '@mui/material'
import Button from '@mui/material/Button';
import './TweetBox.css';
import db from './firebase'
import firebase from 'firebase/compat';

function TweetBox() {

  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");

  const sendTweet = (e) => {
    e.preventDefault();

    db.collection('posts').add({
      displayName: "KavitaSaini",
      username: "KavitaSaini29",
      timestamp: firebase.firestore.FieldValue.
        serverTimestamp(),
      Verified: true,
      text: tweetMessage,
      image: tweetImage,
      avatar: "https://imgs.search.brave.com/V5ISbSs-f_ZHYnttNH20_AnL9KwG44iHIflqNhDmfLM/rs:fit:474:474:1/g:ce/aHR0cHM6Ly93b25k/ZXItZGF5LmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvMjAyMy8w/My93b25kZXItZGF5/LWF2YXRhci1zbWls/ZXktNDUucG5n"

    })
    setTweetMessage("")
    setTweetImage("")
  }

  return (
    <div className='tweetBox'>
      <form>
        <div className='tweetBox_input'>
          <Avatar src='https://imgs.search.brave.com/V5ISbSs-f_ZHYnttNH20_AnL9KwG44iHIflqNhDmfLM/rs:fit:474:474:1/g:ce/aHR0cHM6Ly93b25k/ZXItZGF5LmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvMjAyMy8w/My93b25kZXItZGF5/LWF2YXRhci1zbWls/ZXktNDUucG5n' />
          <input onChange={(e) => setTweetMessage(e.target.value)}
            type="text" value={tweetMessage} placeholder="What's happening" />
        </div>
        <input onChange={(e) => setTweetImage(e.target.value)}
          className='tweetBox_imageInput' value={tweetImage} placeholder="optional:Enter image URL" type='text' />
        <Button onClick={sendTweet} className='tweetBox_tweetButton' >Tweet</Button>
      </form>
    </div>
  )
}

export default TweetBox
