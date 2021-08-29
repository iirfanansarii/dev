import './App.css';
import { Router } from '@reach/router';
import SignUp from './pages/Signup.jsx';
import Signin from './pages/Signin.jsx';
import Home from './pages/Home';
import CreatePost from './pages/CreatePost';
import SinglePost from './pages/SinglePost';

function App() {
  return (
    <div className="App">
      <Router>
        <SignUp path="/" />
        <Signin path="/signin" />
        <Home path="/home" />
        <CreatePost path="/createpost" />
        <SinglePost path="/singlepost" />
      </Router>
    </div>
  );
}

export default App;
