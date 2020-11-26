import FriendList from './components/friendlist/FriendList';
import './App.css';
import friends from './components/friendlist/friends.json';

function App() {
  return (
    <div className="App">
      <FriendList friends={friends} />
    </div>
  );
}

export default App;
