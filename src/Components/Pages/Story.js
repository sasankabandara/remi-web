import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Pages/Story.css';

const Story = () => {
  return (
    <div className="story-container">
      <h1 className="title">$REMY A STORY OF <span className="highlight">EMPOWERMENT</span></h1>
      <p className="story-text">🦮 $REMY is not just a community owned token it’s a symbol of freedom, strength, unity, and community 💪empowerment.</p>
      <p className="story-text">This is also the very premise of which Telegram represents…</p>
      <p className="story-text">📨 Just but a few years ago, Pavel Durov refused to grant Russian security services access to users' encrypted messages on his popular Telegram messaging app. The reply from authorities was either submit or become wiped off the country’s digital map. But Pavel Durov stood strong and refused to give in to the demands! Using a combination of wily cyber-dodging tactics and the force of Telegram’s growing reach, the 35-year-old Russian-born entrepreneur humiliated and outmaneuvered Russia’s state telecommunications regulator!</p>
      <p className="story-text">Fun Fact – $REMY 🦮 made its big entrance debut in Pavel Durov’s video teaser!!!</p>
      <button className="btn story-button">Story Link</button>
    </div>
  );
};

export default Story;
