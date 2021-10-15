
import { BrowserRouter as Router, Route } from 'react-router-dom';

import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'
import './App.css';

function App() {

  return (
    <Router className='App'>
        <Route path='/' component={LoginScreen} exact/>
        <Route path='/chat' component={HomeScreen} exact/>
        <Route path='/login' component={LoginScreen} exact/>
        <Route path='/register' component={RegisterScreen} exact/>
    </Router>
  );
};

export default App;

export const image = 'https://media.istockphoto.com/photos/visual-contents-concept-social-networking-service-streaming-video-picture-id1312418309';
