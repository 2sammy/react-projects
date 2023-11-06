//import logo from './logo.svg';
import './App.css';
//import Hello from './components/Hello';
import {Message, Content} from './components/message';
import Profile from './components/Profile';

function App() {
  return (
    <div className="App">
      <Profile name="mike" />
      <Message content="hello receive my content" />
      <h1>hello ,my profile picture</h1>

      
      </div>
  )
}

export default App;
