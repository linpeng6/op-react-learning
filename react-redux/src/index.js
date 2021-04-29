import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from './redux/store'

function render(){
  ReactDOM.render(
    <React.StrictMode>
      <App store={store}/>
    </React.StrictMode>,
    document.getElementById('root')
  );
}

render()

store.subscribe(render)