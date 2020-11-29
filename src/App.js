// import FriendList from './components/FriendList/FriendList';
// import friends from './components/data/friends.json';
import Profile from './components/Profile/Profile';
import user from './components/data/user.json';

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
      {/* <FriendList friends={friends} /> */}
    </div>
  );
}

export default App;
