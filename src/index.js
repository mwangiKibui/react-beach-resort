import React from 'react';
import ReactDOM from 'react-dom';

//import './index.css';
//wrap everything inside the Router
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {RoomProvider} from './Context';
import Loading from './components/Loading'
const elems = 
<RoomProvider>
<Router>
<App />
</Router>
</RoomProvider>

ReactDOM.render(
  elems
, document.getElementById('root'));
serviceWorker.unregister();
