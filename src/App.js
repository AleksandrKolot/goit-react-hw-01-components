import FriendList from './components/FriendList/FriendList';
import './App.css';
import friends from './components/data/friends.json';

function App() {
  return (
    <div className="App">
      <FriendList friends={friends} />
    </div>
  );
}

export default App;
