//import logo from './logo.svg';
import './App.css';
//import Hello from './components/Hello';
import Counter from './components/Counter';
import {Message, Content} from './components/message';
import Profile from './components/Profile';
import Resume from './components/Resume';
import FunctionEvent from './components/FunctionEvent';
function App() {
  return (
    <div className="App">
      <Profile name="mike" lastname= "sanchez" />
      <Message content="hello receive my content" />
      <h1>hello ,my profile picture</h1>
      <Content />
      <Resume />
      <FunctionEvent />

      
      </div>
  )
}

export default App;
