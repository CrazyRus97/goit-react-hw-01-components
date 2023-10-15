import user from './profile/user.json';
import { Profile } from './profile/Profile';

import data from './statistics/data.json';
import { Statistics } from './statistics/Statistic';

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
    </section>
    
  );
};


