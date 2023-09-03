import React from 'react';
import Profile from './profile/Profile';
import user from '../user.json';
import StatisticsList from './statistics/StatisticsList';
import Section from './statistics/Section';
import data from '../data.json';
import FriendList from './friendlist/FriendList';
import friends from '../friends.json';
import TransactionHistory from './transactions/TransactionHistory';
import transactions from '../transactions.json';

export default function App() {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
      <section className="statistics">
        <Section>
          <StatisticsList items={data} />
        </Section>
      </section>
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />;
    </div>
  );
}
