import FriendList from './components/FriendList/FriendList';
import friends from './components/data/friends.json';
import Profile from './components/Profile/Profile';
import user from './components/data/user.json';
import Statistics from './components/Statistics/Statistics';
import statisticalData from './components/data/statistical-data.json';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';
import transactions from './components/data/transactions.json';

import './App.css';

function App() {
  return (
    <div className="App">
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={statisticalData} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
}

export default App;
