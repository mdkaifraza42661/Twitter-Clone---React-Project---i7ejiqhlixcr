import React, {useState, useEffect} from 'react'
import TweetBox from '../TweetBox/TweetBox.js'
import './Feed.css'
import Post from '../Post/Post.js'
import db from '../firebase.js'
import FlipMove from 'react-flip-move'
function Feed() {
  const [posts, setposts] = useState([])
  useEffect(() => {
    db.collection('posts').orderBy("timestamp", "desc").onSnapshot(snapshot => {
      setposts(snapshot.docs.map(doc => doc.data()))
    })
  }, [])
  return (
    <div className='feed'>
      <div className='feed_header'>
        <h2>Home</h2>
      </div>
      <TweetBox />
      <FlipMove>
        {posts.map(post => (
          <Post key={post.key}
            displayName={post.displayName}
            username={post.userName}
            verified={post.verified}
            text={post.text}
            image={post.image}
            avatar={post.avatar}
          />
        ))}
      </FlipMove>
    </div>
  )
}

export default Feed
