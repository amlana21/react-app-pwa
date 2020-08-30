import React,{useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import Cookies from 'universal-cookie'

function App() {
  
  useEffect(()=>{
    const cookistored = new Cookies();
    console.log(`This is the stored cookie: ${cookistored.get('reactfromblog')}`)
    alert(cookistored.get('reactfromblog'))
    const cookies = new Cookies();
    cookies.set('reactfromblog', 'this_works', { path: '/' });
  },[])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
