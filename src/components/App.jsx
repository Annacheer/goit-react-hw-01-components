import React from 'react';
import Profile from './profile/Profile';
import user from './profile/user.json'


export default function App() {
  return (
    <div>
      <Profile
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes} />
    </div>
  );
}