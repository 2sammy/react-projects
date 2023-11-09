//import logo from './logo.svg';
import './App.css';
//import Hello from './components/Hello';
//import Counter from './components/Counter';
import Message from './components/message';
import Profile from './components/Profile';
import Resume from './components/Resume';
import FunctionEvent from './components/FunctionEvent';
import ClassEvent from './components/ClassEvent';
import FunctionalComponent from './components/FunctionalComponent';
function App() {
  return (
    <div className="App">
      <Profile name="mike" lastname= "sanchez" />
      <Message content="hello receive my content" />
      <h1>hello ,my profile picture</h1>
      
      <Resume />
      <FunctionEvent />
      <ClassEvent />
      <FunctionalComponent />

      
      </div>
  )
}

export default App;
