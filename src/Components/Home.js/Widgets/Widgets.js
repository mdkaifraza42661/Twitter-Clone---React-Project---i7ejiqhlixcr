import React from 'react'
import './Widgets.css'
import { TwitterTimelineEmbed, TwitterShareButton, TwitterTweetEmbed } from 'react-twitter-embed'
import { Search } from '@mui/icons-material'

function Widgets() {
  return (
    <div className='widgets'>
      <div className='widgets_input'>
        <Search className='widgets_searchIcon' />
        <input placeholder='Search Twitter' type='text' />
      </div>
      <div className='widgets_widgetContainer'>
        <h2>What's happening</h2>
        <TwitterTweetEmbed tweetId='1637080675642687488' />
        <TwitterTimelineEmbed sourceType='profile' screenName='KavitaSaini29' options={{ height: 400 }} />
        <TwitterShareButton url={"https://www.facebook.com/profile.php?id=100025440051321"} options={{ text: 'Hello', via: "KavitaSaini29" }} />
      </div>
    </div>
  )
}

export default Widgets
