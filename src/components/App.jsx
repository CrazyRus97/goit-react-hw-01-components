import user from './profile/user.json';
import { Profile } from './profile/Profile';

import data from './statistics/data.json';
import { Statistics } from './statistics/Statistic';

import friends from './friends/friends.json';
import { Friends } from './friends/FriendList';

import transactions  from './transactionHistory/transactions.json';
import { TransactionHistory  } from './transactionHistory/TransactionHistory';

export const App = () => {
  return (
    <section>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics
        title="Upload stats"
        stats={data}
      />
      <Friends
        friends={friends}
      />
      <TransactionHistory
        items={transactions}
      />
    </section>
    
  );
};


