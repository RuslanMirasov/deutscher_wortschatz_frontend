import css from './App.module.css';
import friends from 'json/friends.json';
import user from 'json/user.json';
import data from 'json/data.json';
import transactions  from 'json/transactions.json';
import { Section } from 'components/Section/Section';
import { Profile } from 'components/Profile/Profile';
import { Statistics } from 'components/Statistics/Statistics';
import { FriendList } from 'components/FriendList/FriendList';
import { TransactionHistory } from 'components/TransactionHistory/TransactionHistory';


export const App = () => {
  return (
    <main className={css.main}>
      <h1 hidden>React homework 1</h1>

      <Section title='Social media profile'>
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
      </Section>
        
      <Section title='Statistics Section'>
        <Statistics title='Upload stats' stats={data} />
      </Section>

      <Section title='Friends list'>
        <FriendList friends={friends} />
      </Section>

      <Section title='Transaction history'>
        <TransactionHistory items={transactions} />
      </Section>
      
    </main>
  );
};
